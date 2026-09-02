/**
 * SIDDHARTH GANJOO PORTFOLIO
 * High-performance, accessible JavaScript
 */

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light Mode)
  // --------------------------------------------------------------------------
  function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check saved theme or fallback to system preference
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      savedTheme = prefersDark.matches ? 'dark' : 'light';
    }
    
    applyTheme(savedTheme);

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
      });
    }

    // Auto-update if system preference changes and no explicit user choice
    prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // --------------------------------------------------------------------------
  // 2. Navigation, Scroll-Spy & Header Elevation
  // --------------------------------------------------------------------------
  function initNavigation() {
    const nav = document.querySelector('.nav');
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    // Sticky header shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile hamburger menu toggle
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
      });

      // Close menu on link click
      document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    // Smooth Anchor Scrolling with dynamic offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 76;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Scroll-Spy
    if ('IntersectionObserver' in window && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };

      const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(sec => spyObserver.observe(sec));
    }
  }

  // --------------------------------------------------------------------------
  // 3. Scroll Reveal Animations
  // --------------------------------------------------------------------------
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.hero-content, .hero-visual, .about-text, .about-highlights, .timeline-card, .project-card, .news-card, .rec-card, .contact-card, .fade-up'
    );

    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach(el => el.classList.add('visible'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => {
      el.classList.add('fade-up');
      revealObserver.observe(el);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Image Lightbox for News & Event Photos
  // --------------------------------------------------------------------------
  function initLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!lightbox || !lightboxImg) return;

    const clickableImages = document.querySelectorAll('.news-image-wrap');

    clickableImages.forEach(wrap => {
      wrap.addEventListener('click', () => {
        const img = wrap.querySelector('img');
        if (!img) return;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Full size photo';
        if (lightboxCaption) {
          const cardTitle = wrap.closest('.news-card')?.querySelector('.news-title');
          lightboxCaption.textContent = cardTitle ? cardTitle.textContent : img.alt;
        }

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. Interactive Copy Email with Toast
  // --------------------------------------------------------------------------
  function initCopyEmail() {
    const copyBtns = document.querySelectorAll('[data-copy-email]');
    const toast = document.getElementById('toast-notification');

    copyBtns.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = btn.getAttribute('data-copy-email') || 'sganjoo2000@gmail.com';

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(email);
          } else {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
          }

          showToast('Email copied to clipboard!');
        } catch (err) {
          console.error('Failed to copy email:', err);
          // Fallback to direct mailto
          window.location.href = `mailto:${email}`;
        }
      });
    });

    function showToast(msg) {
      if (!toast) return;
      const toastText = toast.querySelector('.toast-text');
      if (toastText) toastText.textContent = msg;
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  }

  // --------------------------------------------------------------------------
  // Initialize on DOM Ready
  // --------------------------------------------------------------------------
  function init() {
    initTheme();
    initNavigation();
    initScrollAnimations();
    initLightbox();
    initCopyEmail();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
