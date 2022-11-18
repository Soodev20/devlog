import path from 'path'
import { promises as fs } from 'fs'
import matter from 'gray-matter'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const getAllPostsMetaData = async () => {
  const slugs = await fs.readdir(POSTS_PATH)
  const postsMetaData = await Promise.all(
    slugs.map(async(slug) => {
      const { data } = await getPostBySlug(slug)
      return data
    })
  )

  return postsMetaData
}

export const addParamsPaths= async () => {
  const paths = await fs.readdir(POSTS_PATH)
  const filteredPaths = await Promise.all(
    paths
      .map(path => path.replace(/\.mdx$/, ''))
      .map((slug) => ({ params: { slug } }))
  )
  return filteredPaths
}

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(POSTS_PATH, slug)
  const fileContent = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  return { data, content }
}