import { allPages } from 'mdx/generated'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import Mdx from '@/components/mdx'
import PageTitle from '@/components/page-title'

const title = 'Album'
const description = 'Album'

type UsesPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: UsesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent).openGraph ?? {}
  const previousTwitter = (await parent).twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: '/album'
    },
    openGraph: {
      ...previousOpenGraph,
      url: '/album',
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

const UsesPage = () => {
  const page = allPages.find((p) => p.slug === 'uses')

  if (!page) {
    return notFound()
  }

  const { body } = page

  return (
    <>
      <PageTitle
        title='Album'
        description='Khoảnh khắc đẹp của ECO.'
      />
      <Mdx content={body} />
    </>
  )
}

export default UsesPage
