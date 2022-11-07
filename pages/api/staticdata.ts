import path from 'path'
import { promises as fs } from 'fs'
import matter from 'gray-matter'

export const POSTS_PATH = path.resolve(process.cwd(), 'posts')

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.resolve(POSTS_PATH, `${slug}`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return data;
}

export const getAllPosts = async () => {
  const slugs = await fs.readdir(POSTS_PATH)
  const posts = await Promise.all(
    slugs.map(data => {
    return getPostBySlug(data)
  }))

  return posts;
}