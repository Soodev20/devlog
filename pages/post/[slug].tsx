import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { iPostType } from '../../type/type'
import { addParamsPaths, getPostBySlug } from '../api/getStaticData'

type PostPageType = {
  data: {
    [key: string]: any;
  }
  content: iPostType;
};

interface Params extends ParsedUrlQuery {
  slug: string,
}

type PropType = {
  params: Params
}

export default function Post({ content, data }: PostPageType): JSX.Element {
  const { title, date, description, tag } = content;

  return (
    <div className='flex flex-col items-center justify-center m-10'>
      <p>This is posts page.</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await addParamsPaths()

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as PropType
  const { data, content } = await getPostBySlug(`${params.slug}.mdx`)

  return {
    props: { content, data },
  }
}