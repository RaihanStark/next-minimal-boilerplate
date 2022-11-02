import type { Post } from './post';

export interface BlogState {
  posts: Post[];
  isLoading: boolean;
}
