import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { PAGE_QUERY, PAGES_QUERY } from '@/sanity/lib/queries'
import { PortableTextComponents } from '@/components/PortableTextComponents'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const pages = await client.fetch(PAGES_QUERY)
    if (!pages || pages.length === 0) {
      console.warn('No pages found in Sanity. Generating fallback page to satisfy build.')
      return [{ slug: 'about' }]
    }
    return pages.map((page: any) => ({
      slug: page.slug.current,
    }))
  } catch (error) {
    console.error('Error fetching pages:', error)
    return [{ slug: 'about' }]
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const page = await client.fetch(PAGE_QUERY, { slug })
    
    if (!page) {
      return { title: 'Page Not Found' }
    }

    return {
      title: page.title,
      description: page.excerpt,
      keywords: page.keywords,
      openGraph: {
        type: 'website',
        title: page.title,
        description: page.excerpt,
        url: `https://aaad.app/${slug}`,
      },
      alternates: {
        canonical: `https://aaad.app/${slug}`,
      },
    }
  } catch (error) {
    return { title: 'Error' }
  }
}

const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 2.266l1.727-1.727a.75.75 0 00-1.06-1.06l-1.98 1.98A8.969 8.969 0 0012 .5a8.969 8.969 0 00-4.21.959L5.81.479a.75.75 0 00-1.06 1.06l1.727 1.727A8.993 8.993 0 003 10.5v8a3 3 0 003 3h12a3 3 0 003-3v-8a8.993 8.993 0 00-3.477-8.234zM8.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
)

export default async function GenericPage({ params }: Props) {
  const { slug } = await params
  let page = null
  
  try {
    page = await client.fetch(PAGE_QUERY, { slug })
  } catch (e) {
    console.error('Error fetching page content:', e)
  }

  if (!page) {
    // If it's the fallback page and data is missing, show 404 but don't crash build if possible?
    // standard notFound() is nice.
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
            <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-white font-medium">Blog</Link>
          </div>
          <a href="https://github.com/shmykelsa/AAAD/releases" target="_blank" rel="noopener noreferrer" className="btn-primary !py-3 !px-6">
            Download
          </a>
        </div>
      </nav>

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{page.title}</h1>
            {page.excerpt && <p className="text-xl text-gray-400 mb-6">{page.excerpt}</p>}
          </header>

          <div className="prose">
            <PortableText value={page.body} components={PortableTextComponents} />
          </div>

          <div className="mt-12 card !p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3DDC84]/10 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Try AAAD?</h3>
              <p className="text-gray-400 mb-6">Download AAAD and start installing third-party apps on Android Auto today.</p>
              <a href="https://github.com/shmykelsa/AAAD/releases" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Download AAAD</a>
            </div>
          </div>
        </div>
      </article>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AAAD by shmykelsa. All rights reserved.</p>
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
