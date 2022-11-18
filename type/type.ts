export interface iPostType {
  key: string;
  title: string;
  date: string;
  description?: string;
  tag: Array<string>;
}

export interface iPostsType {
  posts: Array<iPostType>;
}
