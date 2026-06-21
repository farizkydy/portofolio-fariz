import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading number="05" title="Testimonials" />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col justify-between rounded-2xl border border-border/40 bg-surface/30 p-6 transition-shadow hover:shadow-sm sm:p-8">
                <div>
                  <div className="mb-4 text-accent text-2xl leading-none">
                    &ldquo;
                  </div>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-6 border-t border-border/40 pt-4">
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
