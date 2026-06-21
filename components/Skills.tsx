import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/30 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading number="02" title="Skills" />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border/40 bg-background p-6 transition-shadow hover:shadow-sm">
                <h3 className="mb-4 text-xs font-medium tracking-widest text-accent uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/60 px-3 py-1 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
