import { iPostsType } from '../type/type';
import Tag from './Tag';

type SortedTagInfo = Record<string, number>

export default function Tags ({ posts }: iPostsType) {
  const flatMappedTags = posts.flatMap(data => data.tag)
  const sortedTags = {} as SortedTagInfo

  for (let i = 0; i < flatMappedTags.length; i++) {
    sortedTags[flatMappedTags[i]] ? sortedTags[flatMappedTags[i]] += 1 : sortedTags[flatMappedTags[i]] = 1
  }

  return (
    <>
      {Object.keys(sortedTags).map(key => {
        return (
          <Tag
            key={key}
            subject={key}
            frequency={sortedTags[key]}
          />
        )
      })}
    </>
  )
}