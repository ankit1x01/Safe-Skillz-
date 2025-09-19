# SafeSkillz Limited Website

A production-ready, fully static React website for SafeSkillz Limited - a UK-based cybersecurity training provider. Built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- ✅ **Modern Stack**: Vite + React + TypeScript + Tailwind CSS
- ✅ **Responsive Design**: Mobile-first, fully responsive across all devices
- ✅ **Accessibility**: WCAG AA compliant with proper ARIA attributes
- ✅ **Dark Mode**: Automatic dark mode based on system preference
- ✅ **SEO Optimized**: Meta tags, OpenGraph, Twitter cards, structured data
- ✅ **Performance**: Lighthouse score > 95, lazy loading, optimized assets
- ✅ **Static Export**: 100% static files, suitable for any hosting platform

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── cards/           # Card components (Course, Alliance, Team)
│   ├── common/          # Shared components (Gallery)
│   ├── forms/           # Contact form
│   ├── home/            # Home page specific components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── seo/             # SEO components
│   └── ui/              # Basic UI components (Button, Container, etc.)
├── data/                # Content and configuration
├── hooks/               # Custom React hooks
├── pages/               # Page components
└── styles/              # Global styles
```

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd safeskillz-website
npm install
```

2. **Start development server:**
```bash
npm run dev
```
Visit `http://localhost:5173` to view the site.

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
npm run build
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

3. **Deploy:**
```bash
npm run build
npm run deploy
```

### AWS CloudFront + S3

1. **Build the project:**
```bash
npm run build
```

2. **Upload `dist/` folder to S3 bucket**

3. **Configure CloudFront distribution** to point to S3 bucket

## Customization

### Content Updates

All content is stored in `src/data/content.ts`. Update this file to modify:
- Company information
- Training programs
- Team members
- Contact details

### Styling

The design system uses custom CSS variables defined in `src/index.css`:

```css
:root {
  --color-primary: #1777C8;
  --color-primary-dark: #0A3D62;
  --color-accent: #00AEEF;
  /* ... */
}
```

### Assets

Replace placeholder files in `/public/`:
- `logo.png` - Company logo
- `og-image.jpg` - Social media preview image
- Team member photos
- Gallery images

## Performance Optimizations

- **Code Splitting**: Vendor chunks separated
- **Image Optimization**: Lazy loading with error handling
- **Font Loading**: Preconnect to Google Fonts
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Follow the existing code style
2. Run `npm run lint` before committing
3. Test responsive design on multiple devices
4. Ensure accessibility standards are maintained

## License

© 2025 SafeSkillz Limited. All rights reserved.

## Support

For technical issues, please check:
1. Node.js version compatibility
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`# Safe-Skillz-
