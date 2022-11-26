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

export interface iProjectType {
  title: string;
  description: string;
  url: string;
  imgUrl: string;
}

export interface iProjectsType {
  projects: Array<iProjectType>
}