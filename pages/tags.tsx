import { GetStaticProps } from 'next'
import Tags from '../components/Tags'
import { getAllPostsMetaData } from './api/getStaticData'
import { iPostsType } from '../type/type'

const TagsPage = ({ posts }: iPostsType): JSX.Element => {
  return (
    <div className='flex flex-row items-center justify-center m-10'>
      <div className='flex items-center justify-center m-8'>
        <span className='text-xl sm:text-2xl'>Tags</span>
      </div>
      <div className='flex container flex-wrap w-fit m-4'>
        <Tags posts={posts} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsMetaData()

  return {
    props: { posts },
  }
}

export default TagsPage
