# Deployment Guide

This guide will help you deploy your portfolio to Vercel and run Lighthouse audits.

## 🚀 Deploying to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd portfolio-nextjs
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? → Yes
   - Link to existing project? → No
   - Project name → portfolio-nextjs (or your preferred name)
   - Directory → ./
   - Override settings? → No

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio-nextjs.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Wait for deployment** - Vercel will automatically build and deploy your site

### Method 3: Using Vercel Git Integration

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Link project**:
   ```bash
   vercel link
   ```

3. **Deploy on every push**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

   Vercel will automatically deploy when you push to GitHub.

## 📊 Running Lighthouse Audit

### Using Chrome DevTools

1. **Open your portfolio in Chrome**:
   - Local: http://localhost:3000
   - Production: https://your-portfolio.vercel.app

2. **Open DevTools**:
   - Press `F12` or `Ctrl+Shift+I` (Windows)
   - Press `Cmd+Option+I` (Mac)

3. **Navigate to Lighthouse**:
   - Click the "Lighthouse" tab
   - Or go to More tools → Lighthouse

4. **Configure audit**:
   - **Device**: Desktop (or Mobile for mobile audit)
   - **Categories**:
     - ✅ Performance
     - ✅ Accessibility
     - ✅ Best Practices
     - ✅ SEO
   - **Throttling**: Simulated slow 4G (recommended)
   - **Clear storage**: ✅ (recommended)

5. **Run audit**:
   - Click "Analyze page load"
   - Wait for the audit to complete (1-2 minutes)

6. **Review results**:
   - Check scores for each category
   - Review opportunities and diagnostics
   - Fix identified issues

### Using Lighthouse CLI

1. **Install Lighthouse CLI**:
   ```bash
   npm install -g lighthouse
   ```

2. **Run audit**:
   ```bash
   lighthouse http://localhost:3000 --view
   ```

3. **For production URL**:
   ```bash
   lighthouse https://your-portfolio.vercel.app --view
   ```

4. **Save report**:
   ```bash
   lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
   ```

### Using PageSpeed Insights

1. **Go to PageSpeed Insights**:
   - https://pagespeed.web.dev/

2. **Enter your URL**:
   - Local: http://localhost:3000
   - Production: https://your-portfolio.vercel.app

3. **Run analysis** for both Mobile and Desktop

4. **Review results and fix issues**

## 🎯 Target Scores

### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 100

### Common Issues and Fixes

#### Performance Issues

**1. Large JavaScript Bundles**
- Use dynamic imports for heavy components
- Implement code splitting
- Remove unused dependencies

**2. Unoptimized Images**
- Use Next.js Image component with proper sizes
- Compress images before uploading
- Use WebP/AVIF formats

**3. Slow Time to First Byte (TTFB)**
- Use CDN for static assets
- Enable compression
- Optimize API responses

#### Accessibility Issues

**1. Missing Alt Text**
- Add descriptive alt text to all images
- Use empty alt for decorative images

**2. Low Color Contrast**
- Ensure text contrast ratio is at least 4.5:1
- Use darker colors for text on light backgrounds

**3. Missing ARIA Labels**
- Add ARIA labels to interactive elements
- Use semantic HTML elements

#### SEO Issues

**1. Missing Meta Description**
- Add meta description to layout.tsx
- Keep it under 160 characters

**2. Missing Open Graph Tags**
- Add Open Graph tags for social sharing
- Include proper image dimensions

**3. Slow Page Load**
- Optimize images and scripts
- Implement lazy loading
- Use CDN

## 🔧 Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] Dark mode toggle works
- [ ] Navigation links work
- [ ] Contact form is accessible
- [ ] Mobile responsive design works
- [ ] Lighthouse scores meet targets
- [ ] SEO meta tags are correct
- [ ] Favicon displays correctly
- [ ] Social sharing works (Open Graph)

## 📱 Testing on Different Devices

1. **Chrome DevTools Device Mode**:
   - Open DevTools (F12)
   - Click device toolbar icon
   - Test on different screen sizes

2. **Real Device Testing**:
   - Test on mobile phone
   - Test on tablet
   - Test on different browsers (Chrome, Firefox, Safari, Edge)

3. **BrowserStack** (for cross-browser testing):
   - https://www.browserstack.com/
   - Free for open source projects

## 🌐 Domain Configuration (Optional)

### Custom Domain on Vercel

1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Go to Settings → Domains**
4. **Add your domain**
5. **Update DNS records**:
   - A Record: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com

## 🔄 Continuous Deployment

### Automatic Deployment on Git Push

Vercel automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

### Environment Variables

Add environment variables in Vercel Dashboard:
- Settings → Environment Variables
- Add any API keys or secrets needed

## 📈 Monitoring

### Vercel Analytics

1. **Enable Analytics** in Vercel Dashboard
2. **View performance metrics**
3. **Monitor visitor traffic**

### Google Analytics (Optional)

1. **Create GA4 property**
2. **Add tracking ID to layout.tsx**
3. **Install @next/third-parties package**

## 🆘 Troubleshooting

### Build Errors

**Error: Module not found**
- Run `npm install`
- Delete node_modules and reinstall

**Error: TypeScript errors**
- Check tsconfig.json
- Ensure all types are correct

### Deployment Errors

**Error: Build failed**
- Check build logs in Vercel
- Ensure all dependencies are in package.json
- Test locally with `npm run build`

**Error: 404 on deployment**
- Check build output directory
- Ensure next.config.js is correct

---

**Need help?** Check [Vercel Docs](https://vercel.com/docs) or [Lighthouse Docs](https://github.com/GoogleChrome/lighthouse)
