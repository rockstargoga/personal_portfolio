/*=============== APPLE-INSPIRED PORTFOLIO ===============*/
/*=============== MINIMAL JAVASCRIPT ===============*/

// Check for user's motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/*=============== THEME TOGGLE ===============*/
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  htmlElement.classList.add('dark');
}

// Toggle theme on button click
themeToggle?.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

/*=============== MOBILE MENU TOGGLE ===============*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
    navToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
  }
});

/*=============== SMOOTH SCROLL ===============*/
// Only apply smooth scroll if user hasn't requested reduced motion
if (!prefersReducedMotion) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/*=============== INTERSECTION OBSERVER ===============*/
// Minimal fade-in animation for sections (respects reduced motion)
if (!prefersReducedMotion) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

/*=============== NAVIGATION BACKGROUND ===============*/
// Add subtle background to nav on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolled
  if (currentScroll > 10) {
    nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Here you would typically send the data to a backend service
  // For now, we'll just log it and show a success message
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Thank you for your message! I\'ll get back to you soon.');
  
  // Reset form
  contactForm.reset();
  
  // In production, you would integrate with a service like:
  // - Netlify Forms
  // - Formspree
  // - EmailJS
  // - Your own backend API
});

/*=============== ACCESSIBILITY ===============*/
// Ensure focus is visible for keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// Add CSS for keyboard navigation focus
const style = document.createElement('style');
style.textContent = `
  .keyboard-nav *:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;
document.head.appendChild(style);

/*=============== PARALLAX STARFIELD EFFECT ===============*/
// Add parallax effect to hero and contact starfield on mouse move (only if not reduced motion)
if (!prefersReducedMotion) {
  const heroSection = document.querySelector('.hero');
  const contactSection = document.querySelector('.contact');
  
  const addParallax = (section) => {
    if (section) {
      section.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = section;
        
        // Calculate mouse position as percentage
        const xPercent = (clientX / offsetWidth - 0.5) * 2; // -1 to 1
        const yPercent = (clientY / offsetHeight - 0.5) * 2; // -1 to 1
        
        // Apply subtle transform to starfield layers
        const moveX = xPercent * 20; // Max 20px movement
        const moveY = yPercent * 20;
        
        // Update CSS custom properties for parallax
        section.style.setProperty('--mouse-x', `${moveX}px`);
        section.style.setProperty('--mouse-y', `${moveY}px`);
      });
      
      // Reset on mouse leave
      section.addEventListener('mouseleave', () => {
        section.style.setProperty('--mouse-x', '0px');
        section.style.setProperty('--mouse-y', '0px');
      });
    }
  };
  
  addParallax(heroSection);
  addParallax(contactSection);
}

/*=============== DRAGGABLE SKILL TAGS ===============*/
// Make skill tags draggable with live reordering (only if not reduced motion)
if (!prefersReducedMotion) {
  const skillsContainer = document.querySelector('.skills');
  
  if (skillsContainer) {
    const skills = skillsContainer.querySelectorAll('.skill');
    let draggedElement = null;
    
    skills.forEach(skill => {
      skill.setAttribute('draggable', 'true');
      skill.style.cursor = 'grab';
      
      skill.addEventListener('dragstart', (e) => {
        draggedElement = skill;
        skill.classList.add('dragging');
        setTimeout(() => {
          skill.style.opacity = '0.5';
        }, 0);
      });
      
      skill.addEventListener('dragend', (e) => {
        skill.classList.remove('dragging');
        skill.style.opacity = '1';
        // Remove drag-over class from all skills
        skillsContainer.querySelectorAll('.skill').forEach(s => s.classList.remove('drag-over'));
      });
      
      skill.addEventListener('dragover', (e) => {
        e.preventDefault();
        
        if (skill !== draggedElement && draggedElement) {
          // Get all current skills
          const allSkills = [...skillsContainer.children];
          const draggedIndex = allSkills.indexOf(draggedElement);
          const targetIndex = allSkills.indexOf(skill);
          
          // Live reordering - move the dragged element as you hover
          if (draggedIndex < targetIndex) {
            // Moving forward - insert after target
            skill.parentNode.insertBefore(draggedElement, skill.nextSibling);
          } else if (draggedIndex > targetIndex) {
            // Moving backward - insert before target
            skill.parentNode.insertBefore(draggedElement, skill);
          }
        }
      });
      
      skill.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if (skill !== draggedElement) {
          skill.classList.add('drag-over');
        }
      });
      
      skill.addEventListener('dragleave', (e) => {
        skill.classList.remove('drag-over');
      });
    });
  }
}

/*=============== PERFORMANCE ===============*/
// Lazy load images - modern browsers support loading="lazy" natively
// No additional JavaScript needed for lazy loading

/*=============== CONSOLE MESSAGE ===============*/
// Minimal console message for developers
console.log('%cRohit Meshram Portfolio', 'font-size: 20px; font-weight: bold; color: #0071e3;');
console.log('%cBuilt with Apple-inspired minimalism', 'font-size: 12px; color: #6e6e73;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 12px; color: #0071e3;');