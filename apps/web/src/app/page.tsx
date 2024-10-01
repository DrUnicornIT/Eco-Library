import { allBlogProjs, allBlogResearches, allNews } from 'mdx/generated'
import type { Metadata } from 'next'

import AboutMe from '@/components/home/about-me'
import GetInTouch from '@/components/home/get-in-touch'
import Hero from '@/components/home/hero'
import LatestArticles from '@/components/home/latest-articles'
import LatestArticlesProject from '@/components/home/latest-articles-project'
import SelectedProjects from '@/components/home/selected-projects'
import { Analytics } from "@vercel/analytics/react"

import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL
  }
}

const HomePage = () => {
  const posts = allBlogProjs
  const latestPosts = posts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 2)


  const research_posts = allBlogResearches
  const latest_research_Posts = research_posts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 2)

  const news = allNews

  return (
    <>
      <Hero />
      <LatestArticles posts={latest_research_Posts} />
      <LatestArticlesProject posts={latestPosts} />
      <SelectedProjects projects={news} />
      <AboutMe />
      <GetInTouch />
      <Analytics/>
    </>
  )
}

export default HomePage
