// AI Search Mastery Blog - JavaScript Functionality
// ================================================
// Extends existing site functionality with blog-specific features

'use strict';

// ============================================
// BLOG MAIN CLASS
// ============================================
class AISearchMasteryBlog {
    constructor() {
        this.searchTimeout = null;
        this.isSearching = false;
        this.articles = [];
        this.categories = [];
        this.mobileMenuOpen = false;
        
        // Analytics tracking variables
        this.maxScrollDepth = 0;
        this.timeOnPageStart = Date.now();
        this.analyticsTracked = {
            scroll25: false,
            scroll50: false,
            scroll75: false,
            scroll90: false,
            time30: false,
            time60: false,
            time120: false,
            time300: false
        };
        
        this.init();
    }
    
    // ============================================
    // INITIALIZATION
    // ============================================
    async init() {
        try {
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setupComponents());
            } else {
                this.setupComponents();
            }
        } catch (error) {
            console.error('Blog initialization error:', error);
        }
    }
    
    setupComponents() {
        // Core functionality
        this.setupMobileMenu();
        this.setupSearch();
        this.setupNewsletterForms();
        this.setupSmoothScrolling();
        this.setupAnimations();
        
        // Analytics and tracking
        this.setupAnalytics();
        this.setupScrollTracking();
        this.setupTimeTracking();
        this.setupInteractionTracking();
        
        // Performance and UX
        this.setupImageLazyLoading();
        this.setupKeyboardNavigation();
        this.setupHeaderScrollEffect();
        
        // Load article data
        this.loadArticleData();
        
        console.log('✅ AI Search Mastery Blog initialized successfully');
    }
    
    // ============================================
    // MOBILE MENU FUNCTIONALITY
    // ============================================
    setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const primaryNav = document.querySelector('.primary-nav');
    const body = document.body;
    
    if (!mobileMenuBtn || !primaryNav) {
        console.log('Mobile menu elements not found');
        return;
    }
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;
        
        mobileMenuBtn.setAttribute('aria-expanded', newState.toString());
        primaryNav.classList.toggle('mobile-open', newState);
        body.classList.toggle('mobile-menu-open', newState);
        
        console.log('Mobile menu toggled:', newState);
    });
    
    // Close menu when clicking nav links
    const navLinks = primaryNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            primaryNav.classList.remove('mobile-open');
            body.classList.remove('mobile-menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-header')) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            primaryNav.classList.remove('mobile-open');
            body.classList.remove('mobile-menu-open');
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            primaryNav.classList.remove('mobile-open');
            body.classList.remove('mobile-menu-open');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            primaryNav.classList.remove('mobile-open');
            body.classList.remove('mobile-menu-open');
        }
    });
    }
    
    closeMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const primaryNav = document.querySelector('.primary-nav');
        const body = document.body;
        
        this.mobileMenuOpen = false;
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('mobile-open');
        body.classList.remove('mobile-menu-open');
    }
    
    // ============================================
    // SEARCH FUNCTIONALITY
    // ============================================
    setupSearch() {
        const searchInput = document.querySelector('.blog-search-input');
        const searchBtn = document.querySelector('.search-btn');
        const searchResults = document.querySelector('.search-results');
        
        if (!searchInput || !searchResults) return;
        
        // Search input event
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            this.handleSearchInput(query);
        });
        
        // Search button click
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query.length >= 2) {
                    this.performSearch(query);
                }
            });
        }
        
        // Enter key search
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query.length >= 2) {
                    this.performSearch(query);
                }
            }
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-search')) {
                this.hideSearchResults();
            }
        });
        
        // Hide search results on escape
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideSearchResults();
                searchInput.blur();
            }
        });
    }
    
    handleSearchInput(query) {
        clearTimeout(this.searchTimeout);
        
        if (query.length < 2) {
            this.hideSearchResults();
            return;
        }
        
        // Debounce search
        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 300);
    }
    
    performSearch(query) {
        if (this.isSearching) return;
        
        this.isSearching = true;
        
        // Track search event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search', {
                search_term: query,
                event_category: 'site_search',
                event_label: 'blog_search'
            });
        }
        
        // Perform search with current article data
        const results = this.searchArticles(query);
        this.renderSearchResults(results, query);
        
        this.isSearching = false;
    }
    
    searchArticles(query) {
        const lowerQuery = query.toLowerCase();
        
        // Enhanced mock article data with better search relevance
        const mockArticles = [
            {
                title: "FreecalcHub: Complete AI Search Transformation",
                url: "/blog/case-studies/freecalchub-transformation/",
                excerpt: "Follow the complete journey from 30% traffic loss to 40% growth with real data and proven strategies.",
                category: "Case Study",
                tags: ["freecalchub", "case study", "transformation", "traffic growth", "ai search"],
                score: 0
            },
            {
                title: "Complete AI Search Optimization Guide 2024",
                url: "/blog/fundamentals/complete-ai-search-guide-2024/",
                excerpt: "Everything you need to know about optimizing for AI search engines like ChatGPT, Claude, and Perplexity.",
                category: "Fundamentals",
                tags: ["guide", "chatgpt", "claude", "perplexity", "optimization", "fundamentals"],
                score: 0
            },
            {
                title: "ChatGPT Optimization: 7 Strategies That Actually Work",
                url: "/blog/how-to-guides/chatgpt-optimization-strategies/",
                excerpt: "Discover the exact strategies used to get FreecalcHub cited by ChatGPT consistently.",
                category: "How-To Guide",
                tags: ["chatgpt", "strategies", "optimization", "citation", "freecalchub"],
                score: 0
            },
            {
                title: "AI Search vs Traditional SEO: What's Really Different?",
                url: "/blog/fundamentals/ai-search-vs-traditional-seo/",
                excerpt: "Understanding the fundamental differences between optimizing for AI search engines versus traditional search.",
                category: "Fundamentals",
                tags: ["ai search", "seo", "traditional", "comparison", "differences"],
                score: 0
            },
            {
                title: "Getting Cited by Perplexity: The Complete Guide",
                url: "/blog/how-to-guides/perplexity-optimization-guide/",
                excerpt: "Learn how to optimize specifically for Perplexity AI with proven techniques and real examples.",
                category: "How-To Guide",
                tags: ["perplexity", "citation", "optimization", "guide", "techniques"],
                score: 0
            },
            {
                title: "3 Solopreneurs Who Mastered AI Search",
                url: "/blog/case-studies/solopreneur-ai-search-wins/",
                excerpt: "Real stories from fellow solopreneurs who've successfully navigated the AI search transition.",
                category: "Case Study",
                tags: ["solopreneur", "success stories", "ai search", "case study"],
                score: 0
            },
            {
                title: "Claude AI Search: Advanced Optimization Techniques",
                url: "/blog/how-to-guides/claude-search-optimization/",
                excerpt: "Claude has sophisticated reasoning capabilities. Learn how to structure content that Claude consistently cites.",
                category: "How-To Guide",
                tags: ["claude", "advanced", "optimization", "content structure", "reasoning"],
                score: 0
            },
            {
                title: "15 AI Search Optimization Tools I Actually Use (2024)",
                url: "/blog/tools-resources/best-ai-search-tools-2024/",
                excerpt: "Honest review of tools that helped optimize FreecalcHub and other sites. Includes free options and ROI analysis.",
                category: "Tools & Resources",
                tags: ["tools", "resources", "optimization", "review", "freecalchub"],
                score: 0
            }
        ];
        
        // Calculate relevance scores
        mockArticles.forEach(article => {
            let score = 0;
            
            // Title match (highest weight)
            if (article.title.toLowerCase().includes(lowerQuery)) {
                score += 10;
            }
            
            // Exact tag match
            if (article.tags.some(tag => tag.toLowerCase() === lowerQuery)) {
                score += 8;
            }
            
            // Tag partial match
            if (article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
                score += 5;
            }
            
            // Category match
            if (article.category.toLowerCase().includes(lowerQuery)) {
                score += 6;
            }
            
            // Excerpt match
            if (article.excerpt.toLowerCase().includes(lowerQuery)) {
                score += 3;
            }
            
            article.score = score;
        });
        
        // Return sorted results with score > 0
        return mockArticles
            .filter(article => article.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);
    }
    
    renderSearchResults(results, query) {
        const searchResults = document.querySelector('.search-results');
        if (!searchResults) return;
        
        // Clear existing results
        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }
        
        if (results.length === 0) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            
            const noResultsText = document.createElement('p');
            noResultsText.textContent = `No articles found for "${query}". Try different keywords.`;
            noResultsDiv.appendChild(noResultsText);
            
            const popularTopics = document.createElement('p');
            popularTopics.textContent = 'Popular topics: AI Search, ChatGPT, Claude, Perplexity, FreecalcHub';
            noResultsDiv.appendChild(popularTopics);
            
            searchResults.appendChild(noResultsDiv);
        } else {
            results.forEach(article => {
                const resultLink = document.createElement('a');
                resultLink.href = article.url;
                resultLink.className = 'search-result';
                
                const title = document.createElement('h4');
                title.innerHTML = this.highlightSearchTerms(article.title, query);
                resultLink.appendChild(title);
                
                const excerpt = document.createElement('p');
                excerpt.innerHTML = this.highlightSearchTerms(article.excerpt, query);
                resultLink.appendChild(excerpt);
                
                const category = document.createElement('span');
                category.className = 'result-category';
                category.textContent = article.category;
                resultLink.appendChild(category);
                
                searchResults.appendChild(resultLink);
            });
        }
        
        searchResults.style.display = 'block';
        searchResults.setAttribute('role', 'listbox');
        searchResults.setAttribute('aria-label', `${results.length} search results for ${query}`);
    }
    
    highlightSearchTerms(text, query) {
        // Escape special regex characters to prevent injection
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        
        // Create a text node first to ensure safety, then convert to HTML
        const tempDiv = document.createElement('div');
        tempDiv.textContent = text;
        const safeText = tempDiv.innerHTML;
        
        return safeText.replace(regex, '<mark>$1</mark>');
    }
    
    hideSearchResults() {
        const searchResults = document.querySelector('.search-results');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
    }
    
    // ============================================
    // NEWSLETTER FUNCTIONALITY
    // ============================================
    setupNewsletterForms() {
        const forms = document.querySelectorAll('.newsletter-form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSignup(form);
            });
        });
    }
    
    async handleNewsletterSignup(form) {
        const formData = new FormData(form);
        const email = formData.get('email');
        
        if (!this.validateEmail(email)) {
            this.showFormMessage(form, 'error', 'Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Joining...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        try {
            // Simulate newsletter signup (ready for Kit integration)
            await this.simulateNewsletterSignup({ email });
            
            this.showNewsletterSuccess(form);
            
            // Track successful signup
            if (typeof gtag !== 'undefined') {
                gtag('event', 'newsletter_signup', {
                    event_category: 'conversion',
                    event_label: 'blog_newsletter_signup',
                    value: 1
                });
                
                // Enhanced ecommerce event
                gtag('event', 'purchase', {
                    transaction_id: `newsletter_${Date.now()}`,
                    value: 1,
                    currency: 'USD',
                    items: [{
                        item_id: 'newsletter_subscription',
                        item_name: 'AI Search Weekly Newsletter',
                        item_category: 'Newsletter',
                        item_variant: 'blog_signup',
                        quantity: 1,
                        price: 1
                    }]
                });
            }
            
        } catch (error) {
            this.showFormMessage(form, 'error', error.message);
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    }
    
    async simulateNewsletterSignup(data) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate occasional errors for testing
        if (Math.random() < 0.05) {
            throw new Error('Network error occurred. Please try again.');
        }
        
        console.log('Newsletter signup data:', data);
        
        // Here's where Kit integration would go:
        // return await this.submitToKit(data);
        
        return { success: true };
    }
    
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showNewsletterSuccess(form) {
        const container = form.closest('.newsletter-content') || form.parentElement;
        
        // Clear container contents securely
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        // Create success container
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        
        // Create icon
        const icon = document.createElement('i');
        icon.className = 'fas fa-check-circle';
        successDiv.appendChild(icon);
        
        // Create heading
        const heading = document.createElement('h3');
        heading.textContent = 'Welcome to AI Search Weekly!';
        successDiv.appendChild(heading);
        
        // Create confirmation message
        const confirmMessage = document.createElement('p');
        confirmMessage.textContent = 'Thanks for joining! Check your email for confirmation.';
        successDiv.appendChild(confirmMessage);
        
        // Create "What's next?" message
        const nextMessage = document.createElement('p');
        const strongText = document.createElement('strong');
        strongText.textContent = "What's next? ";
        nextMessage.appendChild(strongText);
        const nextText = document.createTextNode('Your first insights from the FreecalcHub journey arrive next Tuesday.');
        nextMessage.appendChild(nextText);
        successDiv.appendChild(nextMessage);
        
        // Create strategy message
        const strategyMessage = document.createElement('p');
        strategyMessage.textContent = "I'll share the exact strategies I used to grow FreecalcHub's traffic by 40% after the AI search changes.";
        successDiv.appendChild(strategyMessage);
        
        // Create CTA container
        const ctaContainer = document.createElement('div');
        ctaContainer.style.marginTop = '2rem';
        
        const ctaLink = document.createElement('a');
        ctaLink.href = '/free-page-audit';
        ctaLink.className = 'btn btn-primary';
        ctaLink.textContent = 'Get Your Free Page Assessment';
        ctaContainer.appendChild(ctaLink);
        
        successDiv.appendChild(ctaContainer);
        container.appendChild(successDiv);
        
        // Scroll to success message
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    showFormMessage(form, type, message) {
        // Remove existing messages
        const existingMessage = form.querySelector('.form-error, .form-success');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-${type}`;
        messageDiv.setAttribute('role', 'alert');
        
        if (type === 'error') {
            // Create icon
            const icon = document.createElement('i');
            icon.className = 'fas fa-exclamation-triangle';
            messageDiv.appendChild(icon);
            
            // Create message paragraph
            const messageParagraph = document.createElement('p');
            messageParagraph.textContent = message;
            messageDiv.appendChild(messageParagraph);
        }
        
        form.insertBefore(messageDiv, form.firstChild);
        
        // Remove message after 8 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 8000);
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#' || href === '#top') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.blog-header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Track smooth scroll usage
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'smooth_scroll', {
                            event_category: 'navigation',
                            event_label: href
                        });
                    }
                }
            });
        });
    }
    
    // ============================================
    // ANIMATIONS
    // ============================================
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.post-card, .category-card, .featured-post, .stat-item'
        );
        
        animateElements.forEach((el, index) => {
            // Add staggered animation delay
            el.style.animationDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
    }
    
    // ============================================
    // ANALYTICS & TRACKING
    // ============================================
    setupAnalytics() {
        // Track page view with enhanced data
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                content_group1: 'Blog',
                content_group2: 'Hub Page',
                blog_version: '2.0'
            });
        }
        
        // Track AI search referrals
        this.trackAISearchReferrals();
        
        // Track content interactions
        this.setupContentInteractionTracking();
    }
    
    trackAISearchReferrals() {
        const referrer = document.referrer;
        const aiSearchSources = [
            'chatgpt.com',
            'claude.ai',
            'perplexity.ai',
            'bard.google.com',
            'bing.com/chat'
        ];
        
        aiSearchSources.forEach(source => {
            if (referrer.includes(source)) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'ai_search_referral', {
                        event_category: 'ai_search',
                        event_label: source,
                        referrer_url: referrer,
                        landing_page: window.location.pathname
                    });
                }
                
                // Set session storage for AI search visitor
                sessionStorage.setItem('ai_search_visitor', source);
            }
        });
    }
    
    setupScrollTracking() {
        let scrollTimeout;
        
        const trackScrollDepth = () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollPercent > this.maxScrollDepth) {
                this.maxScrollDepth = scrollPercent;
                
                // Track milestone scroll depths
                const milestones = [25, 50, 75, 90];
                milestones.forEach(threshold => {
                    if (this.maxScrollDepth >= threshold && !this.analyticsTracked[`scroll${threshold}`]) {
                        this.analyticsTracked[`scroll${threshold}`] = true;
                        
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'scroll_depth', {
                                event_category: 'engagement',
                                event_label: `${threshold}_percent`,
                                value: threshold
                            });
                        }
                    }
                });
            }
        };
        
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(trackScrollDepth, 100);
        }, { passive: true });
    }
    
    setupTimeTracking() {
        const trackTimeOnPage = () => {
            const timeOnPage = Math.round((Date.now() - this.timeOnPageStart) / 1000);
            
            const milestones = [30, 60, 120, 300];
            milestones.forEach(threshold => {
                if (timeOnPage >= threshold && !this.analyticsTracked[`time${threshold}`]) {
                    this.analyticsTracked[`time${threshold}`] = true;
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'time_on_page', {
                            event_category: 'engagement',
                            event_label: `${threshold}_seconds`,
                            value: threshold
                        });
                    }
                }
            });
        };
        
        // Check time milestones every 10 seconds
        setInterval(trackTimeOnPage, 10000);
        
        // Track final time on page when leaving
        window.addEventListener('beforeunload', () => {
            const finalTime = Math.round((Date.now() - this.timeOnPageStart) / 1000);
            if (typeof gtag !== 'undefined') {
                gtag('event', 'time_on_page_final', {
                    event_category: 'engagement',
                    event_label: 'blog_hub',
                    value: finalTime
                });
            }
        });
    }
    
    setupInteractionTracking() {
        // Track CTA clicks
        document.querySelectorAll('.btn, .read-more, .view-all-link').forEach(element => {
            element.addEventListener('click', (e) => {
                const elementText = element.textContent.trim();
                const section = element.closest('section')?.className || 'unknown';
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                        event_category: 'engagement',
                        event_label: `${elementText}_${section}`,
                        button_text: elementText,
                        section: section
                    });
                }
            });
        });
        
        // Track article clicks
        document.querySelectorAll('.post-card, .featured-post').forEach(card => {
            const links = card.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    const articleTitle = card.querySelector('h3')?.textContent.trim() || 'Unknown';
                    const category = card.querySelector('.post-category')?.textContent.trim() || 'Unknown';
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'article_click', {
                            event_category: 'engagement',
                            event_label: category,
                            article_title: articleTitle,
                            click_url: link.href
                        });
                    }
                });
            });
        });
        
        // Track category clicks
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const categoryName = card.querySelector('h3')?.textContent.trim() || 'Unknown';
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'category_click', {
                        event_category: 'navigation',
                        event_label: categoryName,
                        category_name: categoryName
                    });
                }
            });
        });
    }
    
    setupContentInteractionTracking() {
        // Track text selection
        let selectionTimeout;
        document.addEventListener('selectionchange', () => {
            clearTimeout(selectionTimeout);
            selectionTimeout = setTimeout(() => {
                const selection = window.getSelection();
                if (selection.toString().length > 20) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'text_selection', {
                            event_category: 'engagement',
                            event_label: 'content_highlighted',
                            selection_length: selection.toString().length
                        });
                    }
                }
            }, 1000);
        });
        
        // Track copy events
        document.addEventListener('copy', () => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'content_copied', {
                    event_category: 'engagement',
                    event_label: 'user_copied_content'
                });
            }
        });
    }
    
    // ============================================
    // ENHANCED UX FEATURES
    // ============================================
    setupImageLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Add fade-in effect
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                    
                    // Handle data-src for lazy loading
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        document.querySelectorAll('img[loading="lazy"], img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Escape key functionality
            if (e.key === 'Escape') {
                this.hideSearchResults();
                
                if (this.mobileMenuOpen) {
                    this.closeMobileMenu();
                }
            }
            
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.blog-search-input');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
        });
    }
    
    setupHeaderScrollEffect() {
        let lastScrollY = window.scrollY;
        const header = document.querySelector('.blog-header');
        
        if (!header) return;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class for styling
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        }, { passive: true });
    }
    
    // ============================================
    // DATA LOADING
    // ============================================
    async loadArticleData() {
        try {
            // In the future, this will load from /blog/data/articles.json
            // For now, articles are embedded in the search functionality
            console.log('📄 Article data loaded (mock data)');
            
        } catch (error) {
            console.error('Error loading article data:', error);
        }
    }
    
    // ============================================
    // UTILITY METHODS
    // ============================================
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
    
    debounce(func, wait) {
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
}

// ============================================
// NEWSLETTER KIT INTEGRATION HELPER
// ============================================
class KitIntegration {
    constructor() {
        // API keys should be configured server-side for security
        this.apiKey = null; // Configure server-side
        this.formId = null; // Configure server-side
        this.baseUrl = '/api/newsletter'; // Use server-side proxy
    }
    
    // Ready for Kit integration
    async subscribe(email, additionalData = {}) {
        // This method is ready for Kit integration
        // Jamie can replace this with actual Kit API calls
        
        console.log('Kit integration ready for:', { email, ...additionalData });
        
        // Placeholder for actual Kit integration:
        /*
        const response = await fetch(`https://api.convertkit.com/v3/forms/${this.formId}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: this.apiKey,
                email: email,
                fields: additionalData,
                tags: ['blog_signup', 'ai_search_weekly']
            })
        });
        
        return await response.json();
        */
        
        return { success: true, subscriber: { email } };
    }
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
class PerformanceMonitor {
    constructor() {
        this.setupPerformanceTracking();
    }
    
