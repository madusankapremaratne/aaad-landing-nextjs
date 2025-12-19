import Link from 'next/link'

// SVG Icons as components
const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 2.266l1.727-1.727a.75.75 0 00-1.06-1.06l-1.98 1.98A8.969 8.969 0 0012 .5a8.969 8.969 0 00-4.21.959L5.81.479a.75.75 0 00-1.06 1.06l1.727 1.727A8.993 8.993 0 003 10.5v8a3 3 0 003 3h12a3 3 0 003-3v-8a8.993 8.993 0 00-3.477-8.234zM8.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3DDC84]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const NoRootIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const SpeedIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const AppsIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

// Apps data
const featuredApps = [
  { name: 'CarStream', description: 'Watch YouTube videos on Android Auto', icon: '📺', slug: 'carstream' },
  { name: 'Fermata Auto', description: 'Play local videos and IPTV streams', icon: '🎬', slug: 'fermata-auto' },
  { name: 'Screen2Auto', description: 'Mirror your phone screen', icon: '📱', slug: 'screen2auto' },
  { name: 'AA Mirror Plus', description: 'Advanced screen mirroring', icon: '🔄', slug: 'aa-mirror-plus' },
  { name: 'Performance Monitor', description: 'Real-time vehicle diagnostics', icon: '📊', slug: 'performance-monitor' },
  { name: 'AA Passenger', description: 'Additional controls for passengers', icon: '👥', slug: 'aa-passenger' },
]

const features = [
  {
    icon: <NoRootIcon />,
    title: 'No Root Required',
    description: 'Works on any Android phone without rooting. Keep your warranty and security intact.',
  },
  {
    icon: <SpeedIcon />,
    title: 'One-Tap Install',
    description: 'Simple installation process. No PC, no developer options, no technical knowledge needed.',
  },
  {
    icon: <AppsIcon />,
    title: 'Curated Apps',
    description: 'Access carefully selected third-party apps designed specifically for Android Auto.',
  },
]

