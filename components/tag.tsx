type TagProps = {
  subject: string;
  frequency?: number;
};

export default function Tag ({ subject, frequency }: TagProps) {
  return (
    <div className='text-sm m-2 px-2 sm:text-sm1 rounded-full border-main-gray border-[0.1rem] sm:border-2 text-main-gray hover:shadow-xl cursor-pointer'>
      <span>{subject}</span>
      {frequency && <span>{` (${frequency})`}</span>}
    </div>
  )
}