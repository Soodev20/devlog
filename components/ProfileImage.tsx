export default function ProfileImage () {
  const PROFILE_IMAGE_LINK = 'https://avatars.githubusercontent.com/u/78012039?v=4'


  return (
    <img className='rounded-full object-cover h-40 w-40' src={PROFILE_IMAGE_LINK} alt='profile image' />
  )
}
