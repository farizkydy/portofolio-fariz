export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Honestly, at first I was really scared of falling behind on all the material — I'm a complete beginner, truly starting from zero. But it turned out that the content from my mentor Fariz Rizaldy was easy to follow and understand. On top of that, everyone in the program was so supportive of each other — it made the whole experience genuinely fun and memorable. This was also my very first time joining a Full-stack Web Development training like this, and it was truly something special.",
    name: "Zulia Nuriel Efendi Efendi",
    role: "Junior Developer",
  },
  {
    quote: "Working with Fariz on our mobile app project was seamless. He delivered ahead of schedule and the code quality was exceptional. Truly a professional you can rely on.",
    name: "Sarah Chen",
    role: "Startup Founder",
  },
  {
    quote: "The code review sessions with Fariz were the most valuable learning experience in my career. He doesn't just fix your code — he teaches you how to think about it.",
    name: "Budi Santoso",
    role: "Staff Front end Developer — SALT",
  },
];
