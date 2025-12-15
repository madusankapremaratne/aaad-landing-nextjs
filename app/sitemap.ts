import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { appsData } from '@/lib/apps-data'

export const revalidate = 60

const SITEMAP_QUERY = groq`{
  "posts": *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt,
    _updatedAt
  },
  "pages": *[_type == "page" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://aaad.app'

    // Fetch data from Sanity
    const { posts, pages } = await client.fetch(SITEMAP_QUERY)

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]

    // Blog Posts
    const postRoutes: MetadataRoute.Sitemap = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post._updatedAt || post.publishedAt || new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    // Generic Pages
    const pageRoutes: MetadataRoute.Sitemap = pages.map((page: any) => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: page._updatedAt || new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    }))

    // App Pages (from local data)
    const appRoutes: MetadataRoute.Sitemap = Object.keys(appsData).map((slug) => ({
        url: `${baseUrl}/apps/${slug}`,
        lastModified: new Date(appsData[slug].lastUpdated) || new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    return [...staticRoutes, ...postRoutes, ...pageRoutes, ...appRoutes]
}
