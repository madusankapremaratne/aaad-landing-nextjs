import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static exports for better SEO
  output: 'export',

  // Optimize images
  images: {
    unoptimized: true,
  },

  // Fix for jsdom/isomorphic-dompurify in Sanity Studio
  serverExternalPackages: ['jsdom', 'isomorphic-dompurify'],

  // Trailing slashes for consistent URLs
  trailingSlash: true,

  // Generate sitemap
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig
