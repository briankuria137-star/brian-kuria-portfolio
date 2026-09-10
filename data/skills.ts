export interface SkillCategory {
  category: string;
  skills: string[];
}

/**
 * Editable initial entries. These reflect tools and areas Brian works with —
 * not claimed proficiency levels. Add or remove freely; the UI adapts.
 */
export const skillCategories: SkillCategory[] = [
  {
    category: "Development",
    skills: ["Next.js", "React", "JavaScript", "TypeScript", "HTML", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    skills: ["Supabase", "Databases", "REST APIs"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    category: "IT & Technology",
    skills: ["Networking", "Cybersecurity Fundamentals", "IT Support"],
  },
];