const faqs = [
  {
    question: 'What is AAAD?',
    answer: 'AAAD (Android Auto Apps Downloader) is an application that allows you to download and install third-party apps for Android Auto without requiring root access on your device.'
  },
  {
    question: 'Do I need to root my phone?',
    answer: 'No! AAAD works on non-rooted devices. This is one of the main advantages of using AAAD - you can enjoy third-party Android Auto apps while keeping your device secure and warranty intact.'
  },
  {
    question: 'Is AAAD free?',
    answer: 'AAAD offers a free version that allows 1 download every 30 days. The Pro version removes this limitation and provides unlimited downloads forever with a one-time purchase.'
  },
  {
    question: 'Where can I download AAAD?',
    answer: 'AAAD is only officially distributed on GitHub. Never download from unofficial sources like aaadapk.com, Uptodown, or Softonic as these are not affiliated with AAAD.'
  },
  {
    question: 'Does AAAD work on Android 14+?',
    answer: 'Android 14+ compatibility can be uncertain with some versions. Consider using an AAWireless USB Dongle for the most reliable experience on newer Android versions.'
  },
]

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Glows */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

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
            <Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
            <Link href="#apps" className="text-gray-400 hover:text-white transition-colors">Apps</Link>
            <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          </div>
          <a
            href="/AAAD-2.6.1-aaad.app-Release.apk"
            className="btn-primary flex items-center gap-2 !py-3 !px-6"
          >
            <DownloadIcon />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3DDC84]/10 border border-[#3DDC84]/20 mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
                <span className="text-sm text-[#3DDC84]">Version 2.6.1 • Active since 2021</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                Install <span className="gradient-text">Third-Party Apps</span> on Android Auto
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-xl animate-slide-up delay-100">
                The original app for downloading and installing apps made specifically for Android Auto. 
                <strong className="text-white"> No root required.</strong> No PC needed. No developer options.
              </p>

              <div className="flex flex-wrap gap-4 mb-8 animate-slide-up delay-200">
                <a
                  href="/AAAD-2.6.1-aaad.app-Release.apk"
                  className="btn-primary flex items-center gap-3"
                >
                  <DownloadIcon />
                  Download AAAD
                </a>
                <a
                  href="https://github.com/shmykelsa/AAAD"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-secondary flex items-center gap-3"
                >
                  <GitHubIcon />
                  View on GitHub
                </a>
              </div>

              <div className="mb-8 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 font-mono break-all animate-slide-up delay-200">
                <span className="text-[#3DDC84] font-bold block mb-1">SHA-256 Checksum:</span>
                b08888f75b2b1289ab2e9cbd363749ca51bd67230c59dbaf74d72fedc8e89e32
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500 animate-slide-up delay-300">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <span>2.2k+ Stars</span>
                </div>
                <div className="w-px h-4 bg-gray-700" />
                <span>236 Forks</span>
                <div className="w-px h-4 bg-gray-700" />
                <span>MIT License</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative lg:justify-self-end animate-fade-in delay-300">
              <div className="phone-mockup">
                <div className="phone-mockup-inner w-[300px] h-[600px] p-4">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 px-2">
                    <span className="text-xs text-gray-500">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-[#3DDC84] rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#3DDC84] to-[#00A36C] flex items-center justify-center">
                      <AndroidIcon />
                    </div>
                    <h3 className="font-bold text-lg">AAAD</h3>
                    <p className="text-xs text-gray-500">Android Auto Apps Downloader</p>
                  </div>

                  {/* App list */}
                  <div className="space-y-3">
                    {featuredApps.slice(0, 4).map((app, i) => (
                      <div
                        key={app.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="text-2xl">{app.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{app.name}</p>
                          <p className="text-xs text-gray-500 truncate">{app.description}</p>
                        </div>
                        <button className="px-3 py-1 text-xs rounded-lg bg-[#3DDC84] text-black font-medium">
                          Install
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#3DDC84]/20 border border-[#3DDC84]/30 backdrop-blur animate-float">
                <span className="text-sm font-medium text-[#3DDC84]">No Root!</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 backdrop-blur animate-float delay-300">
                <span className="text-sm font-medium text-blue-400">Free Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Why Choose <span className="gradient-text-green">AAAD</span>?
            </h2>
            <p className="section-subtitle">
              The simplest way to unlock the full potential of Android Auto with third-party applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <article key={feature.title} className="card group">
                <div className="feature-icon text-[#3DDC84] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </article>
            ))}
          </div>

          {/* Benefits list */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Works on any Android phone (6.0+)',
              'No technical knowledge required',
              'Regular updates and new apps',
              'Active community support',
              'One-time Pro purchase (no subscription)',
              'Official downloads from GitHub only',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#3DDC84]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Available <span className="gradient-text-green">Apps</span>
            </h2>
            <p className="section-subtitle">
              Download and install these popular Android Auto apps with just one tap.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app) => {
              const CardContent = () => (
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#3DDC84] transition-colors">{app.name}</h3>
                    <p className="text-sm text-gray-400">{app.description}</p>
                  </div>
                </div>
              )

              if (app.slug) {
                return (
                  <Link key={app.name} href={`/apps/${app.slug}`} className="card group cursor-pointer hover:border-[#3DDC84]/50 transition-colors">
                    <CardContent />
                  </Link>
                )
              }

              return (
                <article key={app.name} className="card group cursor-pointer">
                  <CardContent />
                </article>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">And many more apps available in AAAD!</p>
            <a
              href="/AAAD-2.6.1-aaad.app-Release.apk"
              className="btn-primary inline-flex items-center gap-2"
            >
              <DownloadIcon />
              Download AAAD to Explore
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              How It <span className="gradient-text-green">Works</span>
            </h2>
            <p className="section-subtitle">
              Get started with AAAD in just three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Download AAAD', desc: 'Get the latest version from our official GitHub releases page.' },
              { step: '02', title: 'Choose an App', desc: 'Browse the list of available Android Auto apps and select one.' },
              { step: '03', title: 'Install & Enjoy', desc: 'Tap install and start using the app on your Android Auto!' },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="text-7xl font-bold text-[#3DDC84]/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 text-[#3DDC84]/30">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text-green">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group">
                <summary className="cursor-pointer font-bold text-lg flex items-center justify-between">
                  {faq.question}
                  <span className="text-[#3DDC84] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card !p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3DDC84]/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Unlock <span className="gradient-text-green">Android Auto</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of users enjoying third-party apps on Android Auto. Download AAAD now and transform your driving experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/AAAD-2.6.1-aaad.app-Release.apk"
                  className="btn-primary flex items-center gap-2"
                >
                  <DownloadIcon />
                  Download from Server
                </a>
                <a
                  href="https://t.me/AAADupdates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <TelegramIcon />
                  Join Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3DDC84] to-[#00A36C] flex items-center justify-center">
                  <AndroidIcon />
                </div>
                <span className="text-xl font-bold">AAAD</span>
              </Link>
              <p className="text-gray-500 text-sm">
                The original application for downloading and installing apps for Android Auto.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/AAAD-2.6.1-aaad.app-Release.apk" className="hover:text-[#3DDC84] transition-colors">Download</a></li>
                <li><a href="https://github.com/shmykelsa/AAAD" rel="nofollow" className="hover:text-[#3DDC84] transition-colors">GitHub</a></li>
                <li><a href="https://github.com/shmykelsa/AAAD/wiki" className="hover:text-[#3DDC84] transition-colors">Wiki</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://t.me/AAADupdates" className="hover:text-[#3DDC84] transition-colors">Telegram</a></li>
                <li><a href="https://github.com/shmykelsa/AAAD/issues" className="hover:text-[#3DDC84] transition-colors">Report Issues</a></li>
                <li><a href="https://crowdin.com/project/aaad" className="hover:text-[#3DDC84] transition-colors">Translations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-[#3DDC84] transition-colors">Blog</Link></li>
                <li><a href="#faq" className="hover:text-[#3DDC84] transition-colors">FAQ</a></li>
                <li><a href="mailto:help.aaad@gmail.com" className="hover:text-[#3DDC84] transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AAAD by shmykelsa. All rights reserved.
            </p>
            <div className="text-right">
              <p className="text-gray-600 text-xs mb-1">
                Android Auto is a trademark of Google LLC. AAAD is not affiliated with Google.
              </p>
              <p className="text-gray-600 text-xs">
                aaad.app is not affiliated with any official or unofficial repositories. Just made by community for the community.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
