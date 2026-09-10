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
    title: "IT Industrial Attachment — Anexa-Tech IT Limited",
    period: "Current",
    description:
      "Gaining hands-on experience in a professional IT environment, applying technical knowledge to real-world workflows, technology operations, troubleshooting, and day-to-day IT support.",
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
    id: "bkm-digital",
    title: "BKM DIGITAL",
    period: "Long-Term Initiative",
    description:
      "Developing BKM DIGITAL into a long-term digital solutions ecosystem focused on websites, catalogues, digital products, and practical technology services.",
    current: true,
  },
];
