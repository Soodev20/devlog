type TagProps = {
  subject: string;
};

export default function Tag ({ subject }: TagProps) {
  return (
    <div className='m-2 px-2 rounded-full border-main-gray border-2 text-main-gray'>
      <span>{subject}</span>
    </div>
  )
}