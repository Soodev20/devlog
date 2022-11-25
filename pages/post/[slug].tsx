import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ParsedUrlQuery } from 'querystring'
import { iPostType } from '../../type/type'
import { addParamsPaths, getPostBySlug } from '../api/getStaticData'

type PostPageType = {
  data: iPostType;
  source: MDXRemoteSerializeResult;
};

interface Params extends ParsedUrlQuery {
  slug: string,
}

type PropType = {
  params: Params
}

const components = { SyntaxHighlighter }

const PostPage = ({ data, source }: PostPageType): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center m-10'>
      <MDXRemote {...source} components={components} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await addParamsPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as PropType
  const { data, content } = await getPostBySlug(`${params.slug}.mdx`)
  const mdxSource = await serialize(content, { scope: data })

  return {
    props: {
      data,
      source: mdxSource,
    },
  }
}

export default PostPage
