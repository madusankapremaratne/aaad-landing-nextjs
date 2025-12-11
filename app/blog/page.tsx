import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog - Android Auto Tips, Guides & News',
  description: 'Learn how to install third-party apps on Android Auto, troubleshooting guides, app reviews, and the latest news about Android Auto customization.',
  keywords: [
    'Android Auto blog',
    'Android Auto guides',
    'Android Auto tips',
    'Android Auto tutorials',
    'AAAD guides',
    'install apps Android Auto',
    'Android Auto customization',
    'CarStream tutorial',
    'Fermata Auto guide',
    'Screen2Auto setup',
  ],
  openGraph: {
    title: 'AAAD Blog - Android Auto Tips, Guides & News',
    description: 'Learn how to install third-party apps on Android Auto with our comprehensive guides and tutorials.',
    url: 'https://aaad.app/blog',
  },
}

// Android Icon component
const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 2.266l1.727-1.727a.75.75 0 00-1.06-1.06l-1.98 1.98A8.969 8.969 0 0012 .5a8.969 8.969 0 00-4.21.959L5.81.479a.75.75 0 00-1.06 1.06l1.727 1.727A8.993 8.993 0 003 10.5v8a3 3 0 003 3h12a3 3 0 003-3v-8a8.993 8.993 0 00-3.477-8.234zM8.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
)

// Sample blog posts for demonstration (these would come from your content folder)
const samplePosts = [
  {
    slug: 'how-to-install-third-party-apps-android-auto',
    title: 'How to Install Third-Party Apps on Android Auto Without Root in 2025',
    excerpt: 'Complete guide to installing third-party apps like CarStream, Fermata Auto, and Screen2Auto on Android Auto using AAAD without rooting your device.',
    date: '2025-01-15',
    category: 'Guides',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'best-android-auto-third-party-apps',
    title: 'Best Third-Party Apps for Android Auto: Complete 2025 Guide',
    excerpt: 'Discover the best third-party apps you can install on Android Auto, including video players, screen mirroring, and performance monitors.',
    date: '2025-01-10',
    category: 'Reviews',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'carstream-setup-guide',
    title: 'CarStream Setup Guide: Watch YouTube on Android Auto',
    excerpt: 'Step-by-step tutorial to install and configure CarStream for watching YouTube videos on your Android Auto display.',
    date: '2025-01-05',
    category: 'Tutorials',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'android-auto-no-root-vs-root-methods',
    title: 'Android Auto Customization: No-Root vs Root Methods Compared',
    excerpt: 'Compare different methods for customizing Android Auto, including AAAD, AA AIO Tweaker, and manual ADB methods.',
    date: '2024-12-28',
    category: 'Guides',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'fix-android-auto-third-party-apps-not-showing',
    title: 'Fix: Android Auto Third-Party Apps Not Showing Up',
    excerpt: 'Troubleshooting guide for common issues when installed apps do not appear in Android Auto, including fixes for OnePlus, Pixel, and Samsung devices.',
    date: '2024-12-20',
    category: 'Troubleshooting',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'fermata-auto-complete-guide',
    title: 'Fermata Auto: Complete Guide to Videos & IPTV on Android Auto',
    excerpt: 'Everything you need to know about Fermata Auto, the open-source media player for Android Auto supporting local videos and IPTV streams.',
    date: '2024-12-15',
    category: 'Tutorials',
    readTime: '9 min read',
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = samplePosts.filter(p => p.featured)
  const regularPosts = samplePosts.filter(p => !p.featured)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3DDC84] to-[#00A36C] flex items-center justify-center">
              <AndroidIcon />
            </div>
            <span className="text-xl font-bold">AAAD</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
            <Link href="/#apps" className="text-gray-400 hover:text-white transition-colors">Apps</Link>
            <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-white font-medium">Blog</Link>
          </div>
          <a
            href="https://github.com/shmykelsa/AAAD/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-3 !px-6"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AAAD <span className="gradient-text-green">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tips, tutorials, and guides for getting the most out of Android Auto with third-party apps.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Guides', 'Tutorials', 'Reviews', 'Troubleshooting', 'News'].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  cat === 'All'
                    ? 'bg-[#3DDC84] text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="card group relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#3DDC84]/20 text-[#3DDC84]">
                      Featured
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-[#3DDC84] font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#3DDC84] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article key={post.slug} className="card group">
                <div className="mb-4">
                  <span className="text-xs text-[#3DDC84] font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#3DDC84] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card !p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3DDC84]/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                Join our Telegram channel for the latest updates, new app releases, and Android Auto tips.
              </p>
              <a
                href="https://t.me/AAADupdates"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Join Telegram Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AAAD by shmykelsa. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <Link href="/" className="hover:text-[#3DDC84] transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-[#3DDC84] transition-colors">Blog</Link>
            <a href="https://github.com/shmykelsa/AAAD" className="hover:text-[#3DDC84] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
