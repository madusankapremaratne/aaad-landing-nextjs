import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { appsData } from '@/lib/apps-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const app = appsData[slug]
  
  if (!app) {
    return { title: 'App Not Found' }
  }

  return {
    title: app.metaTitle,
    description: app.metaDescription,
    keywords: app.keywords,
    openGraph: {
      type: 'article',
      title: app.title,
      description: app.excerpt,
      url: `https://aaad.app/apps/${slug}`,
      modifiedTime: app.lastUpdated,
      tags: app.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: app.metaTitle,
      description: app.metaDescription,
    },
    alternates: {
      canonical: `https://aaad.app/apps/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(appsData).map((slug) => ({ slug }))
}

const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 2.266l1.727-1.727a.75.75 0 00-1.06-1.06l-1.98 1.98A8.969 8.969 0 0012 .5a8.969 8.969 0 00-4.21.959L5.81.479a.75.75 0 00-1.06 1.06l1.727 1.727A8.993 8.993 0 003 10.5v8a3 3 0 003 3h12a3 3 0 003-3v-8a8.993 8.993 0 00-3.477-8.234zM8.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3DDC84]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const CrossIcon = () => (
  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default async function AppParams({ params }: Props) {
  const { slug } = await params
  const app = appsData[slug]

  if (!app) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#3DDC84] selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3DDC84] to-[#00A36C] flex items-center justify-center text-black">
              <AndroidIcon />
            </div>
            <span className="text-xl font-bold">AAAD</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
            <Link href="/#apps" className="text-gray-400 hover:text-white transition-colors">Apps</Link>
            <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          </div>
          <a href="https://github.com/shmykelsa/AAAD/releases" target="_blank" rel="noopener noreferrer" className="btn-primary !py-3 !px-6">
            Download
          </a>
        </div>
      </nav>

      <article className="pt-32 pb-24 px-6 md:px-0">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 px-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#3DDC84]">Home</Link></li>
              <li>/</li>
              <li><span className="text-gray-400">Apps</span></li>
              <li>/</li>
              <li className="text-[#3DDC84]">{app.title}</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <header className="mb-12 text-center md:text-left md:px-4">
            <div className="inline-block mb-4 px-3 py-1 bg-[#3DDC84]/10 rounded-full border border-[#3DDC84]/20">
              <span className="text-sm text-[#3DDC84] font-medium uppercase tracking-wider">{app.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {app.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              {app.excerpt}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <a href="https://github.com/shmykelsa/AAAD/releases" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download via AAAD
               </a>
               <Link href="#installation" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-medium">
                 Installation Guide
               </Link>
            </div>
          </header>

          <div className="space-y-16 px-4">
            {/* What is it */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">What is {app.title}?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {app.whatItIs}
                </p>
              </div>
            </section>

            {/* Features Grid */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {app.features.map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3DDC84]/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84]">
                        <CheckIcon />
                      </div>
                      <p className="font-medium text-lg">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capabilities */}
            <section className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84]"><CheckIcon /></span>
                  What it Can Do
                </h3>
                <ul className="space-y-4">
                  {app.whatItCanDo.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3DDC84] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-red-500/10 text-red-500"><CrossIcon /></span>
                  Limitations
                </h3>
                <ul className="space-y-4">
                  {app.whatItCannotDo.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

             {/* Supported Versions */}
             <section className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Compatibility & Supported Versions</h2>
              <p className="text-gray-300 leading-relaxed fa-lg">
                {app.supportedVersions}
              </p>
             </section>

             {/* Installation Guide */}
             <section id="installation" className="scroll-mt-24">
               <h2 className="text-3xl font-bold mb-8">How to Install {app.title}</h2>
               <div className="space-y-8">
                 {app.installationSteps.map((step, idx) => (
                   <div key={idx} className="flex gap-6 relative">
                     {idx !== app.installationSteps.length - 1 && (
                       <div className="absolute left-[22px] top-12 bottom-0 w-0.5 bg-white/10" />
                     )}
                     <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#3DDC84]/10 border border-[#3DDC84]/30 flex items-center justify-center text-[#3DDC84] font-bold text-lg">
                       {idx + 1}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                       <p className="text-gray-400 leading-relaxed">{step.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </section>

             {/* FAQ */}
             <section id="faq">
               <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
               <div className="grid gap-6">
                 {app.faq.map((item, idx) => (
                   <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                     <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                     <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                   </div>
                 ))}
               </div>
             </section>

             {/* Bottom CTA */}
             <div className="mt-16 text-center py-16 px-4 bg-gradient-to-b from-transparent to-[#3DDC84]/5 rounded-3xl border border-white/5">
                <h2 className="text-3xl font-bold mb-4">Enhance Your Android Auto Experience</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get access to {app.title} and many other exclusive apps by downloading AAAD today.</p>
                <a href="https://github.com/shmykelsa/AAAD/releases" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                  <AndroidIcon />
                  Download Free
                </a>
             </div>
          </div>
        </div>
      </article>

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: app.faq.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          })
        }}
      />
      
      {/* JSON-LD for Software Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: app.title,
            operatingSystem: 'Android',
            applicationCategory: app.category,
            description: app.metaDescription,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            }
          })
        }}
      />

      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AAAD. Not affiliated with Google or Android Auto.</p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <Link href="/" className="hover:text-[#3DDC84] transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-[#3DDC84] transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-[#3DDC84] transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
