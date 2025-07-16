# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for AI Search Mastery, showcasing the MASTERY-AI Framework v2.1 created by Jamie Watters. The site focuses on AI search optimization methodology and provides resources for businesses adapting to AI-powered search engines.

## Architecture & Structure

### Core Technology Stack
- **Frontend**: Static HTML, CSS, JavaScript
- **Styling**: Custom CSS with CSS variables and responsive design
- **JavaScript**: Vanilla JS with ES6+ features
- **Analytics**: Google Tag Manager integration
- **Forms**: ConvertKit integration for newsletter subscriptions

### Key File Structure
```
/
├── index.html                 # Main homepage
├── css/
│   ├── main.css              # Primary stylesheet with comprehensive responsive design
│   └── blog.css              # Blog-specific styles
├── js/
│   ├── homepage.js           # Homepage functionality and analytics
│   └── blog.js               # Blog page functionality
├── images/                   # All image assets (logos, favicons, content images)
├── blog/                     # Blog content with organized categories
├── about/                    # About page content
├── contact/                  # Contact page
├── newsletter/               # Newsletter signup page
└── privacy/                  # Privacy policy
```

## Development Guidelines

### CSS Architecture
- Uses CSS custom properties (variables) defined in `:root` for consistent theming
- Follows BEM-like naming conventions for components
- Responsive design with mobile-first approach
- Breakpoints: 480px (small mobile), 768px (mobile), 1000px (tablet), 1200px (desktop)
- Primary colors: `--primary-blue: #1E3A8A`, `--primary-teal: #0D9488`

### JavaScript Patterns
- Main functionality organized in ES6 classes (`AISearchMasteryHomepage`)
- Event-driven architecture with proper cleanup
- Async/await for API calls
- Error handling with user-friendly messages
- Analytics tracking throughout user interactions

### Mobile Navigation
- Hamburger menu for mobile devices
- Responsive navigation that adapts at different breakpoints
- Mobile menu uses fixed positioning with smooth transitions
- Focus management for accessibility

### Form Handling
- Real-time validation with immediate feedback
- ConvertKit integration for newsletter subscriptions
- Graceful error handling and loading states
- ARIA attributes for accessibility

## Common Development Tasks

### Adding New Pages
1. Create HTML file following existing structure
2. Include standard meta tags and favicon references
3. Link to `/css/main.css` for consistent styling
4. Add navigation links to header if needed
5. Test responsive behavior across all breakpoints

### Styling Components
- Use existing CSS variables for colors and spacing
- Follow established naming patterns
- Test across all responsive breakpoints
- Ensure accessibility (focus states, contrast ratios)

### Analytics Integration
- All tracking events go through Google Tag Manager
- Use `gtag('event', ...)` for custom events
- Track user engagement (scroll depth, time on page, CTA clicks)
- Test events in browser console before deployment

### Newsletter Integration
- ConvertKit API integration in `KitNewsletterIntegration` class
- Form validation with real-time feedback
- Success/error state management
- Proper loading states for better UX

## Testing Requirements

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

### Responsive Testing
- Test at all major breakpoints
- Verify mobile navigation functionality
- Check form usability on mobile devices
- Ensure charts and graphics scale properly

### Performance Considerations
- Optimize images before adding to `/images/`
- Minimize JavaScript execution
- Use CSS transforms for animations
- Implement lazy loading for non-critical content

## Build Process

This is a static site with no build process required. Files are served directly. However:

### Local Development
- Use a local server (Python's `http.server`, Node's `http-server`, or VS Code Live Server)
- Test at `http://localhost:8000` or similar

### Deployment
- Files can be deployed directly to any static hosting service
- Ensure all paths are relative or absolute as needed
- Verify Google Tag Manager ID is correct for production

## Key Features

### MASTERY-AI Framework Showcase
- 132 atomic factors across 8 strategic pillars
- Interactive visualizations and charts
- Expert validation and case studies
- Comprehensive assessment tools

### Content Strategy
- AI search optimization insights
- Case studies from FreecalcHub implementation
- How-to guides and industry updates
- Newsletter with weekly insights

### User Experience
- Smooth scrolling and animations
- Responsive design for all devices
- Accessible navigation and forms
- Fast loading times

## Maintenance Notes

### Regular Updates
- Keep framework version numbers current
- Update case study metrics as they evolve
- Refresh testimonials and validation content
- Monitor and update analytics tracking

### Content Management
- Blog posts follow established template structure
- Images should be optimized for web use
- Maintain consistent brand voice and messaging
- Update copyright year annually

### Technical Maintenance
- Test forms regularly to ensure ConvertKit integration works
- Monitor console for JavaScript errors
- Verify all external links work correctly
- Update meta descriptions and SEO elements as needed