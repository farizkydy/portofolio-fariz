import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import { basePath } from "@/lib/siteConfig";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface/30 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading number="06" title="Projects" />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-border/40 bg-background p-6 transition-all hover:border-accent/30 hover:shadow-md sm:p-8">
                <div className="relative mb-6 h-40 overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={`${basePath}${project.image}`}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-display text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all hover:gap-3"
                  >
                    View Project
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
