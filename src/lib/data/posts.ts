import type { Post } from "../types";

export const posts: Post[] = [
  {
    id: 1,
    slug: "first-post",
    date: "16 January 2024",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet",
    categories: ['web', 'database'],
  },
  {
    id: 2,
    slug: "second-post",
    date: "2 August 2024",
    title: "This is a title",
    description: "This is description",
    categories: ['personal'],
  },
  {
    id: 3,
    slug: "third-post",
    date: "3 August 2024",
    title: "This is a title",
    description: "This is description",
    categories: ['web', 'database'],
  },
];
