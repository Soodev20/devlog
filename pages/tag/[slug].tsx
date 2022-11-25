import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import PostInfos from '../../components/PostInfos'
import { getAllPostsMetaData, getTagsParamsPaths } from '../api/getStaticData'
import { iPostsType } from '../../type/type'

interface Params extends ParsedUrlQuery {
  slug: string,
}

type PropType = {
  params: Params
}


const TagListPage = ({ posts }: iPostsType): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center m-4 sm:m-8'>
      <div className='flex flex-col container mt-10'>
        <PostInfos posts={posts}/>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTagsParamsPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as PropType
  const posts = await getAllPostsMetaData()
  const filteredPosts = posts.filter(post => post.tag.includes(params.slug))
  const sortedPosts = filteredPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

  return {
    props: { posts: sortedPosts },
  }
}

export default TagListPage
