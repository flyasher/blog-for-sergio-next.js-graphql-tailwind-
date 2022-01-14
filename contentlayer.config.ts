import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc: any) => readingTime(doc.body.raw),
  },
  // wordCount: {
  //   type: 'number',
  //   resolve: (doc: any) => doc.body.raw.split(/\s+/gu).length,
  // },
  slug: {
    type: 'string',
    resolve: (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
}

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    number: { type: 'number', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    banner: { type: 'string', required: true },
    isFeatured: { type: 'boolean', required: true },
    // lastUpdated: { type: 'string', required: false },
  },
  computedFields,
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    techs: { type: 'string', required: true },
    banner: { type: 'string', required: true },
    route: { type: 'string', required: true },
    liveUrl: { type: 'string', required: true },
    repo: { type: 'string', required: true },
  },
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

export default contentLayerConfig
