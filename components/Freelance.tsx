import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { freelance } from "@/data/freelance";

export default function Freelance() {
  return (
    <section id="freelance" className="bg-surface/30 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading number="04" title="Freelance & Mentoring" />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
              <h3 className="font-display text-xl font-medium text-foreground">
                {freelance.title}
              </h3>
              <span className="text-sm text-muted">{freelance.period}</span>
            </div>

            <ul className="mt-6 space-y-3">
              {freelance.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base"
                >
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                  {highlight}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {freelance.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/40 bg-background p-5 text-center"
                >
                  <p className="font-display text-3xl font-medium text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
