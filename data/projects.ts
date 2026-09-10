
export type ProjectStatus =
  | "Active Development"
  | "Live"
  | "Concept"
  | "Maintained";

export type ProjectCategory =
  | "Web Platform"
  | "E-commerce"
  | "Digital Ecosystem"
  | "Tool";

export interface ProjectMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  /** Unique URL-safe identifier. */
  slug: string;

  /** Project name displayed throughout the portfolio. */
  title: string;

  /** Short summary used on project cards. */
  description: string;

  /** Longer factual description reserved for future case studies. */
  longDescription?: string;

  category: ProjectCategory;

  /** Technologies actually used in the project. */
  technologies: string[];

  status: ProjectStatus;

  /** Brian's role in the project. */
  role: string;

  /** Main problem, need, or purpose behind the project. */
  purpose: string;

  /** Path under /public/images/projects. */
  image: string | null;

  /** Optional visual gallery for the project case study. */
  gallery?: ProjectMedia[];

  /** Short visual caption shown beneath the project media. */
  mediaCaption?: string;

  /** Public project URL, when available. */
  liveUrl?: string;

  /** Public repository URL, when available. */
  githubUrl?: string;

  /** Future dedicated case-study URL. */
  caseStudyUrl?: string;

  /** Controls whether the project appears in Featured Projects. */
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "bkm-catalogue",
    title: "BKM Catalogue",
    description:
      "A catalogue-builder platform that helps small businesses turn their products into a shareable digital catalogue.",
    longDescription:
      "BKM Catalogue is being built to give small and growing businesses a straightforward way to present their products online without requiring a full e-commerce build. The current focus is the core catalogue-builder experience, including project creation, catalogue editing, saved designs, and public catalogue presentation.",
    category: "Web Platform",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    status: "Active Development",
    role: "Founder & Developer",
    purpose:
      "Create a practical digital product that makes it easier for small businesses to showcase their products online.",
    image: "/images/projects/bkm-catalogue/dashboard.jpg",
    gallery: [{ src: "/images/projects/bkm-catalogue/dashboard.jpg", alt: "BKM Catalogue dashboard after sign-in", caption: "Catalogue management dashboard for creating and managing a business catalogue." }, { src: "/images/projects/bkm-catalogue/public-catalogue.jpg", alt: "BKM Catalogue public customer view", caption: "Customer-facing catalogue view showing the published product presentation." }],
    mediaCaption: "Selected views from the BKM Catalogue platform, from catalogue management to the customer-facing experience.",
    featured: true,
  },

  {
    slug: "yobby-kicks",
    title: "Yobby Kicks",
    description:
      "A real-world commerce website project built for an independent footwear business.",
    longDescription:
      "Yobby Kicks is a practical business website project focused on creating a professional online presence for an independent footwear business. The project includes product presentation, customer contact flow, SEO foundations, and an administrative product-management workflow.",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    status: "Live",
    role: "Developer",
    purpose:
      "Build a practical online presence that allows a small footwear business to showcase products and reach customers digitally.",
    image: "/images/projects/yobby-kicks/storefront.jpg",
    gallery: [{ src: "/images/projects/yobby-kicks/storefront.jpg", alt: "Yobby Kicks storefront header", caption: "Yobby Kicks storefront presentation and brand header." }, { src: "/images/projects/yobby-kicks/products.jpg", alt: "Yobby Kicks product catalogue", caption: "Product presentation showing the footwear catalogue." }],
    mediaCaption: "Selected storefront and product views from the Yobby Kicks website.",
    liveUrl: "https://yobby-kicks.vercel.app",
    featured: true,
  },

  {
    slug: "bkm-digital",
    title: "BKM DIGITAL",
    description:
      "A growing digital ecosystem bringing BKM Websites, BKM Catalogue, and BKM Guide together under one brand.",
    longDescription:
      "BKM DIGITAL is Brian Kuria's broader digital-products initiative. It is being developed as an ecosystem for practical digital solutions, with products and services designed around the needs of individuals, small businesses, and growing brands.",
    category: "Digital Ecosystem",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    status: "Active Development",
    role: "Founder & Developer",
    purpose:
      "Build a long-term digital solutions brand around practical products, websites, and technology services.",
    image: null,
    gallery: [],
    mediaCaption: "Selected ecosystem and product visuals will be added to the case study.",
    featured: true,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);
