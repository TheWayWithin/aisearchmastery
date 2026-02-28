/* ============================================================
   AI SEARCH MASTERY — Main JavaScript

   Minimal JS for:
   1. Sticky header scroll state
   2. Mobile navigation toggle
   3. Active page detection
   4. Accordion (FAQ)
   5. Analytics event helpers (Plausible)
   6. Contact form handling
   ============================================================ */

(function () {
  'use strict';

  /* ---- 1. Sticky Header ---- */
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      header.classList.toggle('header--scrolled', scrollY > 50);
      lastScroll = scrollY;
    }, { passive: true });
  }

  /* ---- 2. Mobile Navigation Toggle ---- */
  const menuBtn = document.querySelector('.header__menu-btn');
  const nav = document.getElementById('primary-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      menuBtn.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
      nav.classList.toggle('header__nav--open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open navigation menu');
        nav.classList.remove('header__nav--open');
      }
    });

    // Close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open navigation menu');
        nav.classList.remove('header__nav--open');
        menuBtn.focus();
      }
    });
  }

  /* ---- 3. Active Page Detection ---- */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    var href = link.getAttribute('href').replace(/\/$/, '');
    if (currentPath === href || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('nav__link--active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---- 4. Accordion ---- */
  document.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      var panelId = trigger.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);

      // Close all other panels in this accordion
      var accordion = trigger.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion__trigger').forEach(function (t) {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            var otherPanel = document.getElementById(t.getAttribute('aria-controls'));
            if (otherPanel) otherPanel.hidden = true;
          }
        });
      }

      // Toggle current
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  /* ---- 5. Analytics Event Helpers (Plausible) ---- */
  function trackEvent(eventName, params) {
    if (typeof window.plausible === 'undefined') return;
    window.plausible(eventName, { props: params || {} });
  }

  // CTA click tracking
  document.querySelectorAll('[data-track-cta]').forEach(function (el) {
    el.addEventListener('click', function () {
      trackEvent('cta_click', {
        product: el.getAttribute('data-product') || '',
        location: el.getAttribute('data-location') || '',
        variant: el.getAttribute('data-variant') || '',
        destination_url: el.getAttribute('href') || '',
        link_text: el.textContent.trim()
      });
    });
  });

  // Scroll depth tracking
  var scrollThresholds = [25, 50, 75, 100];
  var scrollFired = {};
  window.addEventListener('scroll', function () {
    var scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    scrollThresholds.forEach(function (threshold) {
      if (scrollPercent >= threshold && !scrollFired[threshold]) {
        scrollFired[threshold] = true;
        trackEvent('scroll_depth', { depth: threshold + '%', page: window.location.pathname });
      }
    });
  }, { passive: true });

  // 404 tracking
  if (document.querySelector('[data-page-type="404"]')) {
    trackEvent('page_not_found', { attempted_url: window.location.href });
  }

  // Outbound link tracking
  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    link.addEventListener('click', function () {
      var url = link.getAttribute('href');
      if (url) {
        try {
          var domain = new URL(url).hostname;
          trackEvent('outbound_click', {
            destination_url: url,
            link_text: link.textContent.trim(),
            link_location: link.closest('section, header, footer, aside')
              ? link.closest('section, header, footer, aside').className.split(' ')[0]
              : 'unknown',
            destination_domain: domain
          });
        } catch (e) {
          // Invalid URL, skip tracking
        }
      }
    });
  });

  /* ---- 7. Contact Form (F-015) ---- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var formSubmitTime = Date.now();

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Time-based check: reject submissions < 3 seconds
      if (Date.now() - formSubmitTime < 3000) return;

      // Honeypot check
      var honeypot = contactForm.querySelector('[name="website_url"]');
      if (honeypot && honeypot.value) return;

      // Validate required fields
      var isValid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        var error = field.closest('.form-group').querySelector('.form-message--error');
        if (!field.value.trim()) {
          field.classList.add('form-input--error');
          if (error) error.hidden = false;
          isValid = false;
        } else {
          field.classList.remove('form-input--error');
          if (error) error.hidden = true;
        }
      });

      if (!isValid) return;

      // Submit to Netlify Forms
      var formData = new FormData(contactForm);
      var successMsg = document.getElementById('form-success');
      var submitBtn = contactForm.querySelector('[type="submit"]');

      // Disable button during submission
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending\u2026';
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(function (response) {
        if (response.ok) {
          contactForm.hidden = true;
          if (successMsg) successMsg.hidden = false;
          trackEvent('contact_form_submit', {
            topic: formData.get('topic') || 'general'
          });
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
        // Show inline error
        var errorEl = document.createElement('p');
        errorEl.className = 'form-message form-message--error mt-4';
        errorEl.textContent = 'Something went wrong. Please email info@aisearchmastery.com directly.';
        contactForm.appendChild(errorEl);
      });
    });
  }

  // ──────────────────────────────────────────────
  // 8. Blog Category Filter
  // ──────────────────────────────────────────────

  var blogFilter = document.querySelector('.blog-filter');
  if (blogFilter) {
    var pills = blogFilter.querySelectorAll('.blog-filter__pill');
    var cards = document.querySelectorAll('.blog-card[data-category]');

    pills.forEach(function(pill) {
      pill.addEventListener('click', function() {
        var category = this.getAttribute('data-category');

        // Update active pill
        pills.forEach(function(p) { p.classList.remove('blog-filter__pill--active'); });
        this.classList.add('blog-filter__pill--active');

        // Filter cards
        cards.forEach(function(card) {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });

        // Update URL without triggering pageview
        var url = category === 'all' ? '/blog' : '/blog?category=' + category;
        history.replaceState(null, '', url);

        // Track filter event
        trackEvent('blog_filter', { category: category });
      });
    });

    // Apply filter from URL on load
    var params = new URLSearchParams(window.location.search);
    var activeCategory = params.get('category');
    if (activeCategory) {
      var matchingPill = blogFilter.querySelector('[data-category="' + activeCategory + '"]');
      if (matchingPill) matchingPill.click();
    }
  }

})();
