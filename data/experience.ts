export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "SALT",
    role: "Front end Developer",
    period: "October 2022 — Present",
    highlights: [
      "Developed and maintained responsive web applications using modern Angular (Angular 12 — latest)",
      "Built 50+ reusable UI components and maintained a consistent design system across the application",
      "Improved Google PageSpeed Insights mobile score from 41 to 85 after full SSR rollout on the customer acquisition funnel",
      "Implemented dynamic meta tag generation per route covering 30+ unique page routes using Angular's Meta and Title services",
      "Wrote 90% coverage unit and integration tests to ensure code reliability and prevent regressions",
    ],
  },
  {
    company: "SALT",
    role: "Front end Developer",
    period: "October 2021 — February 2022",
    highlights: [
      "Developed and maintained responsive web applications using modern Angular",
      "Built reusable UI components and maintained a consistent design system",
      "Handled asynchronous data fetching, loading states, and error handling across the application",
      "Translated UI/UX design mockups and wireframes into functional web interfaces",
    ],
  },
  {
    company: "ZettaByte",
    role: "Frontend Developer",
    period: "March 2021 — September 2021",
    highlights: [
      "Developed and maintained responsive web applications using modern Angular",
      "Wrote clean, readable, and well-documented code following team coding standards",
      "Identified, debugged, and resolved front-end issues reported by QA or end users",
    ],
  },
  {
    company: "MadeIndonesia",
    role: "Front end Developer",
    period: "July 2020 — February 2021",
    highlights: [
      "Developed and maintained responsive web applications using modern React and PHP",
      "Collaborated closely with UI/UX designers, back-end developers, and product managers",
      "Implemented authentication and authorization flows (JWT, OAuth, SSO) on the client side",
      "Consumed and integrated RESTful APIs and third-party services into front-end applications",
    ],
  },
];
