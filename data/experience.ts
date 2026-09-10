export interface JourneyEntry {
  id: string;
  title: string;
  period: string;
  description: string;
  current?: boolean;
}

export const journey: JourneyEntry[] = [
  {
    id: "it-foundation",
    title: "IT Foundation",
    period: "Foundation",
    description:
      "Built a technical foundation across software, networking, databases, systems, and practical IT concepts.",
  },
  {
    id: "industrial-attachment",
    title: "Industrial Attachment",
    period: "Practical Experience",
    description:
      "Applied IT knowledge in a real-world working environment, gaining practical exposure beyond formal training.",
  },
  {
    id: "independent-projects",
    title: "Independent Projects",
    period: "Ongoing",
    description:
      "Turned technical skills into working projects, including Yobby Kicks and BKM Catalogue, with a focus on solving practical business needs.",
    current: true,
  },
  {
    id: "professional-direction",
    title: "IT & Digital Solutions",
    period: "Current Direction",
    description:
      "Moving into professional IT and digital work while continuing to develop practical products, websites, and technology solutions.",
    current: true,
  },
  {
    id: "bkm-digital",
    title: "BKM DIGITAL",
    period: "Ongoing",
    description:
      "Building BKM DIGITAL as a long-term digital solutions ecosystem, including BKM Websites, BKM Catalogue, and BKM Guide.",
    current: true,
  },
];
