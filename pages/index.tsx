import Introduce from '../src/components/Introduce'
import Tag from '../src/components/tag'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-10">
        <Introduce />
        <div className='flex flex-wrap w-fit bg-red-300'>
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </>
  )
}
