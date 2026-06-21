export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue", "Angular", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST API", "Express", "Laravel"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter", "Swift"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "GitLab", "Docker", "CI/CD"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI",
    skills: ["Claude", "Prompt Engineering", "Ollama", "RAG Systems"],
  },
  {
    title: "Soft Skills",
    skills: ["Mentoring", "Code Review", "Technical Communication", "Agile / Scrum"],
  },
];
