import { type DocumentType, type MakeSourceOptions } from '@tszhong0411/mdx'

const BlogResearch = {
  name: 'BlogResearch',
  filePathPattern: 'research/*.mdx',
  fields: [
    {
      name: 'title',
      type: 'string',
      required: true
    },
    {
      name: 'date',
      type: 'string',
      required: true
    },
    {
      name: 'modifiedTime',
      type: 'string',
      required: true
    },
    {
      name: 'summary',
      type: 'string',
      required: true
    }
  ]
} satisfies DocumentType

const BlogProj = {
  name: 'BlogProj',
  filePathPattern: 'project/*.mdx',
  fields: [
    {
      name: 'title',
      type: 'string',
      required: true
    },
    {
      name: 'date',
      type: 'string',
      required: true
    },
    {
      name: 'modifiedTime',
      type: 'string',
      required: true
    },
    {
      name: 'summary',
      type: 'string',
      required: true
    }
  ]
} satisfies DocumentType

const BlogReport = {
  name: 'BlogReport',
  filePathPattern: 'report/*.mdx',
  fields: [
    {
      name: 'title',
      type: 'string',
      required: true
    },
    {
      name: 'date',
      type: 'string',
      required: true
    },
    {
      name: 'modifiedTime',
      type: 'string',
      required: true
    },
    {
      name: 'summary',
      type: 'string',
      required: true
    }
  ]
} satisfies DocumentType

const New = {
  name: 'New',
  filePathPattern: 'new/*.mdx',
  fields: [
    {
      name: 'name',
      type: 'string',
      required: true
    },
    {
      name: 'description',
      type: 'string',
      required: true
    },
    {
      name: 'techstack',
      type: 'list',
      fields: [
        {
          name: 'label',
          type: 'string',
          required: true
        }
      ],
      required: true
    },
    {
      name: 'selected',
      type: 'boolean'
    }
  ]
} satisfies DocumentType

const Page = {
  name: 'Page',
  filePathPattern: 'pages/*.mdx'
} satisfies DocumentType

export default {
  contentDirPath: 'src/content',
  defs: [BlogResearch, BlogProj, BlogReport, New, Page]
} satisfies MakeSourceOptions
