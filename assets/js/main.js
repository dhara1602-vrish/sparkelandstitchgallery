/**
 * Sparkle & Stitch Gallery — Editorial Interactive JavaScript
 * Modular ES script managing navigation, mobile drawer, gallery filter,
 * lightbox modal, form validation, and WhatsApp enquiry compiler.
 */

import {
  BUSINESS_CONFIG,
  getWhatsAppUrl
} from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initGalleryFilterAndLightbox();
  initFaqAccordion();
  initEnquiryBuilder();
  initMobileStickyBar();
  initNavigationHighlight();
});

/* --------------------------------------------------------------------------
   1. Header Scroll Shadow & Transparency
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Accessible Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Close when clicking nav links
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close with Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
      toggleBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Active Navigation State on Scroll
   -------------------------------------------------------------------------- */
function initNavigationHighlight() {
  const navLinks = document.querySelectorAll('.desktop-nav .nav-item-link');
  const sections = document.querySelectorAll('section[id]');
  if (!navLinks.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else if (href && href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   4. Gallery Filter & Interactive Lightbox Modal
   -------------------------------------------------------------------------- */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');

  // Filter Buttons
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (filter === 'all' || itemCat === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Lightbox Modal
  if (!lightbox) return;

  const imgEl = lightbox.querySelector('.lightbox-media img');
  const catEl = lightbox.querySelector('.lightbox-category');
  const titleEl = lightbox.querySelector('.lightbox-title');
  const descEl = lightbox.querySelector('.lightbox-desc');
  const waBtn = lightbox.querySelector('.lightbox-wa-btn');
  const closeBtn = lightbox.querySelector('.lightbox-close-btn');
  const prevBtn = lightbox.querySelector('.lightbox-prev-btn');
  const nextBtn = lightbox.querySelector('.lightbox-next-btn');

  let currentIndex = 0;
  let activeItemsList = [];

  const updateLightbox = (index) => {
    if (!activeItemsList.length) return;
    currentIndex = (index + activeItemsList.length) % activeItemsList.length;
    const currentItem = activeItemsList[currentIndex];

    const imgSrc = currentItem.getAttribute('data-img');
    const title = currentItem.getAttribute('data-title');
    const cat = currentItem.getAttribute('data-category-name');
    const desc = currentItem.getAttribute('data-desc');

    if (imgEl) {
      imgEl.src = imgSrc;
      imgEl.alt = title;
    }
    if (catEl) catEl.textContent = cat;
    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;

    if (waBtn) {
      const enquiryText = `Hello Sparkle & Stitch Gallery, I would like to enquire about this design from your gallery: "${title}".`;
      waBtn.href = getWhatsAppUrl(enquiryText);
    }
  };

  const openLightbox = (index) => {
    activeItemsList = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    if (!activeItemsList.length) activeItemsList = Array.from(galleryItems);

    currentIndex = index;
    updateLightbox(currentIndex);
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      openLightbox(idx);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentIndex - 1);
  });
  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentIndex + 1);
  });

  // Close when clicking outside content
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') updateLightbox(currentIndex + 1);
  });
}

/* --------------------------------------------------------------------------
   5. Accessible FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-button');
  if (!faqButtons.length) return;

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('aria-controls');
      const content = document.getElementById(targetId);

      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherId = otherBtn.getAttribute('aria-controls');
          document.getElementById(otherId)?.classList.remove('open');
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        content?.classList.remove('open');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        content?.classList.add('open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Custom Outfit Requirement Builder Form with Validation
   -------------------------------------------------------------------------- */
function initEnquiryBuilder() {
  const form = document.getElementById('outfit-enquiry-form');
  if (!form) return;

  const nameInput = document.getElementById('enquiry-customer-name');
  const phoneInput = document.getElementById('enquiry-customer-phone');
  const nameError = document.getElementById('name-error');
  const phoneError = document.getElementById('phone-error');

  const validatePhone = (val) => {
    // Allows 10 digit Indian number with optional +91 or leading 0
    const cleaned = val.replace(/[\s-]/g, '');
    return /^(?:\+?91)?[6-9]\d{9}$/.test(cleaned);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    const nameVal = nameInput?.value.trim() || '';
    if (nameVal.length < 2) {
      nameInput?.classList.add('has-error');
      if (nameError) nameError.classList.add('visible');
      isValid = false;
    } else {
      nameInput?.classList.remove('has-error');
      if (nameError) nameError.classList.remove('visible');
    }

    // Validate Phone
    const phoneVal = phoneInput?.value.trim() || '';
    if (!validatePhone(phoneVal)) {
      phoneInput?.classList.add('has-error');
      if (phoneError) phoneError.classList.add('visible');
      isValid = false;
    } else {
      phoneInput?.classList.remove('has-error');
      if (phoneError) phoneError.classList.remove('visible');
    }

    if (!isValid) {
      const firstInvalid = form.querySelector('.has-error');
      firstInvalid?.focus();
      return;
    }

    const outfitType = document.getElementById('enquiry-outfit-type')?.value || 'Custom Outfit';
    const occasion = document.getElementById('enquiry-occasion')?.value.trim() || 'Upcoming Celebration';
    const fabric = document.getElementById('enquiry-fabric')?.value.trim() || 'Not specified';
    const notes = document.getElementById('enquiry-notes')?.value.trim() || 'None';

    const message = [
      `Hello Sparkle & Stitch Gallery, I would like to enquire about custom stitching:`,
      `• Name: ${nameVal}`,
      `• WhatsApp Number: ${phoneVal}`,
      `• Outfit Category: ${outfitType}`,
      `• Occasion / Event Date: ${occasion}`,
      `• Fabric Details: ${fabric}`,
      `• Preferred Design / Notes: ${notes}`,
      `Please let me know consultation availability and details.`
    ].join('\n');

    const waUrl = getWhatsAppUrl(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });

  // Clear errors on input
  nameInput?.addEventListener('input', () => {
    if (nameInput.value.trim().length >= 2) {
      nameInput.classList.remove('has-error');
      nameError?.classList.remove('visible');
    }
  });

  phoneInput?.addEventListener('input', () => {
    if (validatePhone(phoneInput.value.trim())) {
      phoneInput.classList.remove('has-error');
      phoneError?.classList.remove('visible');
    }
  });
}

/* --------------------------------------------------------------------------
   7. Hide Mobile Sticky Bar when at Footer
   -------------------------------------------------------------------------- */
function initMobileStickyBar() {
  const stickyBar = document.querySelector('.mobile-sticky-bar');
  const footer = document.querySelector('.site-footer');
  if (!stickyBar || !footer) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyBar.style.transform = 'translateY(100%)';
      } else {
        stickyBar.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  observer.observe(footer);
}
