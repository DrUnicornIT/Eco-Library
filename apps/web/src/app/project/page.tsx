import { allBlogProjs } from 'mdx/generated'
import type { Metadata, ResolvingMetadata } from 'next'

import FilteredProjs from '@/components/filtered-projs'
import PageTitle from '@/components/page-title'

const title = 'Project US'
const description = 'Project'

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
      canonical: '/project'
    },
    openGraph: {
      ...previousOpenGraph,
      url: '/project',
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

const BlogProj = () => {
  const posts = allBlogProjs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      <PageTitle
        title='Dự Án'
        description={`Ngược dòng thời gian để xâu chuỗi những biến động kinh tế đáng chú ý với Dự án - nơi Economians đưa các bạn đi hết chặng đường có dấu chân của các điểm nóng kinh tế.`}
      />
      <FilteredProjs posts={posts} />
    </>
  )
}

export default BlogProj
