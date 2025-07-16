# Security Testing Guide - AI Search Mastery

## Testing Security Headers

### 1. Online Security Headers Test

**After deploying to production**, test your security headers using these tools:

#### SecurityHeaders.io
```
https://securityheaders.io/?q=https://aisearchmastery.com
```

#### Expected Results:
- **Overall Grade**: A or A+
- **Content Security Policy**: ✅ Implemented
- **X-Frame-Options**: ✅ DENY
- **X-Content-Type-Options**: ✅ nosniff
- **Strict-Transport-Security**: ✅ max-age=63072000
- **X-XSS-Protection**: ✅ 1; mode=block
- **Referrer-Policy**: ✅ strict-origin-when-cross-origin

### 2. Browser Developer Tools Test

#### Chrome DevTools:
1. Open your site in Chrome
2. Press F12 → Network tab
3. Refresh the page
4. Click on the main document request
5. Check Response Headers section

#### Expected Headers:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### 3. Command Line Testing

#### Using curl:
```bash
curl -I https://aisearchmastery.com
```

#### Using HTTPie:
```bash
http HEAD https://aisearchmastery.com
```

### 4. Content Security Policy Testing

#### Test CSP Console:
1. Open browser console on your site
2. Should see NO CSP violations
3. If violations appear, adjust the CSP accordingly

#### Common CSP Issues to Check:
- ✅ Google Analytics loads properly
- ✅ Google Tag Manager works
- ✅ Font Awesome icons display
- ✅ Google Fonts load correctly
- ✅ No inline script violations

### 5. XSS Protection Testing

#### Manual XSS Tests:
Try these in your forms and search (should be blocked):
```
<script>alert('XSS')</script>
javascript:alert('XSS')
<img src=x onerror=alert('XSS')>
```

#### Expected Results:
- ✅ No alert boxes appear
- ✅ Scripts don't execute
- ✅ Input is properly sanitized

### 6. Clickjacking Protection Test

#### Test Frame Embedding:
Create a test HTML file:
```html
<!DOCTYPE html>
<html>
<body>
    <iframe src="https://aisearchmastery.com" width="500" height="300"></iframe>
</body>
</html>
```

#### Expected Result:
- ✅ Site refuses to load in iframe
- ✅ Browser shows frame blocking error

### 7. HTTPS Redirect Test

#### Test HTTP to HTTPS:
```bash
curl -I http://aisearchmastery.com
```

#### Expected Result:
```
HTTP/1.1 301 Moved Permanently
Location: https://aisearchmastery.com/
```

### 8. Error Page Security Test

#### Test Custom Error Pages:
```bash
curl -I https://aisearchmastery.com/nonexistent-page
curl -I https://aisearchmastery.com/.htaccess
```

#### Expected Results:
- ✅ 404 shows custom error page
- ✅ .htaccess returns 403 Forbidden
- ✅ No server information leaked

## Common Issues and Solutions

### Issue 1: CSP Violations
**Problem**: Console shows CSP violations
**Solution**: Add missing domains to CSP policy

### Issue 2: Fonts Not Loading
**Problem**: Google Fonts blocked by CSP
**Solution**: Ensure `fonts.googleapis.com` in style-src and `fonts.gstatic.com` in font-src

### Issue 3: Analytics Not Working
**Problem**: Google Analytics blocked
**Solution**: Verify all Google Analytics domains are in script-src and connect-src

### Issue 4: Headers Not Applied
**Problem**: Security headers not visible
**Solution**: Ensure Apache mod_headers is enabled and .htaccess is readable

## Security Monitoring

### Set up ongoing monitoring:
1. **Monthly**: Check SecurityHeaders.io score
2. **Quarterly**: Run full security scan
3. **After updates**: Re-test all functionality

### Browser Console Monitoring:
- Check for CSP violations regularly
- Monitor for any JavaScript errors
- Verify all external resources load properly

## Emergency Procedures

### If CSP Breaks Site:
1. **Immediate**: Comment out CSP line in .htaccess
2. **Fix**: Identify missing domain in CSP
3. **Test**: Add domain and verify functionality
4. **Re-enable**: Uncomment CSP line

### If Headers Break Functionality:
1. **Backup**: Keep copy of working .htaccess
2. **Isolate**: Test headers individually
3. **Adjust**: Modify problematic header
4. **Verify**: Test all site functionality

## Testing Checklist

Before going live:
- [ ] All security headers present
- [ ] CSP allows all necessary resources
- [ ] No console errors or violations
- [ ] Forms work correctly
- [ ] Search functionality works
- [ ] Analytics tracking works
- [ ] All external resources load
- [ ] Error pages display correctly
- [ ] HTTPS redirect works
- [ ] No sensitive files accessible

## Next Steps

After implementing security headers:
1. **Deploy to production**
2. **Run SecurityHeaders.io test**
3. **Monitor for any issues**
4. **Document any CSP adjustments needed**
5. **Set up regular security monitoring**

Remember: Security is an ongoing process, not a one-time setup!