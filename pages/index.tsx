import { GetStaticProps } from 'next'
import Introduce from '../components/Introduce'
import Tag from '../components/tag'
import { getAllPosts } from './api/staticdata'

export type PostType = {
  title: string;
  date?: string;
  description?: string;
  tag: string[];
};


type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  const flatMappedTags = posts.flatMap(data => data.tag)

  return (
    <>
      <div className="flex flex-col items-center justify-center m-8">
        <Introduce />
        <div className='flex container px-20 flex-wrap w-fit'>
          {flatMappedTags.map(subject => {
            return <Tag subject={subject} />
          })}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: { posts },
  };
};

export default Index;