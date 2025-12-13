/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js's catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio'
import Studio from './Studio'

// Set the correct viewport and metadata
export const viewport = {
  ...studioViewport,
  interactiveWidget: 'resizes-content',
}

export const metadata = {
  ...studioMetadata,
  title: 'Loading Studio…',
}

export const dynamic = 'force-static'

export function generateStaticParams() {
  return [{ index: [] }]
}

export default function StudioPage() {
  return <Studio />
}
