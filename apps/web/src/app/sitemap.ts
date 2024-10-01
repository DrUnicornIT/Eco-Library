import { allBlogResearches, allBlogProjs, allPages } from 'mdx/generated'
import { type MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/constants'

const sitemap = (): MetadataRoute.Sitemap => {
  const blogResearches = allBlogResearches.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: post.date.split('T')[0]
  }))

  const blogProjs = allBlogProjs.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: post.date.split('T')[0]
  }))

  const routes = [
    '',
    '/report',
    '/project',
    '/research',
    'project',
    '/guestbook',
    '/dashboard',
    ...allPages.map((page) => `/${page.slug}`)
    // ...allProjects.map((project) => `/projects/${project.slug}`)
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogResearches, ...blogProjs]
}

export default sitemap
