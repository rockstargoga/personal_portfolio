/*=============== THEME TOGGLE ===============*/
const themeButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Toggle theme when button is clicked
themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save theme preference to localStorage
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

/*=============== MOBILE NAVIGATION ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu when toggle button is clicked
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu when close button is clicked
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Hide menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== HEADER SHADOW ON SCROLL ===============*/
const header = document.getElementById('header');

function scrollHeader() {
    if (window.scrollY >= 50) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }
}

window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Optional: Stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
const animateElements = document.querySelectorAll('[data-animate]');
animateElements.forEach(el => observer.observe(el));

/*=============== SCROLL TO TOP BUTTON ===============*/
const scrollUp = document.getElementById('scroll-up');

function scrollUpButton() {
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUpButton);

/*=============== SMOOTH SCROLL FOR ALL LINKS ===============*/
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

/*=============== CONTACT FORM HANDLING ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission (replace with actual backend integration)
        // For now, just show success message
        showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();

        // TODO: Integrate with backend service (e.g., Formspree, EmailJS, or custom API)
        // Example with Formspree:
        // fetch('https://formspree.io/f/YOUR_FORM_ID', {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // })
        // .then(response => {
        //     if (response.ok) {
        //         showMessage('Message sent successfully!', 'success');
        //         contactForm.reset();
        //     } else {
        //         showMessage('Oops! There was a problem.', 'error');
        //     }
        // })
        // .catch(error => {
        //     showMessage('Oops! There was a problem.', 'error');
        // });
    });
}

function showMessage(text, type) {
    contactMessage.textContent = text;
    contactMessage.className = `contact__message ${type}`;
    
    // Remove message after 5 seconds
    setTimeout(() => {
        contactMessage.textContent = '';
        contactMessage.className = 'contact__message';
    }, 5000);
}

/*=============== TYPING EFFECT (Optional Enhancement) ===============*/
const typingText = document.querySelector('.typing-text');

if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

/*=============== PERFORMANCE OPTIMIZATION ===============*/
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll functions
window.addEventListener('scroll', debounce(scrollActive, 10));
window.addEventListener('scroll', debounce(scrollHeader, 10));
window.addEventListener('scroll', debounce(scrollUpButton, 10));

/*=============== CONSOLE MESSAGE ===============*/
console.log('%c👋 Welcome to my portfolio!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #8b5cf6; font-size: 14px;');
console.log('%cInterested in the code? Check out the repository!', 'color: #64748b; font-size: 12px;');