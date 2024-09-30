import { BlurImage } from '@tszhong0411/ui'
import { allNews } from 'mdx/generated'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import Mdx from '@/components/mdx'

import Header from './header'

type ProjectPageProps = {
  params: {
    slug: string
  }
  searchParams: Record<string, never>
}

export const generateStaticParams = (): Array<ProjectPageProps['params']> => {
  return allNews.map((project) => ({
    slug: project.slug
  }))
}

export const generateMetadata = async (
  props: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { params } = props

  const project = allNews.find((p) => p.slug === params.slug)

  if (!project) {
    return {}
  }

  const { name, description } = project
  const previousTwitter = (await parent).twitter ?? {}
  const previousOpenGraph = (await parent).openGraph ?? {}

  return {
    title: name,
    description: description,
    alternates: {
      canonical: `/new/${params.slug}`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `/new/${params.slug}`,
      title: name,
      description: description,
      images: [
        {
          url: `/images/new/${params.slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title: name,
      description: description,
      images: [
        {
          url: `/images/new/${params.slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description
        }
      ]
    }
  }
}

const ProjectPage = (props: ProjectPageProps) => {
  const {
    params: { slug }
  } = props

  const project = allNews.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const { name, body } = project

  return (
    <div className='mx-auto max-w-3xl'>
      <Header {...project} />
      <BlurImage
        src={`/images/new/${slug}/cover.png`}
        width={1280}
        height={832}
        alt={name}
        className='my-12 rounded-lg'
        lazy={false}
      />
      <Mdx content={body} />
    </div>
  )
}

export default ProjectPage
