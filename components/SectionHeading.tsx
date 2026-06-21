interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  number,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <span className="font-display text-6xl font-light text-border select-none sm:text-7xl">
        {number}
      </span>
      <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-accent" />
    </div>
  );
}
