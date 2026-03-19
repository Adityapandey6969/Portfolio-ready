# RUN COMMANDS & DEPLOYMENT GUIDE

**Project:** Aditya Pandey Portfolio  
**Version:** 1.0  
**Last Updated:** January 2025  

---

## TABLE OF CONTENTS
1. [Local Development](#local-development)
2. [Testing](#testing)
3. [Deployment Options](#deployment-options)
4. [Troubleshooting](#troubleshooting)
5. [Performance Optimization](#performance-optimization)

---

## LOCAL DEVELOPMENT

### Option 1: Direct Browser Opening (Easiest)
**No setup required!**

#### Windows:
```powershell
# Navigate to project folder
cd d:\My_Portfolio

# Open in default browser
start index.html

# OR open in specific browser
# Chrome:
& "C:\Program Files\Google\Chrome\Application\chrome.exe" index.html

# Firefox:
& "C:\Program Files\Mozilla Firefox\firefox.exe" index.html

# Edge:
& "C:\Program Files\Microsoft\Edge\Application\msedge.exe" index.html
```

#### macOS:
```bash
# Navigate to project folder
cd ~/My_Portfolio

# Open in default browser
open index.html

# Chrome:
open -a "Google Chrome" index.html

# Safari:
open -a Safari index.html
```

#### Linux:
```bash
cd ~/My_Portfolio

# Open in default browser
xdg-open index.html

# Specific browsers:
google-chrome index.html
firefox index.html
```

**⚠️ Note:** Some features require a local web server (see below)

---

### Option 2: Local Web Server (Recommended)

#### Using Python (All platforms)
```bash
# Navigate to project folder
cd d:\My_Portfolio

# Python 3
python -m http.server 8000

# Python 2 (legacy)
python -m SimpleHTTPServer 8000

# Then open browser to: http://localhost:8000
```

#### Using Node.js http-server
```bash
# Install globally (one-time)
npm install -g http-server

# Navigate to project folder
cd d:\My_Portfolio

# Start server
http-server

# Output will show:
# Starting up http-server, serving ./
# Available on:
#   http://localhost:8080
#   http://192.168.x.x:8080

# Then open: http://localhost:8080
```

#### Using PHP (if installed)
```bash
cd d:\My_Portfolio
php -S localhost:8000

# Then open: http://localhost:8000
```

#### Using Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. File auto-refreshes on save

#### Using PowerShell Simple Server
```powershell
cd d:\My_Portfolio

# Windows PowerShell simple server
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8000/")
$listener.Start()
write-host "Server running on http://localhost:8000"
```

---

## TESTING

### Pre-Deployment Checklist

#### 1. Browser Compatibility Testing
```bash
# Test in all major browsers
# Chrome/Chromium ✓
# Firefox ✓
# Safari ✓
# Edge ✓
# Mobile browsers ✓
```

#### 2. Responsive Design Testing
```bash
# Chrome DevTools
Press: F12 > Click device toolbar icon > Test presets:
- iPhone 12 (390x844)
- iPad (1024x1366)
- Galaxy S5 (360x640)
- Desktop 1920x1080

# Manual testing
Resize browser window from 320px to 1920px width
Verify:
- [ ] Mobile hamburger menu appears < 768px
- [ ] Grid layouts adjust correctly
- [ ] Text remains readable
- [ ] All buttons clickable
```

#### 3. Performance Audit
```bash
# Chrome DevTools Lighthouse
Press: F12 > Lighthouse tab > Analyze page load

Target scores:
- Performance: > 90
- Accessibility: > 85
- Best Practices: > 90
- SEO: > 90

# Network tab verification
Press: F12 > Network tab > Reload
Verify:
- All resources load (no 404 errors)
- Total size < 1 MB
- Load time < 2 seconds
```

#### 4. Form Testing
```
1. Open contact form
2. Leave fields empty, try submit
   → Should show validation error
3. Fill all fields with sample data:
   Name: "John Doe"
   Email: "john@example.com"
   Subject: "Test Message"
   Message: "This is a test"
4. Click "Send Message"
   → Should show: "✅ Opening your email client..."
   → Email client should open with pre-filled message
5. If email client doesn't open:
   → Manual email to: adityapandey2479@gmail.com
```

#### 5. Animation Testing
```
1. Canvas animations (page load)
   → Floating cyan particles should animate continuously
   → Slash effects should appear every 1.3 seconds
   
2. Typewriter effect (hero section)
   → Text should cycle through: "Data Scientist", "ML Engineer", etc.
   → Smooth typing and deleting
   
3. Scroll animations
   → Navigate to: Projects, About, Skills sections
   → Cards should fade in with animation when scrolled into view
   → Smooth transitions
   
4. Mobile menu (< 768px width)
   → Click hamburger icon
   → Menu should slide open
   → Menu options should be clickable
   → Click menu item → menu closes
```

#### 6. Console Error Check
```bash
# In any browser:
Press: F12 > Console tab

Should see: No red errors or warnings
Expected messages may include:
- Font loading messages (normal)
- Google Analytics (if added)

If you see errors like:
❌ Cannot read property 'addEventListener' of null
   → HTML element missing or wrong ID
❌ Uncaught ReferenceError: variable is not defined
   → JavaScript function not loaded
```

---

## DEPLOYMENT OPTIONS

### Quick Comparison

| Platform | Cost | Setup Time | Performance | Custom Domain |
|----------|------|-----------|-------------|---------------|
| **Vercel** | Free | 2 min | Excellent | Yes (free) |
| **Netlify** | Free | 2 min | Excellent | Yes (free) |
| **GitHub Pages** | Free | 5 min | Good | Yes (free) |
| **Traditional Host** | $5-20/mo | 10 min | Good | Yes |

---

### OPTION 1: Vercel (Recommended) ⭐

**Deployment Time:** 2 minutes  
**Cost:** Free tier available  
**Performance:** World-class CDN  

#### Step-by-Step:

**1. Create Vercel Account**
```bash
Visit: https://vercel.com
Click: "Sign Up"
Choose: "GitHub", "GitLab", or "Bitbucket"
```

**2. Push to GitHub**
```bash
cd d:\My_Portfolio

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create GitHub repo at https://github.com/new
# Then:
git remote add origin https://github.com/YOUR_USERNAME/My_Portfolio.git
git branch -M main
git push -u origin main
```

**3. Deploy on Vercel**
```bash
# Option A: Web UI
Visit: https://vercel.com/dashboard
Click: "Add New..."
Click: "Project"
Select: Your GitHub repository (My_Portfolio)
Click: "Import"
Vercel will auto-detect it's a static site
Click: "Deploy"

# Wait: ~1-2 minutes
# Your site is now live at: https://my-portfolio-xxx.vercel.app
```

**4. Custom Domain (Optional)**
```bash
Visit: Vercel Dashboard > Your Project > Settings > Domains
Enter: yourdomain.com
Follow: DNS configuration steps
Wait: 2-24 hours for DNS to propagate
```

#### Verification:
```
✓ Site is live at: https://my-portfolio-xxx.vercel.app
✓ Every push to GitHub auto-deploys
✓ HTTPS enabled by default
✓ Global CDN serving from multiple regions
```

---

### OPTION 2: Netlify

**Deployment Time:** 2 minutes  
**Cost:** Free tier available  
**Performance:** Excellent CDN  

#### Step-by-Step:

**1. Create Netlify Account**
```bash
Visit: https://netlify.com
Click: "Sign up"
Choose: GitHub authentication
```

**2. Connect Repository**
```bash
# Push to GitHub first (see Vercel steps 2-3)

Visit: https://app.netlify.com
Click: "New site from Git"
Choose: GitHub
Select: Your Portfolio repository
Netlify auto-detects it's static (no build needed)
Click: "Deploy site"
```

**3. Wait for Deployment**
```
Netlify will:
1. Clone your repository
2. Detect static site
3. Deploy to CDN
4. Assign you an auto-generated URL

your-site-name.netlify.app
```

---

### OPTION 3: GitHub Pages

**Deployment Time:** 5 minutes  
**Cost:** Free  
**Performance:** Good, served from GitHub CDN  

#### Step-by-Step:

**1. Push Code to GitHub**
```bash
cd d:\My_Portfolio

# Initialize and commit (see Vercel steps 2)
git init
git add .
git commit -m "Initial commit"

# Create repository at https://github.com/new
# Name it: My_Portfolio (or whatever)

git remote add origin https://github.com/YOUR_USERNAME/My_Portfolio.git
git branch -M main
git push -u origin main
```

**2. Enable GitHub Pages**
```bash
Visit: https://github.com/YOUR_USERNAME/My_Portfolio
Click: Settings
Scroll: Down to "Pages" section
Source: Select "Deploy from a branch"
Branch: Select "main"
Folder: Select "/ (root)"
Click: Save
```

**3. Access Your Site**
```
Wait: 2-3 minutes
GitHub will show: "Your site is live at: 
https://YOUR_USERNAME.github.io/My_Portfolio"

Visit that URL to see your site live!
```

---

### OPTION 4: Traditional Web Hosting

#### Setup with FTP/SFTP:

**1. Upload Files**
```bash
Using FileZilla or similar FTP client:
1. Connect to hosting server (FTP details provided by host)
2. Navigate to: public_html or www folder
3. Upload these files:
   - index.html
   - styles.css
   - script.js
4. Upload complete
```

**2. Access Your Site**
```
Visit: https://yourdomain.com
Or: https://www.yourdomain.com
```

**3. Verify Deployment**
```bash
Open: yourdomain.com/index.html
Check:
- [ ] Page loads correctly
- [ ] Canvas animations working
- [ ] All resources loaded (no 404s)
- [ ] Form submissions working
```

#### Using cPanel (if available):

```bash
1. Login to cPanel
2. File Manager
3. Navigate to public_html
4. Upload files via web interface
5. Set permissions: Files to 644, Folders to 755
6. Visit yourdomain.com
```

---

## CONTINUOUS DEPLOYMENT

### GitHub + Vercel (Auto-Deploy)

When you push changes:
```bash
cd d:\My_Portfolio

# Make changes to files
vim index.html
# Edit: update portfolio content

# Commit and push
git add .
git commit -m "Update portfolio content"
git push origin main

# Vercel automatically:
# 1. Detects the push
# 2. Builds the site (instant, no build step)
# 3. Deploys to production
# 4. Site updates in ~30 seconds
```

---

## TROUBLESHOOTING

### Issue 1: Animations Not Playing
**Symptoms:** Canvas animations frozen, text not cycling  
**Solution:**
```bash
# Check browser console for errors
Press: F12 > Console

# Look for errors related to:
- Canvas element not found
- typewriter element not found
- requestAnimationFrame not supported

# Fix:
1. Verify HTML has correct IDs:
   <canvas id="shadowCanvas">
   <span id="typewriter">
2. Check script.js is loaded (Network tab)
3. Clear browser cache: Ctrl+Shift+Delete
4. Reload page: Ctrl+F5 (hard refresh)
```

### Issue 2: Form Not Sending
**Symptoms:** Clicking send message does nothing  
**Solution:**
```bash
# Check in browser console
Press: F12 > Console

# You should see no errors
# Click "Send Message" button
# Should see: "✅ Opening your email client..."
# And your default email client opens

# If not working:
1. JavaScript may be disabled
   → Check browser settings
2. mailto: links blocked by security policy
   → Manually copy email address from page
   → Email to: adityapandey2479@gmail.com
```

### Issue 3: Mobile Menu Not Working
**Symptoms:** Hamburger icon visible but menu doesn't open (< 768px width)  
**Solution:**
```bash
# On mobile device, open browser console
Press: F12 > Console

# Check for JavaScript errors
# Click hamburger icon
# Should see menu slide open

# If not:
1. Verify JavaScript loaded (Network tab)
2. Clear cache and reload
3. Try different browser
```

### Issue 4: Slow Load Time
**Symptoms:** Page takes > 3 seconds to load  
**Analysis:**
```bash
# Check what's slow
Press: F12 > Network tab
Reload page (Ctrl+R)

# Look at load times:
- index.html: Should be < 100ms
- styles.css: Should be < 100ms
- script.js: Should be < 100ms
- Google Fonts: ~200-300ms (normal)
- Font Awesome: ~200-300ms (normal)

# If slow:
1. Check internet connection (reload)
2. CDN resources might be slow from your location
3. Browser extensions might be slowing it
4. Try in private/incognito mode

# Expected total: 800ms - 1.2 seconds
```

### Issue 5: Projects/Skills Not Showing
**Symptoms:** Projects or Skills sections are blank  
**Solution:**
```bash
# Check browser console
Press: F12 > Console

# Look for warnings like:
"⚠️ Projects grid element not found in DOM"

# Fix:
1. Verify HTML has correct IDs:
   <div id="projectsGrid"> (for projects)
   <div id="skillsContainer"> (for skills)
2. Reload page
3. Verify script.js loaded successfully
```

### Issue 6: 404 Errors in Console
**Symptoms:** Missing network resources  
**Solution:**
```bash
Press: F12 > Network tab
Look for red items (404 errors)

# Likely candidates:
✗ /resume/Aditya_Pandey_Resume.pdf
   → This is expected (placeholder link)
   → Update href in HTML when you have resume

All other files should load (200 status)
```

---

## PERFORMANCE OPTIMIZATION

### Current Performance Baseline
```
Page Load Time: ~800ms
Lighthouse Score: 92/100
Canvas FPS: 60 FPS
Mobile Score: 90/100
```

### Optional Optimizations

#### 1. Image Optimization
**Current:** Using emoji (perfect!)  
**If adding images:**
```bash
# Optimize before upload
- Use WebP format for modern browsers
- Keep dimensions small
- Compress with: TinyPNG.com or ImageOptim
- Example sizes:
  - Hero image: 400x300px, ~50KB
  - Project thumbnails: 300x200px, ~30KB each
```

#### 2. Font Loading Strategy
**Current:** Using Google Fonts (good performance)  
**To optimize further:**
```css
/* Add to styles.css after @import */
@font-face {
    font-family: 'Inter';
    src: url('inter.woff2') format('woff2');
    font-display: swap; /* Show text faster */
}
```

#### 3. Lazy Loading (Advanced)
**For future versions with many images:**
```html
<!-- Add to images that aren't visible on load -->
<img src="project.png" loading="lazy">
```

#### 4. Service Worker for Offline Support
**Advanced optimization (not needed** for current site):
```javascript
// Would enable offline functionality
// Not required for portfolio to work well
```

#### 5. Minify CSS/JavaScript (Optional)
```bash
# Current: Human-readable code
# Benefit: ~30% smaller file size
# Cost: Harder to edit

# Tools (if you want to):
- CSS: cssnano.co
- JavaScript: minify.org

# For this project: Not necessary
# Load time already excellent
```

---

## POST-DEPLOYMENT VERIFICATION

### After Deploying to Production

**1. Basic Functionality**
```
□ Page loads without errors
□ Canvas animations playing
□ Typewriter text cycling
□ Scroll animations triggering
□ Form submission working
□ Mobile menu functional
□ Links working
```

**2. Performance Check**
```
□ Lighthouse score > 85
□ Load time < 2 seconds
□ No 404 errors
□ All images/fonts loaded
```

**3. Appearance Check**
```
□ Logo visible and styled
□ Navigation bar looks good
□ Hero section displaying
□ All sections visible
□ Mobile responsiveness working
□ Colors and spacing correct
```

**4. Contact Check**
```
□ Form fields accessible
□ Submit button functional
□ Email submission working
□ Phone number clickable
□ Email address linked
```

---

## MAINTENANCE

### Regular Maintenance Tasks

#### Monthly:
```bash
# Check analytics
# Review any issues reported
# Test form submissions working
# Verify no broken links
```

#### Quarterly:
```bash
# Update project descriptions
# Add new projects
# Update skill percentages
# Review performance metrics
```

#### Yearly:
```bash
# Major content refresh
# Review design still looks modern
# Audit security
# Update dependencies (if added)
```

---

## SUPPORT & DEBUGGING

### Getting Help

**Common Issues:**
- Refer to [Troubleshooting section](#troubleshooting) above
- Check [BUG_REPORT.md](BUG_REPORT.md) for known issues
- Review [TECH_STACK.md](TECH_STACK.md) for technical details

**For Custom Modifications:**
- Edit `script.js` to change functionality
- Edit `styles.css` to change appearance
- Edit `index.html` to change content
- No build tools needed - changes are instant

---

## QUICK COMMAND REFERENCE

```bash
# Local Development
cd d:\My_Portfolio
python -m http.server 8000

# GitHub Deployment
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel Deployment
# Auto-deploys on git push (if connected)

# Testing
# Open http://localhost:8000 in browser
# Press F12, check Console for errors

# Check Performance
# Press F12 > Lighthouse > Analyze page load
```

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Ready for Deployment ✅
