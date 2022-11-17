export interface iPostType {
  title: string;
  date?: string;
  description?: string;
  tag: Array<string>;
}

export interface iPostsType {
  posts: Array<iPostType>;
}
