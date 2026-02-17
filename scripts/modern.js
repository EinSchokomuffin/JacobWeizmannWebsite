/**
 * Modern JavaScript for Jacob Weizman Website
 * Smooth animations, interactions, and user experience enhancements
 */

// =========================================
// Utility Functions
// =========================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit = 100) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// =========================================
// Navigation Functionality
// =========================================

class Navigation {
    constructor() {
        this.navbar = $('#navbar');
        this.navToggle = $('#navToggle');
        this.navMenu = $('#navMenu');
        this.navLinks = $$('.nav-link');
        
        this.init();
    }
    
    init() {
        this.setupScrollBehavior();
        this.setupMobileMenu();
        this.setupSmoothScroll();
    }
    
    setupScrollBehavior() {
        const handleScroll = throttle(() => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }, 100);
        
        window.addEventListener('scroll', handleScroll);
    }
    
    setupMobileMenu() {
        this.navToggle?.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.animateBurger();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target) && this.navMenu.classList.contains('active')) {
                this.navMenu.classList.remove('active');
                this.resetBurger();
            }
        });
    }
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = $(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu
                        this.navMenu.classList.remove('active');
                        this.resetBurger();
                        
                        // Update active link
                        this.setActiveLink(link);
                    }
                }
            });
        });
    }
    
    setActiveLink(activeLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    animateBurger() {
        const spans = this.navToggle.querySelectorAll('span');
        if (this.navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            this.resetBurger();
        }
    }
    
    resetBurger() {
        const spans = this.navToggle?.querySelectorAll('span');
        spans?.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    }
}

// =========================================
// Scroll Reveal Animations
// =========================================

class ScrollReveal {
    constructor() {
        this.elements = $$('.reveal-left, .reveal-right, .reveal-up, .reveal-scale');
        this.init();
    }
    
    init() {
        // Fallback for browsers without IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            console.warn('IntersectionObserver not supported, activating all animations');
            this.elements.forEach(el => el.classList.add('active'));
            return;
        }
        
        this.setupObserver();
    }
    
    setupObserver() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Unobserve after activation for performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        this.elements.forEach(el => {
            // Add a small delay to ensure smooth animation
            observer.observe(el);
        });
        
        console.log(`ScrollReveal initialized with ${this.elements.length} elements`);
    }
}

// =========================================
// Parallax Effects
// =========================================

class ParallaxEffect {
    constructor() {
        this.heroBackground = $('.hero-background');
        this.init();
    }
    
    init() {
        if (!this.heroBackground) return;
        
        const handleScroll = throttle(() => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            this.heroBackground.style.transform = `translateY(${rate}px)`;
        }, 10);
        
        window.addEventListener('scroll', handleScroll);
    }
}

// =========================================
// Back to Top Button
// =========================================

class BackToTop {
    constructor() {
        this.button = $('#backToTop');
        this.init();
    }
    
    init() {
        if (!this.button) return;
        
        const handleScroll = throttle(() => {
            if (window.scrollY > 500) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        }, 100);
        
        window.addEventListener('scroll', handleScroll);
        
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// =========================================
// Contact Form Handler
// =========================================

class ContactForm {
    constructor() {
        this.form = $('#contactForm');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Wird gesendet...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage();
            this.form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }
    
    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <div style="
                background: #4CAF50;
                color: white;
                padding: 1rem 2rem;
                border-radius: 12px;
                margin-top: 1rem;
                text-align: center;
                animation: fadeInUp 0.4s ease;
            ">
                ✓ Nachricht erfolgreich gesendet! Ich melde mich bald bei dir.
            </div>
        `;
        
        this.form.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// =========================================
// Statistics Counter Animation
// =========================================

class CounterAnimation {
    constructor() {
        this.counters = $$('.stat-number');
        this.init();
    }
    
    init() {
        if (this.counters.length === 0) return;
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, observerOptions);
        
        this.counters.forEach(counter => observer.observe(counter));
    }
    
    animateCounter(element) {
        const target = element.textContent;
        const isPercentage = target.includes('%');
        const number = parseInt(target.replace(/\D/g, ''));
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                const displayNumber = Math.floor(current);
                element.textContent = isPercentage ? `${displayNumber}%` : `${displayNumber}+`;
            }
        }, 16);
    }
}

// =========================================
// Image Lazy Loading Enhancement
// =========================================

class ImageOptimizer {
    constructor() {
        this.images = $$('img[loading="lazy"]');
        this.init();
    }
    
    init() {
        if (!('IntersectionObserver' in window)) {
            this.images.forEach(img => {
                img.loading = 'eager';
            });
            return;
        }
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        this.images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.6s ease';
            
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            
            imageObserver.observe(img);
        });
    }
}

// =========================================
// Page Transitions
// =========================================

class PageTransitions {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
        
        $$('a[href^="./pages"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });
    }
}

// =========================================
// Active Section Highlighter
// =========================================

class ActiveSectionTracker {
    constructor() {
        this.sections = $$('section[id]');
        this.navLinks = $$('.nav-link');
        this.init();
    }
    
    init() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-80px 0px -50% 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.updateActiveLink(id);
                }
            });
        }, observerOptions);
        
        this.sections.forEach(section => observer.observe(section));
    }
    
    updateActiveLink(sectionId) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                this.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }
}

// =========================================
// Initialize All Components
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new ScrollReveal();
    new BackToTop();
    new ContactForm();
    new ParallaxEffect();
    new CounterAnimation();
    new ImageOptimizer();
    new ActiveSectionTracker();
    new PageTransitions();
    
    document.body.style.visibility = 'visible';
    
    console.log('✨ Website initialized successfully!');
});
