import * as z from 'zod';

export interface Post {
  userId: number;
  id: number;
  body: string;
  title: string;
}

export interface PostCreateForm {
  title: string;
  body: string;
}

export const addPostSchema = z.object({
  title: z.string().min(6),
  body: z.string().min(1, { message: 'Body is required' }),
});
