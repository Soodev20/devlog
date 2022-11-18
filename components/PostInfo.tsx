import Link from 'next/link'
import { iPostType } from '../type/type'

type PostInfoProp = {
  post: iPostType
}

export default function PostInfo ({ post }: PostInfoProp) {
  const { title, description, date, tag, key } = post

  return (
    <Link href={`/post/${key}`} passHref>
      <div className='flex flex-col container mb-4 sm:mb-6 p-4 rounded-lg border-main-gray border-2 text-main-gray hover:shadow-xl cursor-pointer'>
        <div className='flex flex-row container items-center'>
          <h2 className='text-main-blue font-bold text-xl'>{title}</h2>
          <span className='text-sm ml-2 text-black'>{date?.slice(0, 10)}</span>
        </div>
        <div className='flex container'>
          {tag.map((subject, index) => {
            return (
              <div className='text-sm1' key={`${subject}-${date}`}>
                {index + 1 === tag.length
                  ? <span className='text-sm1' key={`${subject},${date}`} >{subject}</span>
                  : <span className='text-sm1' key={`${subject},${date}`}>{`${subject},`}&nbsp;</span>
                }
              </div>
            )
          })}
        </div>
        <span className='text-black truncate'>{description}</span>
      </div>
    </Link>
  )
}