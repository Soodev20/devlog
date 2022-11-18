import path from 'path'
import { promises as fs } from 'fs'
import matter from 'gray-matter'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const getMetaDataBySlug = async (slug: string) => {
  const fullPath = path.resolve(POSTS_PATH, `${slug}`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return data;
}

export const getAllPosts = async () => {
  const slugs = await fs.readdir(POSTS_PATH)
  const posts = await Promise.all(
    slugs.map(data => {
    return getMetaDataBySlug(data)
  }))

  return posts;
}

export const getFilteredPaths= async () => {
  const paths = await fs.readdir(POSTS_PATH)
  const filteredPaths = await Promise.all(
    paths
      .map(path => path.replace(/\.mdx$/, ''))
      .map((slug) => ({ params: { slug } }))
  )
  return filteredPaths
}

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContent);

  return { data, content };
}