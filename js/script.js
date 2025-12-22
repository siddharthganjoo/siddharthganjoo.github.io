// Simple, bulletproof JavaScript for portfolio

(function() {
  'use strict';
  
  // 1. Theme Toggle
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');
  
  if (toggleSwitch) {
    // Load saved theme
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
    }
    
    // Toggle theme
    toggleSwitch.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
  
  // 2. Mobile Menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
  
  // 3. Optional: Smooth Scroll Reveal (only if supported)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Wait for DOM to load
    document.addEventListener('DOMContentLoaded', function() {
      const elements = document.querySelectorAll('.card, .timeline-item, .recommendation-card, .award-card, .news-card');
      
      elements.forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease-out ' + (index * 0.05) + 's, transform 0.8s ease-out ' + (index * 0.05) + 's';
        observer.observe(el);
      });
    });
  }
  
  // 4. Optional: Navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
})();

console.log('✅ Portfolio script loaded');