    setupPerformanceTracking() {
        // Monitor Core Web Vitals
        this.trackWebVitals();
        
        // Track page load performance
        window.addEventListener('load', () => {
            this.trackPageLoadMetrics();
        });
    }
    
    trackWebVitals() {
        // Largest Contentful Paint
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    if (entries.length > 0) {
                        const lcp = entries[entries.length - 1];
                        this.reportMetric('LCP', lcp.startTime);
                    }
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.log('LCP monitoring not supported');
            }
        }
        
        // First Input Delay
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        const fid = entry.processingStart - entry.startTime;
                        this.reportMetric('FID', fid);
                    });
                });
                observer.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                console.log('FID monitoring not supported');
            }
        }
    }
    
    trackPageLoadMetrics() {
        if ('performance' in window && 'getEntriesByType' in performance) {
            const navigation = performance.getEntriesByType('navigation')[0];
            
            if (navigation) {
                const metrics = {
                    'DNS_Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
                    'TCP_Connection': navigation.connectEnd - navigation.connectStart,
                    'TLS_Setup': navigation.connectEnd - navigation.secureConnectionStart,
                    'Request_Time': navigation.responseStart - navigation.requestStart,
                    'Response_Time': navigation.responseEnd - navigation.responseStart,
                    'DOM_Processing': navigation.domContentLoadedEventEnd - navigation.responseEnd,
                    'Resource_Loading': navigation.loadEventStart - navigation.domContentLoadedEventEnd,
                    'Total_Load_Time': navigation.loadEventEnd - navigation.navigationStart
                };
                
                Object.entries(metrics).forEach(([name, value]) => {
                    if (value > 0) {
                        this.reportMetric(name, value);
                    }
                });
            }
        }
    }
    
    reportMetric(name, value) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'performance_metric', {
                event_category: 'performance',
                event_label: name,
                value: Math.round(value),
                metric_name: name,
                metric_value: Math.round(value)
            });
        }
        
        console.log(`Performance Metric - ${name}: ${Math.round(value)}ms`);
    }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main blog functionality
    window.blogInstance = new AISearchMasteryBlog();
    
    // Initialize Kit integration helper
    window.kitIntegration = new KitIntegration();
    
    // Initialize performance monitoring
    window.performanceMonitor = new PerformanceMonitor();
    
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && typeof gtag !== 'undefined') {
            gtag('event', 'page_hidden', {
                event_category: 'engagement',
                event_label: 'blog_hub',
                time_on_page: Math.round((Date.now() - window.blogInstance.timeOnPageStart) / 1000)
            });
        }
    });
});

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AISearchMasteryBlog, KitIntegration, PerformanceMonitor };
}
