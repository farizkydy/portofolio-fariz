import type { Metadata } from "next";
import Link from "next/link";
import { slugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/content/blog/${slug}.mdx`);
  return {
    title: `${metadata.title} — Fariz Rizky Rizaldy`,
    description: metadata.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/40">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight text-foreground transition-colors hover:text-accent"
          >
            Fariz Rizky
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              ← Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header>
          <h1 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {metadata.title}
          </h1>
          <time className="mt-4 block text-sm text-muted">
            {new Date(metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className="mt-6 h-px w-16 bg-accent" />
        </header>

        <article className="prose prose-neutral mt-12 max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-border/40 prose-pre:bg-surface/50">
          <Post />
        </article>

        <div className="mt-16 border-t border-border/40 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all hover:gap-3"
          >
            ← Back to all posts
          </Link>
        </div>
      </main>

      <footer className="border-t border-border/40 px-6 py-8">
        <div className="mx-auto flex max-w-6xl justify-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Fariz Rizky Rizaldy
          </p>
        </div>
      </footer>
    </div>
  );
}
