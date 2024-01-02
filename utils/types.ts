export type Post = {
  id: string;
  createdAt: string;
  slug: string;
  excerpt: string;
  title: string;
  img: string;
  desc: string;
  views: number;
  catSlug: string;
  userEmail: string;
};

export type PostsResponse = {
  posts: Post[];
  count: number;
};
