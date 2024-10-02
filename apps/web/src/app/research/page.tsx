import { allBlogResearches } from 'mdx/generated'
import type { Metadata, ResolvingMetadata } from 'next'

import FilteredResearches from '@/components/filtered-researches'
import PageTitle from '@/components/page-title'

const title = 'Research'
const description = 'Research.'

type BlogPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent).openGraph ?? {}
  const previousTwitter = (await parent).twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: '/research'
    },
    openGraph: {
      ...previousOpenGraph,
      url: '/research',
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

const ResearchPage = () => {
  const posts = allBlogResearches.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      <PageTitle
        title='Chuyên Đề'
        description={`Chìm vào dòng suy tư tại góc Chuyên Đề - nơi tập hợp những sản phẩm Nghiên cứu Khoa học có chiều sâu của các Economians.`}
      />
      <FilteredResearches posts={posts} />
    </>
  )
}

export default ResearchPage
