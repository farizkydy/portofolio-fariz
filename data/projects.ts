export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A production e-commerce platform for Telkomsel, Indonesia's largest carrier — handling real-time inventory, integrated payments, and high-volume order management.",
    techStack: ["Angular", "TypeScript", "Node.js", "MySQL"],
    liveUrl: "https://www.telkomsel.com/shops/home",
    image: "/images/telecomunication-ecommerce.jpeg",
  },
  {
    title: "Digital Health Platform",
    description: "A national health-data platform integrating patient records and analytics across thousands of Indonesian facilities.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://satusehat.kemkes.go.id/data/dashboard/3678097d-d11e-4b2c-8552-310d782a905b",
    image: "/images/healthcare-system.jpeg",
  },
  {
    title: "Corporate Learning Portal",
    description: "An enterprise LMS that streams course videos, tracks learner progress, and issues certifications — giving training teams full visibility into outcomes.",
    techStack: ["Angular", "TypeScript", "Laravel", "MySQL"],
    liveUrl: "https://corporate.mereka.io/",
    image: "/images/corporate-learning-portal.jpeg",
  },
  {
    title: "Local AI Tutor for Schools",
    description: "A privacy-first AI classroom powered by a single Mac mini — teachers set the curriculum, the local Ollama model tutors each student through it, and a live dashboard lets teachers monitor activity across every device.",
    techStack: ["Mac mini", "Ollama", "Next.js", "Phyton", "RAG"],
    liveUrl: "#",
    image: "/images/local-ai-classroom.jpeg",
  },
];
