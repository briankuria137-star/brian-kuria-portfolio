export interface SkillCategory {
  category: string;
  skills: string[];
}

/**
 * Practical technical areas and tools used across training,
 * independent projects, and real-world IT experience.
 *
 * These represent areas Brian can work with or build using his
 * current development workflow. No proficiency levels are implied.
 */
export const skillCategories: SkillCategory[] = [
  {
    category: "Web Design & Development",
    skills: [
      "Web Design",
      "Responsive Design",
      "UI Development",
      "Landing Pages",
      "Business Websites",
      "Portfolio Websites",
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Web Applications",
    skills: [
      "Web Applications",
      "Business Platforms",
      "Dashboards",
      "Admin Interfaces",
      "E-commerce Interfaces",
      "Online Catalogues",
      "Customer-facing Applications",
      "Form & Contact Systems",
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Databases",
      "REST APIs",
      "Authentication",
      "CRUD Systems",
      "Data Management",
    ],
  },
  {
    category: "Development & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Termux",
      "Acode",
      "Command Line",
      "Web Deployment",
      "Version Control",
    ],
  },
  {
    category: "IT & Infrastructure",
    skills: [
      "Networking",
      "Hardware & Software",
      "IT Support",
      "Troubleshooting",
      "Cybersecurity Fundamentals",
      "Technical Support",
      "Systems Fundamentals",
    ],
  },
  {
    category: "Digital Solutions",
    skills: [
      "Digital Products",
      "Business Solutions",
      "Online Presence",
      "Digital Catalogues",
      "E-commerce Solutions",
      "Website Solutions",
      "Business Automation",
      "Technical Problem Solving",
    ],
  },
];
