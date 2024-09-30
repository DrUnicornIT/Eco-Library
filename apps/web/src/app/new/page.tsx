import { allNews } from 'mdx/generated'
import type { Metadata, ResolvingMetadata } from 'next'

import PageTitle from '@/components/page-title'
import ProjectCards from '@/components/project-cards'

const title = 'New'
const description = 'New.'

type ProjectsPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: ProjectsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent).openGraph ?? {}
  const previousTwitter = (await parent).twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: '/new'
    },
    openGraph: {
      ...previousOpenGraph,
      url: '/new',
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const ProjectsPage = () => {
  const news = allNews

  return (
    <>
      <PageTitle
        title='News'
        description='The list of my news. Everything was made with ❤️.'
      />
      <ProjectCards projects={news} />
    </>
  )
}

export default ProjectsPage
