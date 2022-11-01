import ProfileImage from './ProfileImage'

export default function Introduce () {
  return (
    <div className='flex flex-row w-fit'>
      <ProfileImage />
      <div className='flex flex-col justify-end items-start'>
        <h1 className='text-lg'>Soojeong Choi</h1>
        <span className='text-base'>rkskekfdlkfjklsdj;fasjdfl;adsjkflkjwefql;</span>
      </div>
    </div>
  )
}