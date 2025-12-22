// Ultra-Smooth Scroll Animations
// Inspired by premium portfolio sites

(function() {
  'use strict';
  
  // ========================================
  // 1. SMOOTH SCROLL REVEAL (THE MAGIC!)
  // ========================================
  
  const observerOptions = {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: '0px 0px -10% 0px' // Start slightly before element enters viewport
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: Stop observing after animation (performance)
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.reveal, .fade-in, .slide-left, .slide-right, .scale-in');
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  // ========================================
  // 2. THEME TOGGLE
  // ========================================
  
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // ========================================
  // 3. MOBILE NAVIGATION
  // ========================================
  
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when link clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
  
  // ========================================
  // 4. EXPERIENCE CAROUSEL NAVIGATION
  // ========================================
  
  const expPrev = document.getElementById('exp-prev');
  const expNext = document.getElementById('exp-next');
  const expTrack = document.querySelector('.experience-track');
  
  if (expPrev && expNext && expTrack) {
    const scrollAmount = 500; // Pixels to scroll
    
    expPrev.addEventListener('click', () => {
      expTrack.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
    
    expNext.addEventListener('click', () => {
      expTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    
    // Optional: Hide/show buttons based on scroll position
    expTrack.addEventListener('scroll', () => {
      const maxScroll = expTrack.scrollWidth - expTrack.clientWidth;
      
      expPrev.style.opacity = expTrack.scrollLeft === 0 ? '0.3' : '1';
      expNext.style.opacity = expTrack.scrollLeft >= maxScroll - 10 ? '0.3' : '1';
    });
  }
  
  // ========================================
  // 5. SMOOTH ANCHOR SCROLLING
  // ========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip empty anchors
      if (href === '#' || !href) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed nav
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ========================================
  // 6. PARALLAX EFFECT (SUBTLE)
  // ========================================
  
  let ticking = false;
  
  function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-container');
    
    if (hero && scrolled < window.innerHeight) {
      // Subtle parallax - move slower than scroll
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.6;
    }
    
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleParallax();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // ========================================
  // 7. INITIALIZE ON DOM READY
  // ========================================
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
  
  console.log('✨ Smooth animations loaded');
  
})();
