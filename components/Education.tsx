import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading number="07" title="Education" />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-3">
          {education.map((edu, i) => (
            <AnimatedSection key={`${edu.institution}-${i}`} delay={i * 0.1}>
              <div className="rounded-2xl border border-border/40 bg-surface/30 p-6">
                <p className="font-display text-base font-medium text-foreground">
                  {edu.institution}
                </p>
                <p className="mt-1 text-sm text-muted">{edu.degree}</p>
                <p className="mt-3 text-xs tracking-widest text-accent uppercase">
                  {edu.year}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
