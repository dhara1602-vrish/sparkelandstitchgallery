/**
 * Sparkle & Stitch Gallery — Centralized Business Configuration
 * Single source of truth for all business contact details, locations,
 * social links, collections, services, reviews, and FAQs.
 */

export const BUSINESS_CONFIG = {
  businessName: "Sparkel and stitch gallery",
  displayName: "Sparkle & Stitch Gallery",
  tagline: "Designed Around You. Stitched with Care.",
  founder: "Sapna Patel",
  category: "Fashion Designer | Custom Stitching | Designer Women's Wear",
  phone: "+91 94288 86829",
  phoneRaw: "+919428886829",
  whatsappNumber: "919428886829",
  address: "Shop No. 1 & 2, Samarth Complex, Near Rajasthan Mithai Wala, Mother School Char Rasta, Iscon Temple Road, Gotri Road, Vadodara, Gujarat 390007, India.",
  addressDetails: {
    shop: "Shop No. 1 & 2, Samarth Complex",
    landmark: "Near Rajasthan Mithai Wala, Mother School Char Rasta",
    road: "Iscon Temple Road, Gotri Road",
    city: "Vadodara",
    state: "Gujarat",
    postalCode: "390007",
    country: "India"
  },
  googleBusinessUrl: "https://www.google.com/search?q=Sparkel+and+stitch+gallery",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Sparkle+%26+Stitch+Gallery+Shop+No+1+2+Samarth+Complex+Gotri+Road+Vadodara+Gujarat+390007",
  instagramUrl: "https://www.instagram.com/sparkle_and_stitch_gallery",
  websiteUrl: "",
  reviewCount: 9,
  description: "Sparkle & Stitch Gallery is a fashion design studio specializing in custom stitching and designer women's wear. We create elegant blouses, suits, lehengas, chaniya cholis, Anarkalis, and customized outfits with quality fabrics, fine craftsmanship, and perfect fitting for weddings, festivals, parties, and everyday wear."
};

/**
 * Generates an editable WhatsApp click-to-chat URL with a prefilled message.
 * @param {string} customMessage - Message to encode
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppUrl(customMessage) {
  const defaultMsg = "Hello Sparkle & Stitch Gallery, I would like to enquire about your designer wear and custom stitching services.";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

/**
 * 6 Core Clothing Collections
 */
export const COLLECTIONS = [
  {
    id: "blouses",
    title: "Designer Blouses",
    category: "Blouses",
    shortDesc: "Custom blouse designs for traditional outfits, celebrations, weddings, and festive occasions.",
    details: "Meticulously crafted designer blouses featuring custom necklines, princess cuts, back patterns, intricate embroidery detailing, latkans, and comfortable structured fit.",
    image: "assets/images/cat-blouses.jpg",
    alt: "Designer blouse with exquisite gold zari and thread embroidery work",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about your Designer Blouses collection and custom stitching options."
  },
  {
    id: "suits",
    title: "Suits & Ethnic Sets",
    category: "Suits",
    shortDesc: "Elegant suits and customized ethnic outfits tailored for special celebrations and daily grace.",
    details: "Custom-tailored straight-cut suits, palazzo sets, kurti-pant pairs, and festive salwar suits designed to complement your fabric and style preference.",
    image: "assets/images/cat-suits.jpg",
    alt: "Tailored designer Indian suit set with embroidered kurti and dupatta",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about your Suits & Ethnic Sets collection and custom tailoring."
  },
  {
    id: "lehengas",
    title: "Designer Lehengas",
    category: "Lehengas",
    shortDesc: "Designer lehengas for weddings, festive events, parties, and special occasions.",
    details: "Grand silhouettes with personalized flare, can-can layering, bespoke waist fitting, ornate borders, and custom blouses created for brides and wedding guests.",
    image: "assets/images/cat-lehengas.jpg",
    alt: "Luxury deep wine burgundy bridal lehenga with royal gold zari embroidery",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about your Designer Lehengas collection and wedding stitching services."
  },
  {
    id: "chaniya-cholis",
    title: "Chaniya Cholis",
    category: "Chaniya Cholis",
    shortDesc: "Traditional and designer chaniya cholis suitable for Navratri and other celebrations.",
    details: "Vibrant ethnic chaniya cholis featuring authentic Kutchi work, abhala mirror detailing, contrasting borders, and rhythmic flare crafted for Garba nights and cultural festivities in Gujarat.",
    image: "assets/images/cat-chaniya-choli.jpg",
    alt: "Traditional festive Gujarati chaniya choli with colorful mirror work and embroidery",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about your Chaniya Cholis collection for Navratri and festive occasions."
  },
  {
    id: "anarkalis",
    title: "Anarkali Outfits",
    category: "Anarkalis",
    shortDesc: "Elegant Anarkali styles for festive and special occasions.",
    details: "Floor-sweeping kalidar Anarkali gowns and flared suits with tailored yokes, delicate neck embroidery, flowing fall, and coordinating dupattas.",
    image: "assets/images/cat-anarkali.jpg",
    alt: "Graceful floor-length designer Anarkali outfit in ivory and gold threadwork",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about your Anarkali Outfits and custom tailoring."
  },
  {
    id: "customized",
    title: "Customized Outfits",
    category: "Custom Creations",
    shortDesc: "Personalized outfits based on customer preferences, selected designs, and available tailoring options.",
    details: "Bespoke creations designed from scratch around your vision—bring your fabric or design reference to our Vadodara studio to discuss silhouette, cut, and fit.",
    image: "assets/images/cat-customized.jpg",
    alt: "Fashion atelier workspace with measuring tape, tailor tools, and rich fabric swatches",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I have a custom outfit design in mind and would like to discuss stitching and tailoring options."
  }
];

