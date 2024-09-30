'use client'

import { BlurImage, Link } from '@tszhong0411/ui'
import type { BlogReport } from 'mdx/generated'

import { useFormattedDate } from '@/hooks/use-formatted-date'
import { api } from '@/trpc/react'

type ReportCardsProps = {
  posts: BlogReport[]
}

type ReportCardProps = BlogReport

const ReportCards = (props: ReportCardsProps) => {
  const { posts } = props

  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {posts.map((post) => (
        <ReportCard key={post.slug} {...post} />
      ))}
    </div>
  )
}

const ReportCard = (props: ReportCardProps) => {
  const { slug, title, summary, date } = props
  const formattedDate = useFormattedDate(date, {
    format: 'LL',
    loading: '--'
  })

  const viewsQuery = api.views.get.useQuery({
    slug
  })

  const likesQuery = api.likes.get.useQuery({
    slug
  })

  return (
    <Link
      href={`/report/${slug}`}
      className='shadow-feature-card dark:shadow-feature-card-dark group rounded-xl px-2 py-4'
    >
      <BlurImage
        src={`/images/report/${slug}/cover.png`}
        className='rounded-lg'
        width={1200}
        height={630}
        imageClassName='transition-transform group-hover:scale-105'
        alt={title}
      />
      <div className='flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500'>
        {formattedDate}
        <div className='flex gap-2'>
          {likesQuery.isLoading ? '--' : <div>{likesQuery.data?.likes} likes</div>}
          <div>&middot;</div>
          {viewsQuery.isLoading ? '--' : <div>{viewsQuery.data?.views} views</div>}
        </div>
      </div>
      <div className='flex flex-col px-2 py-4'>
        <h3 className='font-title text-2xl font-bold'>{title}</h3>
        <p className='text-muted-foreground mt-2'>{summary}</p>
      </div>
    </Link>
  )
}

export default ReportCards
