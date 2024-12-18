import { dev } from "$app/environment";

type Config = {
  title: string;
  description: string;
  url: string;
};

export const config: Config = {
  title: "comfortablynumb.dev",
  description: "Personal website featuring a blog and project showcases.",
  url: dev ? "http://localhost:5173" : "https://portfolio-rewrite-2t4.pages.dev",
};
