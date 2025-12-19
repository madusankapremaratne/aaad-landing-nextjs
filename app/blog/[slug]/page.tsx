import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { PortableTextComponents } from '@/components/PortableTextComponents'

export const revalidate = 60

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug }, { next: { revalidate: 60 } })
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://aaad.app/blog/${slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://aaad.app/blog/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(POSTS_QUERY)
    return posts.map((post: any) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 2.266l1.727-1.727a.75.75 0 00-1.06-1.06l-1.98 1.98A8.969 8.969 0 0012 .5a8.969 8.969 0 00-4.21.959L5.81.479a.75.75 0 00-1.06 1.06l1.727 1.727A8.993 8.993 0 003 10.5v8a3 3 0 003 3h12a3 3 0 003-3v-8a8.993 8.993 0 00-3.477-8.234zM8.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
)

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug }, { next: { revalidate: 60 } })

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
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
          <a href="/AAAD-2.6.1-aaad.app-Release.apk" className="btn-primary !py-3 !px-6">
            Download
          </a>
        </div>
      </nav>

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#3DDC84]">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-[#3DDC84]">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-400 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          <header className="mb-12">
            <div className="mb-4">
               {post.categories && post.categories.length > 0 && (
                <span className="text-sm text-[#3DDC84] font-medium uppercase tracking-wider">{post.categories[0]}</span>
               )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>{post.author}</span>
              {post.publishedAt && (
                <>
                <span>•</span>
                <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </>
              )}
            </div>
          </header>

          <div className="prose">
            <PortableText value={post.body} components={PortableTextComponents} />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-sm font-medium text-gray-500 mb-4">Related Topics</h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords && post.keywords.slice(0, 6).map((keyword: string) => (
                <span key={keyword} className="px-3 py-1 rounded-lg text-sm bg-white/5 text-gray-400">{keyword}</span>
              ))}
            </div>
          </div>

          <div className="mt-12 card !p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3DDC84]/10 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Try AAAD?</h3>
              <p className="text-gray-400 mb-6">Download AAAD and start installing third-party apps on Android Auto today.</p>
              <a href="/AAAD-2.6.1-aaad.app-Release.apk" className="btn-primary inline-block">Download AAAD</a>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: { '@type': 'Person', name: post.author },
            publisher: { '@type': 'Organization', name: 'AAAD', url: 'https://aaad.app' }
          })
        }}
      />

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AAAD by shmykelsa. All rights reserved.</p>
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
