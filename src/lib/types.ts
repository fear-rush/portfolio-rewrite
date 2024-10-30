export type Categories = 'web' | 'network' | 'database' | 'infra' | 'personal';

export type Post = {
  id: number;
  description: string;
  heroimage: {
    url: string;
    alt: string;
  }
  slug: string;
  date: string;
  title: string;
  keywords: string[];
  categories: Categories[];
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  heroimage: {
    url: string;
    alt: string;
  }
  platform: string;
  keywords: string[];
  stack: string[];
  github: string;
};