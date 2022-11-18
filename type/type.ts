export interface iPostType {
  url: string;
  title: string;
  date: string;
  description?: string;
  tag: Array<string>;
}

export interface iPostsType {
  posts: Array<iPostType>;
}
