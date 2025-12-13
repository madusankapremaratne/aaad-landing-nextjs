import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  mainImage,
  body,
  publishedAt,
  author,
  categories,
  excerpt,
  keywords
}`

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  body,
  excerpt,
  keywords
}`

export const PAGES_QUERY = groq`*[_type == "page" && defined(slug.current)]`
