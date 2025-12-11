# AAAD Landing Page & Blog

SEO-optimized landing page and blog system for AAAD (Android Auto Apps Downloader).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
aaad-landing/
├── app/
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── blog/
│       ├── page.tsx        # Blog listing page
│       └── [slug]/
│           └── page.tsx    # Individual blog post page
├── content/
│   └── blog/
│       ├── _template-how-to.md        # How-to guide template
│       ├── _template-app-review.md    # App review template
│       ├── _template-troubleshooting.md # Troubleshooting template
│       └── _template-comparison.md    # Comparison article template
├── lib/
│   └── blog.ts             # Blog utility functions
├── public/
│   ├── robots.txt          # Search engine directives
│   ├── sitemap.xml         # Sitemap for SEO
│   └── manifest.json       # PWA manifest
├── SEO-STRATEGY.md         # Keyword research & content ideas
└── README.md               # This file
```

## ✍️ Writing Blog Posts

### Using Templates

1. Copy the appropriate template from `content/blog/`
2. Rename it (remove the underscore prefix)
3. Fill in the frontmatter and content
4. The post will automatically appear on the blog

### Frontmatter Structure

```yaml
---
title: "Your SEO-Optimized Title"
excerpt: "A compelling description for search results (150-160 chars)"
date: "2025-01-15"
category: "Guides"  # Guides, Reviews, Tutorials, Troubleshooting, News
readTime: "8 min read"
author: "AAAD Team"
featured: false     # Set to true for featured posts
keywords:
  - "primary keyword"
  - "secondary keyword"
  - "related term"
---
```

### Available Templates

| Template | Use For |
|----------|---------|
| `_template-how-to.md` | Step-by-step installation/setup guides |
| `_template-app-review.md` | In-depth app reviews |
| `_template-troubleshooting.md` | Problem-solving guides |
| `_template-comparison.md` | A vs B comparison articles |

## 🔍 SEO Features

### Built-in Optimizations

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Cards
- ✅ Schema.org structured data (SoftwareApplication, Article)
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Mobile-responsive design
- ✅ Fast loading (static export)

### Target Keywords

See `SEO-STRATEGY.md` for complete keyword research including:
- Primary brand keywords
- Feature keywords
- Long-tail content ideas
- Content calendar suggestions

## 🎨 Design System

### Colors

- Primary Green: `#3DDC84` (Android green)
- Dark Background: `#050505`
- Text: White with gray variations

### Typography

- Display Font: Space Grotesk
- Code Font: JetBrains Mono

### Components

- `.btn-primary` - Green gradient button
- `.btn-secondary` - Outlined button
- `.card` - Glass-morphism card
- `.gradient-text-green` - Gradient text effect

## 🚀 Deployment

### Static Export (Recommended)

The site is configured for static export, perfect for:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

```bash
npm run build
# Output in 'out' directory
```

### Environment Variables

Create `.env.local` for custom configuration:

```env
NEXT_PUBLIC_SITE_URL=https://aaad.app
```

## 📊 Analytics Setup

Add your tracking codes in `app/layout.tsx`:

1. Google Analytics
2. Google Search Console verification
3. Any other analytics tools

## 🔄 Updating Content

### Adding New Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with SEO metadata
3. Write content in Markdown
4. Rebuild the site

### Updating Sitemap

When adding new pages, update `public/sitemap.xml` with:
- New page URLs
- Last modification dates
- Priority and change frequency

## 📝 License

This landing page is for AAAD (Android Auto Apps Downloader).
See the main AAAD repository for licensing information.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Official AAAD Repository:** [github.com/shmykelsa/AAAD](https://github.com/shmykelsa/AAAD)
