/**
 * SIDDHARTH GANJOO PORTFOLIO
 * JavaScript for theme toggle, navigation, and carousel
 */

(function() {
  'use strict';
  
  console.log('🚀 Portfolio initializing...');
  
  // ========================================
  // THEME TOGGLE (Dark/Light Mode)
  // ========================================
  
  function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Get saved theme or use system preference
    let currentTheme = localStorage.getItem('theme');
    
    if (!currentTheme) {
      currentTheme = prefersDark.matches ? 'dark' : 'light';
    }
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    console.log(`🎨 Theme set to: ${currentTheme}`);
    
    // Theme toggle click handler
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        console.log(`🎨 Theme switched to: ${newTheme}`);
      });
    }
    
    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        console.log(`🎨 System theme changed to: ${newTheme}`);
      }
    });
  }
  
  // ========================================
  // MOBILE NAVIGATION
  // ========================================
  
  function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    console.log('📱 Mobile navigation initialized');
  }
  
  // ========================================
  // EXPERIENCE CAROUSEL
  // ========================================
  
  function initCarousel() {
    const expPrev = document.getElementById('exp-prev');
    const expNext = document.getElementById('exp-next');
    const expTrack = document.querySelector('.experience-track');
    
    if (!expPrev || !expNext || !expTrack) return;
    
    const scrollAmount = 500;
    
    // Previous button
    expPrev.addEventListener('click', () => {
      expTrack.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
    
    // Next button
    expNext.addEventListener('click', () => {
      expTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    
    // Update button states based on scroll position
    function updateButtons() {
      const maxScroll = expTrack.scrollWidth - expTrack.clientWidth;
      const currentScroll = expTrack.scrollLeft;
      
      // Disable prev button at start
      if (currentScroll <= 0) {
        expPrev.style.opacity = '0.3';
        expPrev.style.cursor = 'not-allowed';
      } else {
        expPrev.style.opacity = '1';
        expPrev.style.cursor = 'pointer';
      }
      
      // Disable next button at end
      if (currentScroll >= maxScroll - 10) {
        expNext.style.opacity = '0.3';
        expNext.style.cursor = 'not-allowed';
      } else {
        expNext.style.opacity = '1';
        expNext.style.cursor = 'pointer';
      }
    }
    
    // Update on scroll
    expTrack.addEventListener('scroll', updateButtons);
    
    // Initial update
    updateButtons();
    
    // Update on window resize
    window.addEventListener('resize', updateButtons);
    
    console.log('🎠 Carousel initialized');
  }
  
  // ========================================
  // SMOOTH ANCHOR SCROLLING
  // ========================================
  
  function initSmoothScroll() {
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
    
    console.log('⚓ Smooth scrolling initialized');
  }
  
  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  
  function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add shadow when scrolled
      if (currentScroll > 50) {
        nav.style.boxShadow = '0 2px 20px var(--shadow)';
      } else {
        nav.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
    
    console.log('📜 Navbar scroll effect initialized');
  }
  
  // ========================================
  // INITIALIZE ALL
  // ========================================
  
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initMobileNav();
        initCarousel();
        initSmoothScroll();
        initNavbarScroll();
        console.log('✅ All features initialized!');
      });
    } else {
      initTheme();
      initMobileNav();
      initCarousel();
      initSmoothScroll();
      initNavbarScroll();
      console.log('✅ All features initialized!');
    }
  }
  
  // Start the app
  init();
  
})();
