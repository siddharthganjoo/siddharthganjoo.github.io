// Ultra-Smooth Scroll Animations - Fixed Version
// Content is visible by default, animations are enhancement

(function() {
  'use strict';
  
  console.log('🎬 Initializing animations...');
  
  // ========================================
  // 1. ADD "will-animate" CLASS TO ELEMENTS
  // ========================================
  
  function initAnimations() {
    // Find all elements that should animate
    const animateElements = document.querySelectorAll(
      '.reveal, .fade-in, .slide-left, .slide-right, .scale-in'
    );
    
    // Add "will-animate" class so CSS can hide them
    animateElements.forEach(el => {
      el.classList.add('will-animate');
    });
    
    console.log(`✅ Found ${animateElements.length} elements to animate`);
  }
  
  // ========================================
  // 2. SMOOTH SCROLL REVEAL
  // ========================================
  
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);
  
  function observeElements() {
    const elements = document.querySelectorAll('.will-animate');
    elements.forEach(el => observer.observe(el));
    console.log('👀 Observing elements for scroll');
  }
  
  // ========================================
  // 3. THEME TOGGLE
  // ========================================
  
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      console.log(`🎨 Theme switched to ${newTheme}`);
    });
  }
  
  // ========================================
  // 4. MOBILE NAVIGATION
  // ========================================
  
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
  
  // ========================================
  // 5. EXPERIENCE CAROUSEL
  // ========================================
  
  const expPrev = document.getElementById('exp-prev');
  const expNext = document.getElementById('exp-next');
  const expTrack = document.querySelector('.experience-track');
  
  if (expPrev && expNext && expTrack) {
    const scrollAmount = 500;
    
    expPrev.addEventListener('click', () => {
      expTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    expNext.addEventListener('click', () => {
      expTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
  
  // ========================================
  // 6. SMOOTH ANCHOR SCROLLING
  // ========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ========================================
  // 7. INITIALIZE EVERYTHING
  // ========================================
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAnimations();
      observeElements();
    });
  } else {
    initAnimations();
    observeElements();
  }
  
  console.log('✨ Script loaded successfully!');
  
})();
