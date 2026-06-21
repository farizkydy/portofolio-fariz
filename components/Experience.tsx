import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading number="03" title="Experience" />
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={`${exp.company}-${i}`} delay={i * 0.1}>
              <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border last:before:h-3">
                <div className="absolute left-0 top-2 -translate-x-1/2">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-accent bg-background transition-colors group-hover:bg-accent" />
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <h3 className="font-display text-xl font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted">
                    {exp.company} · {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
