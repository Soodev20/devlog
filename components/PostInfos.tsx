import { iPostsType } from "../type/type"
import PostInfo from "./PostInfo"

export default function PostInfos ({ posts }: iPostsType) {
  return (
    <>
      {posts.map(post => {
        return (
          <PostInfo post={post} />
        )
      })}
    </>
  )
}