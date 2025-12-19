import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Install AAAD - Step-by-Step Guide',
  description: 'Complete guide on how to install AAAD (Android Auto Apps Downloader) on your Android device. Learn how to enable unknown sources and troubleshoot installation issues.',
  keywords: [
    'install AAAD',
    'how to install AAAD',
    'AAAD installation guide',
    'Android Auto unknown sources',
    'AAAD setup tutorial',
    'install third-party apps Android Auto',
  ],
  openGraph: {
    title: 'How to Install AAAD - Step-by-Step Guide',
    description: 'Master the installation of AAAD on your Android device with our easy-to-follow guide.',
    url: 'https://aaad.app/install',
    images: [
      {
        url: '/images/install-guide/app-home.png', // Using one of the generated images as OG image
        width: 1200,
        height: 630,
        alt: 'AAAD Installation Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://aaad.app/install',
  },
}

// Reusing icons from main page for consistency
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

const WarningIcon = () => (
    <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
)

const CheckIcon = () => (
    <svg className="w-6 h-6 text-[#3DDC84]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )

export default function InstallGuide() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#3DDC84] selection:text-black">
      {/* Navigation */}
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
            <Link href="/install" className="text-white font-medium">Install Guide</Link>
            <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          </div>
          <a href="/AAAD-2.6.1-aaad.app-Release.apk" className="btn-primary !py-3 !px-6 flex items-center gap-2">
            <DownloadIcon />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </nav>

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
             {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                    <li><Link href="/" className="hover:text-[#3DDC84]">Home</Link></li>
                    <li>/</li>
                    <li className="text-[#3DDC84]">Installation Guide</li>
                </ol>
            </nav>

          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How to Install <span className="gradient-text-green">AAAD</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Follow this step-by-step guide to download and install AAAD on your Android device safely and securely.
            </p>
          </header>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#3DDC84]/10 bg-[#1a1a1a]">
                  <img 
                    src="/images/install-guide/download-warning.png" 
                    alt="Android system warning popup when downloading APK"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3DDC84]/10 border border-[#3DDC84]/30 flex items-center justify-center text-[#3DDC84] font-bold text-xl">1</span>
                  <h2 className="text-2xl font-bold">Download the APK</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Click the download button below to get the official AAAD APK file. Your browser may show a warning saying "File might be harmful". This is a standard Android warning for any app downloaded outside the Play Store.
                </p>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6 flex gap-3">
                    <WarningIcon />
                    <p className="text-sm text-yellow-200">
                        Rest assured, AAAD is safe. This generic warning appears for all APK downloads. Tap <strong>Download anyway</strong> to proceed.
                    </p>
                </div>
                <a href="/AAAD-2.6.1-aaad.app-Release.apk" className="btn-primary inline-flex items-center gap-2">
                    <DownloadIcon />
                    Download AAAD APK
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3DDC84]/10 border border-[#3DDC84]/30 flex items-center justify-center text-[#3DDC84] font-bold text-xl">2</span>
                  <h2 className="text-2xl font-bold">Enable "Unknown Sources"</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  When you open the downloaded file, Android will prompt you to allow installation from your browser (e.g., Chrome). You need to enable this permission to install apps from sources other than the Play Store.
                </p>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex gap-3">
                        <span className="text-[#3DDC84] font-bold">1.</span>
                        Tap "Settings" on the popup prompt.
                    </li>
                    <li className="flex gap-3">
                        <span className="text-[#3DDC84] font-bold">2.</span>
                        Find "Allow from this source" or "Install unknown apps".
                    </li>
                    <li className="flex gap-3">
                        <span className="text-[#3DDC84] font-bold">3.</span>
                        Toggle the switch to <strong>ON</strong>.
                    </li>
                </ul>
              </div>
              <div className="order-2">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#3DDC84]/10 bg-[#1a1a1a]">
                   <img 
                    src="/images/install-guide/unknown-sources.png" 
                    alt="Toggle switch to allow installation from unknown sources"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#3DDC84]/10 bg-[#1a1a1a]">
                   <img 
                    src="/images/install-guide/install-prompt.png" 
                    alt="Android system installation prompt for AAAD"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3DDC84]/10 border border-[#3DDC84]/30 flex items-center justify-center text-[#3DDC84] font-bold text-xl">3</span>
                  <h2 className="text-2xl font-bold">Install the App</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Once you've granted the permission, go back and you'll see the installation prompt. Tap <strong>Install</strong> to confirm.
                </p>
                <p className="text-gray-400">
                    The installation process is quick and should take only a few seconds. Once finished, you'll see a confirmation message.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3DDC84]/10 border border-[#3DDC84]/30 flex items-center justify-center text-[#3DDC84] font-bold text-xl">4</span>
                  <h2 className="text-2xl font-bold">Launch & Download Apps</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Open AAAD from your app drawer. You will see a list of available apps like CarStream, Fermata Auto, and Screen2Auto.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Simply tap on any app you want to use, select the latest version, and AAAD will handle the download and installation for you.
                </p>
              </div>
              <div className="order-2">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#3DDC84]/10 bg-[#1a1a1a]">
                   <img 
                    src="/images/install-guide/app-home.png" 
                    alt="AAAD home screen showing list of apps"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-center">Troubleshooting</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <span className="text-red-400 font-mono">!</span> App Not Installed
                    </h3>
                    <p className="text-gray-400 text-sm">
                        If you see this error, ensure you don't have an older version of AAAD installed. Uninstall any previous versions and try again. Also check if you have enough storage space.
                    </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                         <span className="text-red-400 font-mono">!</span> Android Auto Developer Mode
                    </h3>
                    <p className="text-gray-400 text-sm">
                        If installed apps don't show up in your car, enable <strong>Developer Settings</strong> in the Android Auto app on your phone and check "Unknown Sources".
                    </p>
                </div>
            </div>
          </div>
        </div>
      </article>

      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AAAD. Not affiliated with Google or Android Auto.</p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <Link href="/" className="hover:text-[#3DDC84] transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-[#3DDC84] transition-colors">Blog</Link>
            <Link href="/install" className="hover:text-[#3DDC84] transition-colors text-[#3DDC84]">Install Guide</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
