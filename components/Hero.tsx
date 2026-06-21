"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Decorative element */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-accent/3 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-4 text-sm tracking-widest text-accent uppercase sm:mb-6 sm:text-base">
            {hero.title}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:mt-10"
        >
          <a
            href={`mailto:${hero.cta.email}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
          >
            Let&apos;s Talk
          </a>
          <a
            href={hero.cta.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-secondary-light px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-foreground hover:bg-accent-light"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
