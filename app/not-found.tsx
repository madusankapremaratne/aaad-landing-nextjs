import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#050505]">
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#3DDC84]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#4285F4]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-2xl w-full text-center relative z-10">
            <div className="mb-6 flex justify-center">
               <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#3DDC84]/10 text-[#3DDC84] border border-[#3DDC84]/20">404 Error</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-green tracking-tight">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
                The page you're looking for seems to have disconnected. Check our apps list or blog for the latest updates.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
                 <Link href="/#apps" className="card group p-5 text-left border border-white/5 hover:border-[#3DDC84]/30 transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#3DDC84]/10 flex items-center justify-center text-[#3DDC84]">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#3DDC84] transition-colors">Apps</h3>
                    </div>
                    <p className="text-sm text-gray-500">Download popular Android Auto apps.</p>
                 </Link>
                 
                 <Link href="/blog" className="card group p-5 text-left border border-white/5 hover:border-[#3DDC84]/30 transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-lg bg-[#3DDC84]/10 flex items-center justify-center text-[#3DDC84]">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#3DDC84] transition-colors">Blog</h3>
                    </div>
                    <p className="text-sm text-gray-500">Read guides and tutorials.</p>
                 </Link>
            </div>

            <Link href="/" className="btn-primary inline-flex items-center gap-2 group !py-3 !px-6 text-base">
                Go back home
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
        </div>
    </main>
  )
}
