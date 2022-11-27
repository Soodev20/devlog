import Link from 'next/link'
import Image from 'next/image'
import { iProjectType } from '../type/type'

type ProjectInfoProp = {
  project: iProjectType
}

export default function ProjectCard ({ project }: ProjectInfoProp) {
  const { title, description, url, imgUrl } = project

  return (
    <Link href={`${url}`} passHref>
      <div className='flex flex-row container mb-4 sm:mb-6 p-4 rounded-lg border-main-gray border-2 text-main-gray hover:shadow-xl cursor-pointer'>
        <Image
          className='object-cover h-28 w-28 sm:h-40 sm:w-40'
          src={imgUrl}
          alt={`${title} project's image`}
          width={40}
          height={30}
        />
        <div className='flex flex-row container items-center'>
          <h2 className='text-main-blue font-bold text-xl'>{title}</h2>
          <span className='text-sm ml-2 text-black'>{description}</span>
        </div>
      </div>
    </Link>
  )
}