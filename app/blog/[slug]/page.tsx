import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// This would typically come from your CMS or markdown files
const blogPosts: Record<string, {
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  author: string
  content: string
  keywords: string[]
}> = {
  'how-to-install-third-party-apps-android-auto': {
    title: 'How to Install Third-Party Apps on Android Auto Without Root in 2025',
    excerpt: 'Complete guide to installing third-party apps like CarStream, Fermata Auto, and Screen2Auto on Android Auto using AAAD without rooting your device.',
    date: '2025-01-15',
    category: 'Guides',
    readTime: '8 min read',
    author: 'AAAD Team',
    keywords: [
      'install third party apps android auto',
      'android auto apps without root',
      'AAAD tutorial',
      'android auto sideload apps',
      'carstream android auto',
      'fermata auto install',
      'screen2auto setup',
      'android auto custom apps',
    ],
    content: `
## Introduction

Android Auto is an excellent platform for safely using your phone while driving, but Google restricts which apps can appear on your car's display. If you've ever wanted to watch YouTube videos, mirror your screen, or use apps that aren't available on the Play Store, you'll need a way to install third-party apps.

**AAAD (Android Auto Apps Downloader)** is the original and most reliable solution for installing third-party apps on Android Auto without requiring root access. In this comprehensive guide, we'll walk you through everything you need to know.

## What is AAAD?

AAAD is an Android application that allows you to download and install apps specifically designed for Android Auto. Unlike other methods that require root access, a PC with ADB tools, developer options, or technical knowledge, AAAD simplifies the entire process into a few taps on your phone.

## Prerequisites

Before you begin, make sure you have an Android phone running Android 6.0 or higher, Android Auto installed and set up, a stable internet connection, and sufficient storage space.

## Step-by-Step Installation Guide

### Step 1: Download AAAD

**Important:** Only download AAAD from the official GitHub repository. Sites like aaadapk.com, Uptodown, or Softonic are NOT affiliated with AAAD.

Visit [github.com/shmykelsa/AAAD/releases](https://github.com/shmykelsa/AAAD/releases), download the latest APK file, and allow installation from unknown sources if prompted.

### Step 2: Install AAAD

Open the downloaded APK file. Your phone may show a security warning - this is normal for apps outside the Play Store. Tap "Install" to proceed and wait for the installation to complete.

### Step 3: Choose Your Apps

Open AAAD and you'll see a list of available apps including CarStream for YouTube videos, Fermata Auto for local videos and IPTV, Screen2Auto for screen mirroring, AA Mirror Plus for advanced mirroring, and Performance Monitor for vehicle diagnostics.

### Step 4: Install Apps

Tap on the app you want to install. AAAD will download the app from its official source. Follow the Android installation prompts, and the app will appear in Android Auto automatically.

## Troubleshooting Common Issues

### Apps Not Showing in Android Auto

If installed apps don't appear, try force stopping Android Auto and reopening it, clearing Android Auto cache, or restarting your phone. For OnePlus, Realme, and Oppo devices, there's a special fix available in the AAAD wiki.

### Google Play Protect Warning

Google Play Protect may flag AAAD or installed apps. This is expected because Google doesn't want apps bypassing their restrictions. It's NOT because AAAD contains malware. You can safely proceed by tapping "Install anyway."

## Free vs Pro Version

The free version allows 1 download every 30 days with access to all available apps. The Pro version offers unlimited downloads with a one-time purchase and no subscription required.

## Conclusion

AAAD makes it incredibly easy to enhance your Android Auto experience with third-party apps. Whether you want to watch videos while parked, mirror your screen, or monitor your vehicle's performance, AAAD has you covered.

---

**Ready to get started?** [Download AAAD from GitHub](https://github.com/shmykelsa/AAAD/releases)
    `
  },
  'best-android-auto-third-party-apps': {
    title: 'Best Third-Party Apps for Android Auto: Complete 2025 Guide',
    excerpt: 'Discover the best third-party apps you can install on Android Auto, including video players, screen mirroring, and performance monitors.',
    date: '2025-01-10',
    category: 'Reviews',
    readTime: '12 min read',
    author: 'AAAD Team',
    keywords: [
      'best android auto apps',
      'android auto third party apps',
      'carstream review',
      'fermata auto review',
      'screen2auto review',
      'aa mirror plus',
      'android auto video apps',
      'android auto screen mirror',
    ],
    content: `
## Introduction

While Google limits what apps can appear on Android Auto, the community has developed amazing third-party applications that enhance your in-car experience. In this guide, we'll review the best apps available through AAAD.

## Video Players

### CarStream

CarStream is the most popular app for watching YouTube on Android Auto. Features include a built-in YouTube browser, video playback controls, bookmarks support, and adjustable quality settings.

### Fermata Auto

An open-source media player supporting local video files, IPTV streams, audio playback, and includes a file browser for easy navigation.

## Screen Mirroring

### Screen2Auto

Mirror your phone's screen to Android Auto with simple setup, touch support, and landscape mode.

### AA Mirror Plus

Advanced features including better performance, multiple resolution options, and audio routing capabilities.

## Utility Apps

### Performance Monitor

Connect to your OBD-II adapter to view engine metrics, battery status, and real-time vehicle data.

### AA Passenger

Additional controls for passengers without needing to touch the driver's phone.

## How to Install These Apps

All apps mentioned above can be installed using AAAD. Simply download AAAD from GitHub, open AAAD and select your desired app, tap install and follow the prompts, then launch Android Auto to use your new apps.

[Download AAAD](https://github.com/shmykelsa/AAAD/releases)
    `
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
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
      publishedTime: post.date,
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
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 2.266l1.727-1.727a.75.75 0 00-1.06-1.06l-1.98 1.98A8.969 8.969 0 0012 .5a8.969 8.969 0 00-4.21.959L5.81.479a.75.75 0 00-1.06 1.06l1.727 1.727A8.993 8.993 0 003 10.5v8a3 3 0 003 3h12a3 3 0 003-3v-8a8.993 8.993 0 00-3.477-8.234zM8.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
)

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.JSX.Element[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    
    if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-3xl font-bold text-white mb-4 mt-10">{trimmed.slice(3)}</h2>)
    } else if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-2xl font-semibold text-white mb-3 mt-8">{trimmed.slice(4)}</h3>)
    } else if (trimmed.startsWith('---')) {
      elements.push(<hr key={key++} className="border-white/10 my-8" />)
    } else if (trimmed) {
      let text = trimmed
      text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
      text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#3DDC84] hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
      text = text.replace(/`(.+?)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-sm text-[#3DDC84]">$1</code>')
      
      elements.push(<p key={key++} className="text-gray-300 mb-4 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />)
    }
  }

  return elements
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug]

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
              <span className="text-sm text-[#3DDC84] font-medium uppercase tracking-wider">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose">{renderContent(post.content)}</div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-sm font-medium text-gray-500 mb-4">Related Topics</h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords.slice(0, 6).map((keyword) => (
                <span key={keyword} className="px-3 py-1 rounded-lg text-sm bg-white/5 text-gray-400">{keyword}</span>
              ))}
            </div>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
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
            <a href="https://github.com/shmykelsa/AAAD" className="hover:text-[#3DDC84] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
