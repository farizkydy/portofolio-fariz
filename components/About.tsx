import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "UI Components Built" },
  { value: "1,000+", label: "Developers Mentored" },
  { value: "90%", label: "Test Coverage" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading number="01" title="About Me" />
        </AnimatedSection>

        <div className="grid gap-16 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a Front end Developer with 5+ years of professional
              experience building scalable and high-quality web applications
              across multiple industries. Proficient in modern
              JavaScript/TypeScript ecosystems including React, Next.js,
              Angular, and Node.js, as well as PHP and mobile development with
              React Native, Swift and Flutter.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Beyond full-time roles, I actively take on freelance projects and
              have spent 3–4 years mentoring junior developers — helping them
              grow through structured guidance, code review, and hands-on
              learning. Known for writing clean, maintainable code and
              collaborating effectively within cross-functional Agile teams.
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-surface/50 p-5"
                >
                  <p className="font-display text-2xl font-medium text-accent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
