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
    period: "Technical Training",
    description:
      "Developed a broad technical foundation across software development, networking, databases, systems, hardware, and practical IT concepts.",
  },
  {
    id: "industrial-attachment",
    title: "IT Industrial Attachment",
    period: "Current Experience",
    description:
      "Applying technical knowledge in a real-world IT environment while gaining practical experience with professional workflows, troubleshooting, systems, and day-to-day technology operations.",
    current: true,
  },
  {
    id: "independent-projects",
    title: "Independent Projects",
    period: "Ongoing",
    description:
      "Building and deploying practical digital projects that turn technical skills into working solutions, including Yobby Kicks and BKM Catalogue.",
    current: true,
  },
  {
    id: "professional-direction",
    title: "IT & Digital Solutions",
    period: "Professional Direction",
    description:
      "Developing toward a professional career in IT while continuing to strengthen technical skills through real-world experience, project development, and problem-solving.",
    current: true,
  },
  {
    id: "bkm-digital",
    title: "BKM DIGITAL",
    period: "Long-Term Initiative",
    description:
      "Developing BKM DIGITAL into a long-term digital solutions ecosystem focused on websites, catalogues, digital products, and practical technology services.",
    current: true,
  },
];
