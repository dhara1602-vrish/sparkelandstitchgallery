/**
 * Comprehensive Automated Verification Script for Sparkle & Stitch Gallery Website Redesign
 * Run with: agy-node verify-site.js
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`\x1b[32m[PASS]\x1b[0m ${message}`);
    passed++;
  } else {
    console.error(`\x1b[31m[FAIL]\x1b[0m ${message}`);
    failed++;
  }
}

console.log('--- STARTING COMPREHENSIVE REDESIGN VERIFICATION ---\n');

// 1. Verify Core Files & New Assets Exist
const requiredFiles = [
  'index.html',
  'collections.html',
  'custom-stitching.html',
  'gallery.html',
  'contact.html',
  'sitemap.xml',
  'robots.txt',
  'server.js',
  'assets/css/style.css',
  'assets/js/config.js',
  'assets/js/main.js',
  'assets/images/sparkle_and_stitch_logo.jpg',
  'assets/images/hero-fashion-studio.jpg',
  'assets/images/cat-blouses.jpg',
  'assets/images/cat-suits.jpg',
  'assets/images/cat-lehengas.jpg',
  'assets/images/cat-chaniya-choli.jpg',
  'assets/images/cat-anarkali.jpg',
  'assets/images/cat-customized.jpg',
  'assets/images/embroidery-craft-detail.jpg',
  'assets/images/gallery/gallery-blouse-1.jpg',
  'assets/images/gallery/gallery-blouse-2.jpg',
  'assets/images/gallery/gallery-lehenga-1.jpg',
  'assets/images/gallery/gallery-lehenga-2.jpg',
  'assets/images/gallery/gallery-chaniya-1.jpg',
  'assets/images/gallery/gallery-anarkali-1.jpg',
  'assets/images/gallery/gallery-suit-1.jpg',
  'assets/images/gallery/gallery-embroidery-1.jpg',
  'assets/images/gallery/gallery-custom-1.jpg'
];

requiredFiles.forEach(file => {
  const fullPath = path.join(ROOT_DIR, file);
  assert(fs.existsSync(fullPath), `File exists: ${file}`);
});

// 2. Verify Image References in HTML Files
const htmlFiles = ['index.html', 'collections.html', 'custom-stitching.html', 'gallery.html', 'contact.html'];
const imgRegex = /src=["'](assets\/images\/[^"']+)["']/g;

htmlFiles.forEach(htmlFile => {
  const content = fs.readFileSync(path.join(ROOT_DIR, htmlFile), 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgRel = match[1];
    const imgPath = path.join(ROOT_DIR, imgRel);
    assert(fs.existsSync(imgPath), `${htmlFile} references valid image on disk: ${imgRel}`);
  }
});

// 3. Verify Redesign Sections, Headings, and Copy in index.html
const indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

assert(indexContent.includes('Every Stitch.'), 'Hero headline "Every Stitch." present');
assert(indexContent.includes('A Little More You.'), 'Hero headline "A Little More You." present');
assert(indexContent.includes('Discover thoughtfully designed outfits, intricate hand embroidery, and personalised stitching'), 'Hero supporting text present');
assert(indexContent.includes('Explore Our Collections'), 'Primary CTA "Explore Our Collections" present');
assert(indexContent.includes('Customise Your Outfit'), 'Secondary CTA "Customise Your Outfit" present');
assert(indexContent.includes('Custom Fashion Studio &bull; Vadodara') || indexContent.includes('Custom Fashion Studio · Vadodara'), 'Subtle location label present');

assert(indexContent.includes('Crafted with Care. Created for You.'), 'Brand intro heading "Crafted with Care. Created for You." present');
assert(indexContent.includes('Find Your Signature Style'), 'Collections heading "Find Your Signature Style" present');
assert(indexContent.includes('The Beauty Is in the Details.'), 'Embroidery heading "The Beauty Is in the Details." present');
assert(indexContent.includes('A Gallery of Ideas &amp; Creations'), 'Gallery heading "A Gallery of Ideas & Creations" present');
assert(indexContent.includes('Designed Around Your Vision'), 'Services heading "Designed Around Your Vision" present');
assert(indexContent.includes('From Your Idea to Your Outfit'), 'Process heading "From Your Idea to Your Outfit" present');
assert(indexContent.includes('Experiences That Matter'), 'Reviews heading "Experiences That Matter" present');
assert(indexContent.includes('A Little Inspiration from Our Studio'), 'Instagram heading "A Little Inspiration from Our Studio" present');
assert(indexContent.includes("Let&#39;s Create Something Beautiful.") || indexContent.includes("Let's Create Something Beautiful."), 'Contact heading present');

assert(indexContent.includes('Sparkle in Every Stitch'), 'Tagline "Sparkle in Every Stitch" present in brand and footer');
assert(indexContent.includes('https://sparkelandstitchgallery.vercel.app/'), 'Canonical URL points to https://sparkelandstitchgallery.vercel.app/');

// 4. Verify Contact Information and Form Fields
assert(indexContent.includes('tel:+919428886829'), 'Phone call links correctly formatted: tel:+919428886829');
assert(indexContent.includes('https://wa.me/919428886829'), 'WhatsApp links correctly formatted with number: 919428886829');
assert(indexContent.includes('https://www.google.com/search?q=Sparkel+and+stitch+gallery'), 'Google Reviews links to supplied search URL');
assert(indexContent.includes('https://www.instagram.com/sparkle_and_stitch_gallery'), 'Instagram profile link verified');
assert(indexContent.includes('@sparkle_and_stitch_gallery'), 'Instagram handle displayed');
assert(indexContent.includes('enquiry-customer-name'), 'Form includes Customer Name field');
assert(indexContent.includes('enquiry-customer-phone'), 'Form includes Customer WhatsApp Number field');
assert(indexContent.includes('enquiry-outfit-type'), 'Form includes Outfit Category field');
assert(indexContent.includes('enquiry-occasion'), 'Form includes Occasion field');
assert(indexContent.includes('enquiry-fabric'), 'Form includes Fabric Details field');
assert(indexContent.includes('enquiry-notes'), 'Form includes Notes field');

// 5. Verify Reviews Authenticity (Unmodified)
assert(indexContent.includes('Pinki Vyas'), 'Customer review 1 (Pinki Vyas) displayed');
assert(indexContent.includes('Shah Priyanka'), 'Customer review 2 (Shah Priyanka) displayed');
assert(indexContent.includes('Pragna BhaveshPatel'), 'Customer review 3 (Pragna BhaveshPatel) displayed');

// 6. Verify LocalBusiness Schema JSON-LD
const schemaMatch = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(indexContent);
assert(schemaMatch !== null, 'JSON-LD structured data block present in index.html');
if (schemaMatch) {
  try {
    const schema = JSON.parse(schemaMatch[1]);
    assert(schema['@context'] === 'https://schema.org', 'Schema @context is https://schema.org');
    assert(Array.isArray(schema['@type']) && schema['@type'].includes('ClothingStore'), 'Schema includes ClothingStore');
    assert(schema.telephone === '+919428886829', 'Schema telephone matches verified phone');
    assert(schema.address.addressLocality === 'Vadodara', 'Schema addressLocality is Vadodara');
    assert(schema.address.postalCode === '390007', 'Schema postalCode is 390007');
    assert(schema.url === 'https://sparkelandstitchgallery.vercel.app/', 'Schema url is canonical URL');
  } catch (err) {
    assert(false, `JSON-LD parsing error: ${err.message}`);
  }
}

// 7. Verify config.js syntax and exports
const configContent = fs.readFileSync(path.join(ROOT_DIR, 'assets/js/config.js'), 'utf8');
assert(configContent.includes('BUSINESS_CONFIG'), 'config.js exports BUSINESS_CONFIG');
assert(configContent.includes('tagline: "Sparkle in Every Stitch"'), 'config.js tagline is "Sparkle in Every Stitch"');
assert(configContent.includes('COLLECTIONS'), 'config.js exports COLLECTIONS');
assert(configContent.includes('SERVICES'), 'config.js exports SERVICES');
assert(configContent.includes('GALLERY_ITEMS'), 'config.js exports GALLERY_ITEMS');
assert(configContent.includes('919428886829'), 'config.js contains WhatsApp number 919428886829');

console.log(`\n--- REDESIGN VERIFICATION SUMMARY: ${passed} PASSED, ${failed} FAILED ---`);
process.exit(failed > 0 ? 1 : 0);
