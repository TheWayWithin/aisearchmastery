// AI Search Mastery Homepage JavaScript
// =====================================

// Kit (ConvertKit) Integration Class
class KitNewsletterIntegration {
    constructor() {
        // These will be replaced with actual credentials
        this.apiKey = 'YOUR_KIT_API_KEY';
        this.formId = 'YOUR_KIT_FORM_ID';
        this.baseUrl = 'https://api.convertkit.com/v3';
    }
    
    async subscribeUser(formData) {
        const subscriberData = {
            api_key: this.apiKey,
            email: formData.email,
            first_name: formData.first_name,
            fields: {
                business_type: formData.business_type,
                source_page: 'homepage',
                signup_date: new Date().toISOString(),
                subscriber_type: 'authentic_positioning'
            },
            tags: ['homepage_signup', 'ai_search_weekly', 'solopreneur_focus']
        };
        
        try {
            const response = await fetch(`${this.baseUrl}/forms/${this.formId}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscriberData)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                // Track successful subscription
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'newsletter_signup', {
                        event_category: 'engagement',
                        event_label: 'homepage_form_authentic',
                        value: 1
                    });
                }
                
                return { success: true, data: result };
            } else {
                throw new Error(result.message || 'Subscription failed');
            }
        } catch (error) {
            console.error('Kit subscription error:', error);
            return { success: false, error: error.message };
        }
    }
}

// Main Homepage Class
class AISearchMasteryHomepage {
    constructor() {
        this.kitIntegration = new KitNewsletterIntegration();
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupFormHandling();
        this.setupAnimations();
        this.setupCharts();
        this.setupAnalytics();
        this.setupAccessibility();
    }
    
    // Mobile Menu Functionality
    setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const primaryNav = document.querySelector('.primary-nav');
        const body = document.body;
        
        if (mobileMenuBtn && primaryNav) {
            mobileMenuBtn.addEventListener('click', () => {
                const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                
                mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
                primaryNav.classList.toggle('mobile-open');
                body.classList.toggle('mobile-menu-open');
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-container')) {
                mobileMenuBtn?.setAttribute('aria-expanded', 'false');
                primaryNav?.classList.remove('mobile-open');
                body.classList.remove('mobile-menu-open');
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                mobileMenuBtn?.setAttribute('aria-expanded', 'false');
                primaryNav?.classList.remove('mobile-open');
                body.classList.remove('mobile-menu-open');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenuBtn?.setAttribute('aria-expanded', 'false');
                primaryNav?.classList.remove('mobile-open');
                body.classList.remove('mobile-menu-open');
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Form Handling and Validation
    setupFormHandling() {
        const newsletterForm = document.getElementById('homepage-newsletter-form');
        
        if (newsletterForm) {
            // Real-time validation
            const inputs = newsletterForm.querySelectorAll('input, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
            
            // Form submission
            newsletterForm.addEventListener('submit', (e) => this.handleFormSubmission(e));
        }
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing error
        this.clearFieldError(field);
        
        // Validation rules
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        } else if (field.name === 'first_name' && value && value.length < 2) {
            isValid = false;
            errorMessage = 'Please enter at least 2 characters';
        }
        
        // Show error if invalid
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.setAttribute('role', 'alert');
        
        field.parentNode.appendChild(errorElement);
    }
    
    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    async handleFormSubmission(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate all fields
        const inputs = form.querySelectorAll('input[required], select[required]');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            // Focus on first error field
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Joining...';
        submitBtn.disabled = true;
        
        // Add loading class for additional styling
        submitBtn.classList.add('loading');
        
        try {
            // For now, simulate success since we don't have real Kit credentials
            // Replace this with actual Kit integration when credentials are available
            await this.simulateKitIntegration(data);
            
            this.showFormSuccess(form);
            
            // Track conversion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'newsletter_signup', {
                    event_category: 'engagement',
                    event_label: 'homepage_authentic_positioning',
                    value: 1
                });
            }
        } catch (error) {
            this.showFormError(form, error.message);
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    }
    
    // Simulate Kit integration for demo purposes
    async simulateKitIntegration(data) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate occasional errors for testing
        if (Math.random() < 0.1) {
            throw new Error('Network error occurred. Please try again.');
        }
        
        console.log('Newsletter signup data:', data);
        return { success: true };
    }
    
    showFormSuccess(form) {
        form.innerHTML = `
            <div class="form-success">
                <i class="fas fa-check-circle"></i>
                <h3>Welcome to AI Search Weekly!</h3>
                <p>Thanks for joining! Check your email for a confirmation message. 
                   Your first insights from my FreecalcHub journey will arrive next Tuesday.</p>
                <div class="success-note">
                    <strong>What's next?</strong> I'll share the exact strategies I used to grow 
                    FreecalcHub's traffic by 40% after the AI search changes.
                </div>
            </div>
        `;
        
        // Scroll to form for better UX
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    showFormError(form, message) {
        // Remove existing error messages
        const existingError = form.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message || 'Something went wrong. Please try again or contact support@aisearchmastery.com'}</p>
        `;
        errorDiv.setAttribute('role', 'alert');
        form.insertBefore(errorDiv, form.firstChild);
        
        // Remove error after 8 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 8000);
        
        // Scroll to error for better UX
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Scroll-triggered Animations
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.timeline-item, .step-item, .metric-card, .faq-item').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Chart Setup for Data Visualization
    setupCharts() {
        // Only proceed if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded - charts will not be displayed');
            return;
        }
        
        this.setupTrafficRecoveryChart();
        this.setupFreecalchubPerformanceChart();
    }
    
    setupTrafficRecoveryChart() {
        const trafficChart = document.getElementById('traffic-recovery-chart');
        if (!trafficChart) return;
        
        const ctx = trafficChart.getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024'],
                datasets: [{
                    label: 'Traffic Index',
                    data: [100, 70, 75, 85, 110, 125, 140],
                    borderColor: '#1E3A8A',
                    backgroundColor: 'rgba(30, 58, 138, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1E3A8A',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(30, 58, 138, 0.9)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#1E3A8A',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                return `Traffic: ${context.parsed.y}% of baseline`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#6B7280'
                        }
                    },
                    y: {
                        beginAtZero: false,
                        min: 50,
                        max: 150,
                        grid: {
                            color: 'rgba(107, 114, 128, 0.1)'
                        },
                        ticks: {
                            color: '#6B7280',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                elements: {
                    point: {
                        hoverBackgroundColor: '#0D9488'
                    }
                }
            }
        });
    }
    
    setupFreecalchubPerformanceChart() {
        const performanceChart = document.getElementById('freecalchub-performance-chart');
        if (!performanceChart) return;
        
        const ctx = performanceChart.getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['AI Search Traffic', 'Organic Search', 'Direct Traffic', 'Referral'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: [
                        '#1E3A8A',
                        '#0D9488',
                        '#3B82F6',
                        '#14B8A6'
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#374151',
                            font: {
                                size: 12
                            },
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#374151',
                        borderWidth: 1,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
    
    // Analytics Event Tracking
    setupAnalytics() {
        // Track scroll depth
        let maxScroll = 0;
        let scrollDepthTracked = {
            25: false,
            50: false,
            75: false,
            90: false
        };
        
        const trackScrollDepth = () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Track milestone scroll depths
                Object.keys(scrollDepthTracked).forEach(threshold => {
                    if (maxScroll >= threshold && !scrollDepthTracked[threshold]) {
                        scrollDepthTracked[threshold] = true;
                        
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'scroll_depth', {
                                event_category: 'engagement',
                                event_label: `${threshold}_percent`,
                                value: parseInt(threshold)
                            });
                        }
                    }
                });
            }
        };
        
        // Throttled scroll handler
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(trackScrollDepth, 100);
        });
        
        // Track time on page
        const startTime = Date.now();
        let timeTracked = {
            30: false,
            60: false,
            120: false,
            300: false
        };
        
        const trackTimeOnPage = () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            Object.keys(timeTracked).forEach(threshold => {
                if (timeOnPage >= threshold && !timeTracked[threshold]) {
                    timeTracked[threshold] = true;
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'time_on_page', {
                            event_category: 'engagement',
                            event_label: `${threshold}_seconds`,
                            value: parseInt(threshold)
                        });
                    }
                }
            });
        };
        
        // Check time on page every 10 seconds
        setInterval(trackTimeOnPage, 10000);
        
        // Track final time on page when leaving
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            if (typeof gtag !== 'undefined') {
                gtag('event', 'time_on_page_final', {
                    event_category: 'engagement',
                    event_label: 'homepage',
                    value: timeOnPage
                });
            }
        });
        
        // Track CTA clicks
        document.querySelectorAll('a[href="/newsletter"], a[href="/free-page-audit"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const isNewsletter = link.href.includes('/newsletter');
                const section = link.closest('section')?.id || 'unknown';
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', isNewsletter ? 'newsletter_cta_click' : 'assessment_cta_click', {
                        event_category: 'engagement',
                        event_label: section,
                        value: 1
                    });
                }
            });
        });
        
        // Track section visibility
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId && typeof gtag !== 'undefined') {
                        gtag('event', 'section_view', {
                            event_category: 'engagement',
                            event_label: sectionId,
                            value: 1
                        });
                    }
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('section[id]').forEach(section => {
            sectionObserver.observe(section);
        });
    }
    
    // Accessibility Enhancements
    setupAccessibility() {
        // Keyboard navigation for dropdowns
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            const toggle = dropdown.querySelector('a[aria-haspopup]');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (toggle && menu) {
                toggle.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                        toggle.setAttribute('aria-expanded', !isExpanded);
                    }
                });
            }
        });
        
        // Focus management for modal-like behaviors
        const trapFocus = (element) => {
            const focusableElements = element.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];
            
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            lastFocusable.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            firstFocusable.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        };
        
        // Apply focus trap to mobile menu when open
        const mobileMenu = document.querySelector('.primary-nav');
        if (mobileMenu) {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            mobileMenuBtn?.addEventListener('click', () => {
                if (mobileMenu.classList.contains('mobile-open')) {
                    trapFocus(mobileMenu);
                }
            });
        }
        
        // Announce dynamic content changes to screen readers
        this.announceToScreenReader = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        };
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AISearchMasteryHomepage();
});

// Handle page visibility for analytics
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && typeof gtag !== 'undefined') {
        gtag('event', 'page_hidden', {
            event_category: 'engagement',
            event_label: 'homepage',
            value: 1
        });
    }
});

// Service Worker Registration for Performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AISearchMasteryHomepage, KitNewsletterIntegration };
}
