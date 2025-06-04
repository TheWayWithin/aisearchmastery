# AI Search Mastery Landing Page Deployment Guide

This guide provides instructions for deploying the AI Search Mastery landing page to your domain for Stripe verification and initial audience engagement.

## Package Contents

The `aisearchmastery_landing_page.zip` file contains:

1. `index.html` - The complete landing page with embedded CSS and JavaScript
2. Favicon files in various formats:
   - `favicon.ico` - Multi-size ICO file
   - `favicon-16x16.png`, `favicon-32x32.png`, etc. - PNG favicons in different sizes
   - `apple-touch-icon.png` - For Apple devices
   - `android-chrome-192x192.png` - For Android devices

## Deployment Options

### Option 1: Netlify Deployment (Recommended)

1. **Create a Netlify account** if you don't have one at [netlify.com](https://www.netlify.com/)
2. **Deploy the site:**
   - Go to the Netlify dashboard
   - Drag and drop the `aisearchmastery_landing_page.zip` file onto the Netlify dashboard
   - Netlify will automatically extract and deploy the site
   - Your site will be live at a temporary URL (e.g., random-name.netlify.app)

3. **Connect your domain:**
   - In the Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter "aisearchmastery.com" and follow the instructions to configure DNS

### Option 2: GitHub Pages Deployment

1. **Create a GitHub repository** named `aisearchmastery.github.io`
2. **Extract the zip file** and upload all contents to the repository
3. **Enable GitHub Pages** in the repository settings
4. **Connect your domain** in the GitHub Pages settings

### Option 3: Traditional Web Hosting

1. **Log in to your web hosting control panel**
2. **Navigate to the file manager** or use FTP to access your server
3. **Upload all files** from the zip to the root directory of your domain
4. **Ensure index.html is set** as the default document

## Domain Configuration

After deploying the landing page, you'll need to:

1. **Point your domain to your hosting provider** by updating the nameservers or DNS records
2. **Wait for DNS propagation** (can take up to 48 hours, but often much faster)
3. **Verify your site is working** by visiting aisearchmastery.com

## Stripe Verification

Once your site is live:

1. **Create or log in to your Stripe account**
2. **Navigate to the verification section**
3. **Enter your business URL** (aisearchmastery.com)
4. **Complete any additional verification steps** required by Stripe

## Next Steps

After successful Stripe verification:

1. **Connect Stripe to Podia** following Podia's integration instructions
2. **Set up payment processing** for your AISearchAcademy courses
3. **Consider enhancing the landing page** with additional content and features

## Support

If you encounter any issues with deployment, please reach out for assistance.
