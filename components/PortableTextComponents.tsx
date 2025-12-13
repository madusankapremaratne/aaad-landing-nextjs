import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || 'Post image'}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-white mb-4 mt-10">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-semibold text-white mb-3 mt-8">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-medium text-white mb-3 mt-6">{children}</h4>,
    normal: ({ children }: any) => <p className="text-gray-300 mb-4 text-lg leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#3DDC84] pl-4 py-2 italic text-gray-400 my-6 bg-white/5 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          target={target}
          className="text-[#3DDC84] hover:underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="text-white font-bold">{children}</strong>,
    code: ({ children }: any) => <code className="bg-gray-800 px-2 py-1 rounded text-sm text-[#3DDC84]">{children}</code>,
  },
}
