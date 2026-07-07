# SAIF ALI - Professional Portfolio Website

A modern, high-performance portfolio website built with Next.js 13, React 18, TypeScript, and Tailwind CSS. This portfolio features dynamic API integration, project filtering, search functionality, and a fully component-based architecture optimized for production deployment.

## 🌟 Features

### Core Functionality
- **Dynamic API Integration**: All data (profile, skills, projects, contact, blog) fetched from Next.js API routes
- **Project Management**: Dynamic project display with images, technologies, and links
- **Advanced Search & Filter**: Search projects by name/description, filter by category and technology
- **Blog Section**: Technical articles with modal-based reading experience
- **Loading States**: Skeleton loaders and loading spinners for better UX
- **Error Handling**: Comprehensive error messages and empty state UI
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence

### Performance Optimizations
- **Image Optimization**: Next.js Image component with AVIF/WebP support
- **Lazy Loading**: Images lazy-loaded with responsive sizes
- **Code Splitting**: Automatic code splitting with Next.js
- **Bundle Optimization**: SWC minification enabled, source maps disabled in production
- **CSS Purging**: Tailwind CSS removes unused styles
- **Package Optimization**: Optimized package imports for better tree-shaking

### Accessibility (WCAG 2.1 AA)
- **Semantic HTML**: Proper heading structure and landmarks
- **ARIA Labels**: Comprehensive ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard support with focus management
- **Skip to Content**: Skip link for keyboard users
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Indicators**: Clear focus styles for interactive elements

### SEO Enhancements
- **Meta Tags**: Comprehensive metadata for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing metadata
- **Structured Data**: Semantic markup for better indexing
- **Favicon**: SVG favicon with PNG fallbacks for all devices
- **Web Manifest**: PWA-ready manifest file

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 13.4.19** - React framework with App Router
- **React 18.2.0** - UI library with hooks
- **TypeScript 5.2.0** - Type-safe JavaScript

### Styling
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **PostCSS 8.4.0** - CSS transformation
- **Autoprefixer 10.4.0** - CSS vendor prefixing

### Development Tools
- **ESLint 8.57.0** - Code linting
- **TypeScript Compiler** - Type checking
- **SWC Compiler** - Fast JavaScript/TypeScript compiler

### Deployment
- **Vercel** - Recommended hosting platform
- **Netlify** - Alternative hosting option

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── api/              # Next.js API routes
│   │   │   ├── profile/      # Profile data endpoint
│   │   │   ├── skills/       # Skills data endpoint
│   │   │   ├── projects/     # Projects data endpoint
│   │   │   ├── contact/      # Contact data endpoint
│   │   │   └── blog/         # Blog articles endpoint
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   ├── page.tsx          # Main page component (client-side)
│   │   └── globals.css       # Global styles with Tailwind directives
│   ├── components/           # Reusable React components
│   │   ├── index.ts          # Component barrel export
│   │   ├── Button.tsx        # Reusable button component
│   │   ├── Footer.tsx        # Footer component with social links
│   │   ├── Navbar.tsx        # Navigation with dark mode toggle
│   │   ├── ProjectCard.tsx   # Project card with image and details
│   │   ├── Modal.tsx         # Project detail modal
│   │   ├── BlogModal.tsx     # Blog article reading modal
│   │   ├── LoadingSpinner.tsx# Loading spinner component
│   │   └── SkeletonLoader.tsx# Skeleton loading states
│   ├── lib/
│   │   └── data.ts           # Mock data for portfolio content
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── public/                   # Static assets
│   ├── hero.png              # Hero section image
│   ├── favicon.svg           # SVG favicon
│   ├── favicon.ico           # Favicon fallback
│   └── site.webmanifest      # PWA manifest
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
├── DEPLOYMENT.md             # Deployment and audit guide
└── README.md                 # This file
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (for cloning)

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saifali/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔌 API Endpoints

The application includes the following API endpoints:

- `GET /api/profile` - Fetch profile information
- `GET /api/skills` - Fetch skills data
- `GET /api/projects` - Fetch projects data
- `GET /api/contact` - Fetch contact information
- `GET /api/blog` - Fetch blog articles

## 🎨 Customization

### Updating Portfolio Data

All data is stored in `src/lib/data.ts`. To update your portfolio:

1. **Profile Information**: Update the `profileData` object
2. **Skills**: Modify the `skillsData` array
3. **Projects**: Update the `projectsData` array
4. **Contact**: Change the `contactData` object
5. **Blog**: Edit the `blogArticlesData` array

### Customizing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        dark: '#1e40af',
        light: '#3b82f6',
      },
    },
  },
}
```

### Modifying Styles

Update `src/app/globals.css` for global styles and animations.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder and `public` folder to Netlify
3. Configure build command: `npm run build`
4. Set publish directory: `.next`

### Other Platforms

Build the project and deploy to any Node.js hosting provider:

```bash
npm run build
npm start
```

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 100

### Optimization Techniques Implemented
- Image optimization with Next.js Image component (AVIF/WebP formats)
- Lazy loading for below-the-fold images with responsive sizes
- Automatic code splitting with Next.js
- SWC minification for JavaScript bundles
- CSS purging with Tailwind (removes unused styles)
- Font optimization with display: swap
- Compression enabled in Next.js config
- Source maps disabled in production for smaller bundles
- Optimized package imports for better tree-shaking

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management in modals
- Screen reader friendly
- WCAG 2.1 AA color contrast
- Skip to content link
- Proper heading hierarchy
- Alt text for all images

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card integration
- Semantic HTML structure
- Proper heading hierarchy
- Mobile-friendly design
- Fast loading times
- XML sitemap (can be added)
- Robots.txt (can be added)

## 🌐 Deployment Link

**Live URL**: [https://portfolio-nextjs-beta-bice.vercel.app](https://portfolio-nextjs-beta-bice.vercel.app)

## 📸 Screenshots

### Home Section
![Home Section](./public/hero.png)

### Projects Section
![Projects Section](./public/hero.png)

### Dark Mode
![Dark Mode](./public/hero.png)

## 🔮 Future Enhancements

- [ ] Connect to real backend database (MongoDB/PostgreSQL)
- [ ] Add authentication for admin panel
- [ ] Implement CMS for content management
- [ ] Add more blog articles
- [ ] Integrate analytics (Google Analytics)
- [ ] Add contact form with email sending (Nodemailer)
- [ ] Implement PWA features
- [ ] Add internationalization (i18n)
- [ ] Add unit and integration tests
- [ ] Implement CI/CD pipeline

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**SAIF ALI**
- **GitHub**: [@saifali](https://github.com/saifali)
- **LinkedIn**: [SAIF ALI](https://www.linkedin.com/in/saif-ali-khan-5908b7395)
- **Email**: khanalisaif0102@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/saifali/portfolio-nextjs/issues).

## 📧 Support

For issues or questions, please:
- Open an issue on GitHub
- Contact via email at khanalisaif0102@gmail.com
- Connect on LinkedIn

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