/**
 * 6 Core Tailoring & Custom Stitching Services
 */
export const SERVICES = [
  {
    id: "custom-blouse-stitching",
    title: "Custom Blouse Stitching",
    desc: "Precision stitching for bridal, festive, and traditional blouses with tailored back patterns, cups, and lining.",
    image: "assets/images/cat-blouses.jpg",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about Custom Blouse Stitching services."
  },
  {
    id: "suit-stitching",
    title: "Suit Stitching",
    desc: "Tailored suit stitching for straight suits, palazzo sets, and ethnic wear with flattering cuts and clean finishes.",
    image: "assets/images/cat-suits.jpg",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about Suit Stitching services."
  },
  {
    id: "lehenga-design-stitching",
    title: "Lehenga Design and Stitching",
    desc: "End-to-end lehenga stitching with customized flare, can-can netting, waist finish, and coordinating blouse tailoring.",
    image: "assets/images/cat-lehengas.jpg",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about Lehenga Design and Stitching."
  },
  {
    id: "chaniya-choli-stitching",
    title: "Chaniya Choli Stitching",
    desc: "Authentic stitching for traditional and designer chaniya cholis for Navratri, Garba celebrations, and festive events.",
    image: "assets/images/cat-chaniya-choli.jpg",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about Chaniya Choli Stitching."
  },
  {
    id: "anarkali-stitching",
    title: "Anarkali Stitching",
    desc: "Custom stitching for floor-length Anarkalis, multi-kali flared gowns, and festive dresses tailored to your height.",
    image: "assets/images/cat-anarkali.jpg",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about Anarkali Stitching."
  },
  {
    id: "customized-womens-wear",
    title: "Customized Women's Wear",
    desc: "Bespoke tailoring based on your reference pictures, fabric selection, and specific design requirements.",
    image: "assets/images/cat-customized.jpg",
    whatsappMsg: "Hello Sparkle & Stitch Gallery, I would like to enquire about Customized Women's Wear tailoring."
  }
];

/**
 * Fashion Lookbook & Gallery Items
 */
export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Embroidered Velvet Bridal Blouse",
    category: "blouses",
    categoryName: "Blouse Designs",
    image: "assets/images/gallery/gallery-blouse-1.jpg",
    alt: "Designer velvet blouse back with intricate gold zari and latkan tassels",
    description: "Deep burgundy velvet blouse back featuring ornate zardozi vines, pearl drops, and handcrafted dori ties."
  },
  {
    id: "g2",
    title: "Royal Silk Zari Neckline Blouse",
    category: "blouses",
    categoryName: "Blouse Designs",
    image: "assets/images/gallery/gallery-blouse-2.jpg",
    alt: "Silk blouse with intricate paisley and pearl work neckline",
    description: "Intricately detailed silk blouse showcasing heirloom paisley motifs, fine seed pearls, and gold threadwork."
  },
  {
    id: "g3",
    title: "Heritage Burgundy Bridal Lehenga",
    category: "lehengas",
    categoryName: "Lehenga Designs",
    image: "assets/images/gallery/gallery-lehenga-1.jpg",
    alt: "Royal burgundy velvet wedding lehenga with grand zari work",
    description: "Regal bridal lehenga set tailored with voluminous flare, intricate architectural kalis, and embroidered veil."
  },
  {
    id: "g4",
    title: "Pastel Peach Resham Lehenga",
    category: "lehengas",
    categoryName: "Lehenga Designs",
    image: "assets/images/gallery/gallery-lehenga-2.jpg",
    alt: "Pastel peach designer lehenga with delicate resham embroidery",
    description: "Modern romantic pastel lehenga featuring silver resham florals and soft layered tulle drape."
  },
  {
    id: "g5",
    title: "Navratri Mirror Work Chaniya Choli",
    category: "chaniya-cholis",
    categoryName: "Chaniya Choli Designs",
    image: "assets/images/gallery/gallery-chaniya-1.jpg",
    alt: "Festive Gujarati chaniya choli with authentic mirror work and colorful motifs",
    description: "Traditional Gujarati festive chaniya choli with peacock panels, genuine abhala mirror work, and vibrant Garba flare."
  },
  {
    id: "g6",
    title: "Ivory & Antique Gold Kalidar Anarkali",
    category: "anarkalis",
    categoryName: "Anarkali Outfits",
    image: "assets/images/gallery/gallery-anarkali-1.jpg",
    alt: "Floor-length ivory Anarkali gown with gold embroidered yoke",
    description: "Regal ivory floor-length Anarkali with intricate neck yoke, micro-pleated skirt, and scalloped dupatta."
  },
  {
    id: "g7",
    title: "Emerald Silk Embroidered Kurti & Palazzo",
    category: "suits",
    categoryName: "Suits",
    image: "assets/images/gallery/gallery-suit-1.jpg",
    alt: "Emerald green raw silk suit set with fine threadwork",
    description: "Classic straight-cut silk suit with delicate floral bootis, wide-leg palazzo, and matching embroidered dupatta."
  },
  {
    id: "g8",
    title: "Atelier Custom Pattern & Tailoring Craft",
    category: "custom-creations",
    categoryName: "Custom Creations",
    image: "assets/images/gallery/gallery-custom-1.jpg",
    alt: "Custom tailoring craft with patterns, measuring tape, and rich fabrics",
    description: "The bespoke tailoring journey—custom measurements, pattern cutting, and fine garment construction."
  }
];

