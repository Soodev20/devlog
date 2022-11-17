import { GetStaticProps } from 'next'
import { iPostType } from '../../type/type'
import { getAllPosts } from '../api/staticdata'

type PostType = {
  post: Array<iPostType>
}

export default function Posts({ post }: PostType): JSX.Element {
  const { title, date, description, tag } = post[0]

  return (
    <div className='flex flex-col items-center justify-center m-10'>
      <p>This is posts page.</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts()

  return {
    paths: posts.map(post => ({ params: { slug: post.title }})),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getAllPosts()
  const post = posts.filter(post => post.title === (params && params.slug))

  return {
    props: { post },
  }
}