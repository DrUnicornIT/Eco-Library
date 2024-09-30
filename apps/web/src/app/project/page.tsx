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
        title='Đề tài'
        description={`Chìm vào dòng suy tư tại góc Đề Tài - nơi tập hợp những sản phẩm Nghiên cứu Khoa học có chiều sâu của các Economians.`}
      />
      <FilteredProjs posts={posts} />
    </>
  )
}

export default BlogProj