/**
 * Authentic Customer Reviews (Supplied Feedback)
 */
export const REVIEWS = [
  {
    id: 1,
    author: "Pinki Vyas",
    text: "“I ordered several dresses from Sapna, and they were delivered right on time.”",
    source: "Google Review",
    verified: true
  },
  {
    id: 2,
    author: "Shah Priyanka",
    text: "“The clothing selection is unique and high quality.”",
    source: "Google Review",
    verified: true
  },
  {
    id: 3,
    author: "Pragna BhaveshPatel",
    text: "“I had a great experience and would highly recommend them!”",
    source: "Google Review",
    verified: true
  }
];

/**
 * Frequently Asked Questions (Verified answers only)
 */
export const FAQS = [
  {
    id: "faq-1",
    question: "What types of outfits does Sparkle & Stitch Gallery offer?",
    answer: "Sparkle & Stitch Gallery specializes in designer women's wear and custom stitching. We create elegant blouses, suits, lehengas, chaniya cholis, Anarkalis, and customized outfits for weddings, festivals, parties, and everyday wear."
  },
  {
    id: "faq-2",
    question: "Do you provide custom blouse stitching?",
    answer: "Yes, we provide custom blouse stitching tailored to your measurements and preferred design, including designer necklines, wedding blouse patterns, and festive styles."
  },
  {
    id: "faq-3",
    question: "Can I enquire about lehengas and chaniya cholis?",
    answer: "Yes! You can explore and enquire about our designer lehengas for weddings and celebrations, as well as traditional chaniya cholis suitable for Navratri and festive occasions in Vadodara."
  },
  {
    id: "faq-4",
    question: "How can I discuss a customized outfit?",
    answer: "You can easily discuss your outfit ideas by contacting our studio via WhatsApp or phone, or by visiting our boutique in Samarth Complex, Gotri Road, Vadodara. Feel free to share your fabric choices or design preferences with us."
  },
  {
    id: "faq-5",
    question: "How do I contact the boutique?",
    answer: "You can call us directly at +91 94288 86829 or click any WhatsApp button on the website to start a direct chat. You can also visit our studio in Vadodara."
  },
  {
    id: "faq-6",
    question: "Where is Sparkle & Stitch Gallery located?",
    answer: "We are located at Shop No. 1 & 2, Samarth Complex, Near Rajasthan Mithai Wala, Mother School Char Rasta, Iscon Temple Road, Gotri Road, Vadodara, Gujarat 390007, India."
  },
  {
    id: "faq-7",
    question: "How can I ask about pricing and delivery time?",
    answer: "Pricing and delivery timelines depend on the specific garment design, fabric, and customization requirements. Please contact the boutique directly via WhatsApp or phone to confirm availability, pricing, customization options, and delivery timelines."
  }
];

/**
 * How It Works Process Steps
 */
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Explore Designs",
    desc: "Browse our collections, lookbook, and design inspiration for blouses, lehengas, suits, and festive wear."
  },
  {
    step: "02",
    title: "Share Your Requirements",
    desc: "Connect with the boutique via WhatsApp or phone to discuss the outfit, celebration date, and preferred style."
  },
  {
    step: "03",
    title: "Discuss Customization",
    desc: "Confirm available design options, measurements, pricing, and expected delivery timeline directly with the boutique."
  },
  {
    step: "04",
    title: "Finalize Your Outfit",
    desc: "Proceed with tailored crafting and fitting according to the arrangements confirmed with our studio."
  }
];
