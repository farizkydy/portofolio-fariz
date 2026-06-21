import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Fariz Rizky Rizaldy",
  description:
    "Thoughts on web development, clean code, mentoring, and building great software.",
};

export default function BlogPage() {
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
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h1 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-base text-muted sm:text-lg">
          Thoughts on web development, clean code, mentoring, and building
          great software.
        </p>
        <div className="mt-4 h-px w-16 bg-accent" />

        <div className="mt-12 space-y-10">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="font-display text-xl font-medium text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h2>
                <time className="mt-2 block text-sm text-muted">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all group-hover:gap-3">
                  Read more
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </article>
          ))}
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
