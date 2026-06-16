# Healthcare Consulting Site - Production Deployment Guide

## ✅ Pre-Deployment Checklist

### Environment Setup
- [ ] Set up all required environment variables in `.env.production`
  - [ ] VITE_API_URL pointing to production backend
- [ ] `.env.production` is NOT committed to git (listed in .gitignore)
- [ ] `.env.example` is committed for reference

### Code Quality
- [x] Removed all console.log statements
- [x] Replaced console.error with production-safe logger
- [x] Added Error Boundary component
- [x] TypeScript strict mode enabled
- [x] Build succeeds with no errors: `npm run build`

### Performance
- [x] Code splitting configured in vite.config.ts
- [x] Terser minification enabled
- [x] CSS code splitting enabled
- [x] Source maps disabled in production (set to false)
- [x] Console logs removed from production build

### Security
- [x] Content Security Policy (CSP) headers added
- [x] X-Frame-Options set to DENY
- [x] X-Content-Type-Options set to nosniff
- [x] X-XSS-Protection enabled
- [x] Referrer-Policy set to strict-origin-when-cross-origin
- [x] No sensitive data in client-side code
- [x] API endpoints use HTTPS only

### SEO & Discovery
- [x] robots.txt created with proper directives
- [x] sitemap.xml created with all routes
- [x] Meta tags added (title, description, keywords, OG tags)
- [x] Open Graph tags configured
- [x] Twitter Card tags configured
- [ ] Google Search Console setup (manual step)
- [ ] Google Analytics configured (manual step)
- [ ] XML sitemap submitted to search engines

### Testing
- [ ] Manual testing on production-like environment
- [ ] Form submissions tested (Contact, Gap Analysis)
- [ ] Backend form processing working
- [ ] All routes accessible
- [ ] Responsive design tested on mobile/tablet
- [ ] Performance tested with Lighthouse
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

### Deployment
- [ ] Build artifact ready: `npm run build` produces `dist/`
- [ ] Static files configured for CDN if applicable
- [ ] CORS headers configured on backend if needed
- [ ] Rate limiting configured on API endpoints
- [ ] Database backups scheduled
- [ ] Monitoring/alerting configured

### Post-Deployment
- [ ] Smoke tests passed on production
- [ ] Error logging working (check logger output)
- [ ] Performance metrics acceptable (Core Web Vitals)
- [ ] HTTPS certificate valid
- [ ] Redirects configured (www, www to non-www if needed)
- [ ] Custom domain DNS configured
- [ ] Form submissions processing correctly on backend

## 🚀 Deployment Steps

### 1. Build Production Bundle
```bash
npm run build
```
This creates optimized files in the `dist/` folder.

### 2. Setup Environment Variables
Update `.env.production` with your actual production values:
```bash
VITE_API_URL=https://your-api-domain.com
```

### 3. Deploy to Hosting
Examples for popular platforms:

#### Vercel (Recommended for Vite)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### AWS S3 + CloudFront
```bash
aws s3 sync dist/ s3://your-bucket-name/
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 4. Configure Domain
- Point your custom domain DNS to the hosting provider
- Enable HTTPS/SSL certificate
- Configure www redirect if needed

### 5. Setup Monitoring
- Configure error logging/tracking
- Setup performance monitoring
- Enable application performance management (APM)
- Setup uptime monitoring

### 6. Verify Deployment
- Test all critical user flows
- Check Core Web Vitals in Lighthouse
- Verify form submissions
- Test email notifications
- Check console for errors

## 📊 Performance Optimization Notes

- **Code Splitting**: The build creates separate chunks for React, animation libraries, and forms for optimal loading
- **Lazy Loading**: All page components use React.lazy() for route-based code splitting
- **CSS Optimization**: Tailwind CSS is purged to include only used styles
- **Asset Compression**: Ensure gzip/brotli compression is enabled on your server

## 🔒 Security Notes

- **CSP Headers**: Configured to prevent XSS attacks
- **HTTPS Only**: All external requests use HTTPS
- **API Credentials**: Stored securely in environment variables
- **CORS**: Configured on backend to accept requests from your domain
- **Rate Limiting**: Should be configured on API endpoints to prevent abuse

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (should be 16+)
- Clear cache: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npx tsc --noEmit`

### Forms Not Working
- Verify EmailJS credentials in .env.production
- Check backend API URL is correct
- Verify CORS headers on backend
- Check browser console for CORS errors
backend API URL is correct in .env.production
- Check backend form processing is implemented
- Run Lighthouse audit: DevTools > Lighthouse
- Check Core Web Vitals
- Monitor network requests in DevTools
- Check image optimization

### 404 on Routes
- Ensure server is configured to serve index.html for all routes (SPA routing)
- Check with hosting provider documentation

## 📚 Additional Resources

- [Vite Production Guide](https://vitejs.dev/guide/build.html)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Web Vitals](https://web.dev/vitals/)
- [Security Headers](https://securityheaders.com/)
- [SEO Best Practices](https://developers.google.com/search/docs)

## 📝 Notes

- All environment variables must be prefixed with `VITE_` to be available in the client
- The logger utility automatically disables console logs in production
- Error Boundary catches React errors and displays a user-friendly message
- The site is fully responsive and mobile-optimized
