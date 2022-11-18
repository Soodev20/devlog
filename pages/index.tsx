import { GetStaticProps } from 'next'
import Introduce from '../components/Introduce'
import Tags from '../components/Tags'
import { getAllPostsMetaData } from './api/getStaticData'
import { iPostsType } from '../type/type'
import PostInfos from '../components/PostInfos'

export const IndexPage = ({ posts }: iPostsType): JSX.Element => {
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
  const posts = await getAllPostsMetaData()
  const sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

  return {
    props: { posts: sortedPosts },
  }
}

export default IndexPage