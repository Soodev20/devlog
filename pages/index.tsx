import { GetStaticProps } from 'next'
import Introduce from '../components/Introduce'
import Tags from '../components/Tags'
import { getAllPosts } from './api/staticdata'
import { iPostsType } from '../type/type'
import PostInfos from '../components/PostInfos'

export const Index = ({ posts }: iPostsType): JSX.Element => {
  return (
    <>
      <div className='flex flex-col items-center justify-center m-4 sm:m-8'>
        <Introduce />
        <div className='flex container flex-wrap w-fit m-4'>
          <Tags posts={posts} />
        </div>
        <div className='flex flex-col container'>
          <PostInfos posts={posts}/>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}

export default Index