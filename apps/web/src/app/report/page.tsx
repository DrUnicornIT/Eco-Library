import { allBlogReports } from 'mdx/generated'
import type { Metadata, ResolvingMetadata } from 'next'

import FilteredReports from '@/components/filtered-reports'
import PageTitle from '@/components/page-title'

const title = 'Report'
const description = 'Report.'

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
      canonical: '/report'
    },
    openGraph: {
      ...previousOpenGraph,
      url: '/report',
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

const ReportPage = () => {
  const posts = allBlogReports.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      <PageTitle
        title='Báo cáo Kinh tế'
        description={`Hoà mình vào dòng chảy của nhịp sống kinh tế Việt Nam với Báo cáo Kinh tế Tháng - ấn phẩm tóm lược những sự kiện nổi bật của đất nước trong tháng vừa qua.`}
      />
      <FilteredReports posts={posts} />
    </>
  )
}

export default ReportPage
