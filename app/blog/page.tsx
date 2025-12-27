import Link from 'next/link'
import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export const revalidate = 60

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
  alternates: {
    canonical: 'https://aaad.app/blog',
  },
}

// Android Icon component
const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 2.266l1.727-1.727a.75.75 0 00-1.06-1.06l-1.98 1.98A8.969 8.969 0 0012 .5a8.969 8.969 0 00-4.21.959L5.81.479a.75.75 0 00-1.06 1.06l1.727 1.727A8.993 8.993 0 003 10.5v8a3 3 0 003 3h12a3 3 0 003-3v-8a8.993 8.993 0 00-3.477-8.234zM8.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
)

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60, tags: ['post'] } })

  const featuredPosts = posts.filter((p: any) => p.featured)
  const regularPosts = posts.filter((p: any) => !p.featured)

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
            <Link href="/install" className="text-gray-400 hover:text-white transition-colors">Install Guide</Link>
            <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-white font-medium">Blog</Link>
          </div>
          <a
            href="/AAAD-2.6.1-aaad.app-Release.apk"
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
              {featuredPosts.map((post: any) => (
                <article key={post.slug.current} className="card group relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#3DDC84]/20 text-[#3DDC84]">
                      Featured
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-[#3DDC84] font-medium uppercase tracking-wider">
                      {post.categories?.[0] || 'Article'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#3DDC84] transition-colors">
                    <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>}
                    {post.publishedAt && <span>•</span>}
                    {/* Placeholder for read time */}
                    <span>5 min read</span>
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
            {regularPosts.map((post: any) => (
              <article key={post.slug.current} className="card group">
                <div className="mb-4">
                  <span className="text-xs text-[#3DDC84] font-medium uppercase tracking-wider">
                     {post.categories?.[0] || 'Article'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#3DDC84] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>}
                  {post.publishedAt && <span>•</span>}
                  <span>5 min read</span>
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
            <a href="https://github.com/shmykelsa/AAAD" rel="nofollow" className="hover:text-[#3DDC84] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
