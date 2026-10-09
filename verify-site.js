/**
 * Automated Verification Script for Sparkle & Stitch Gallery Website
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

console.log('--- STARTING COMPREHENSIVE SITE VERIFICATION ---\n');

// 1. Verify Core Files Exist
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
  'assets/images/gallery/gallery-blouse-1.jpg',
  'assets/images/gallery/gallery-blouse-2.jpg',
  'assets/images/gallery/gallery-lehenga-1.jpg',
  'assets/images/gallery/gallery-lehenga-2.jpg',
  'assets/images/gallery/gallery-chaniya-1.jpg',
  'assets/images/gallery/gallery-anarkali-1.jpg',
  'assets/images/gallery/gallery-suit-1.jpg',
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
    assert(fs.existsSync(imgPath), `${htmlFile} references valid image: ${imgRel}`);
  }
});

// 3. Verify Links and Business Information
const indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

assert(indexContent.includes('tel:+919428886829'), 'Phone call links correctly formatted: tel:+919428886829');
assert(indexContent.includes('https://wa.me/919428886829'), 'WhatsApp links correctly formatted with number: 919428886829');
assert(indexContent.includes('https://www.google.com/search?q=Sparkel+and+stitch+gallery'), 'Google Reviews links to supplied search URL');
assert(indexContent.includes('https://www.instagram.com/sparkle_and_stitch_gallery'), 'Instagram link verified from project record');
assert(indexContent.includes('Shop No. 1 &amp; 2, Samarth Complex'), 'Correct Vadodara address displayed in HTML');
assert(indexContent.includes('Pinki Vyas'), 'Customer review 1 (Pinki Vyas) displayed');
assert(indexContent.includes('Shah Priyanka'), 'Customer review 2 (Shah Priyanka) displayed');
assert(indexContent.includes('Pragna BhaveshPatel'), 'Customer review 3 (Pragna BhaveshPatel) displayed');
assert(indexContent.includes('9 Google Reviews'), 'Google reviews count indicator displayed');

// 4. Verify LocalBusiness Schema JSON-LD
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
    assert(schema.address.addressRegion === 'Gujarat', 'Schema addressRegion is Gujarat');
  } catch (err) {
    assert(false, `JSON-LD parsing error: ${err.message}`);
  }
}

// 5. Verify config.js syntax and properties
const configContent = fs.readFileSync(path.join(ROOT_DIR, 'assets/js/config.js'), 'utf8');
assert(configContent.includes('BUSINESS_CONFIG'), 'config.js exports BUSINESS_CONFIG');
assert(configContent.includes('COLLECTIONS'), 'config.js exports COLLECTIONS');
assert(configContent.includes('SERVICES'), 'config.js exports SERVICES');
assert(configContent.includes('REVIEWS'), 'config.js exports REVIEWS');
assert(configContent.includes('FAQS'), 'config.js exports FAQS');
assert(configContent.includes('GALLERY_ITEMS'), 'config.js exports GALLERY_ITEMS');
assert(configContent.includes('919428886829'), 'config.js contains WhatsApp number 919428886829');

console.log(`\n--- VERIFICATION SUMMARY: ${passed} PASSED, ${failed} FAILED ---`);
process.exit(failed > 0 ? 1 : 0);
