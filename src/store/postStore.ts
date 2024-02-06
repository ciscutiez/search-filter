import { create } from 'zustand';

//posts type

type Posts = {
  id: number;
  body: string;
  title: string;
};

type postsStore = {
  posts: Posts[]; // array of posts
  setPosts: (post: Posts[]) => void; //function to set posts
};

export const usePostsStore = create<postsStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
