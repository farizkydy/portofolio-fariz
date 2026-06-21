import gettingStarted, { metadata as meta1 } from "@/content/blog/getting-started-nextjs.mdx";
import cleanCode, { metadata as meta2 } from "@/content/blog/clean-code-principles.mdx";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const posts: BlogPost[] = [
  {
    slug: "getting-started-nextjs",
    title: meta1.title,
    date: meta1.date,
    excerpt: meta1.excerpt,
  },
  {
    slug: "clean-code-principles",
    title: meta2.title,
    date: meta2.date,
    excerpt: meta2.excerpt,
  },
];

export const slugs = posts.map((post) => post.slug);
