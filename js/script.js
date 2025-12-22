// Simple Portfolio Script - No Animations

(function() {
  'use strict';
  
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Mobile Navigation
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
  
  // Experience Carousel
  const expPrev = document.getElementById('exp-prev');
  const expNext = document.getElementById('exp-next');
  const expTrack = document.querySelector('.experience-track');
  
  if (expPrev && expNext && expTrack) {
    expPrev.addEventListener('click', () => {
      expTrack.scrollBy({ left: -500, behavior: 'smooth' });
    });
    
    expNext.addEventListener('click', () => {
      expTrack.scrollBy({ left: 500, behavior: 'smooth' });
    });
  }
  
  // Smooth Anchor Scrolling
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
  
  console.log('✅ Website loaded');
  
})();
