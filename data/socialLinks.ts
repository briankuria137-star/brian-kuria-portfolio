import { siteConfig } from "@/lib/site";

export interface SocialLink {
  label: string;
  href: string;
  placeholder: boolean;
}

const createLink = (label: string, href: string): SocialLink => ({
  label,
  href,
  placeholder: !href,
});

export const socialLinks: SocialLink[] = [
  createLink(
    "Email",
    siteConfig.social.email ? `mailto:${siteConfig.social.email}` : ""
  ),
  createLink("WhatsApp", siteConfig.social.whatsapp),
  createLink("LinkedIn", siteConfig.social.linkedin),
  createLink("GitHub", siteConfig.social.github),
  createLink("Instagram", siteConfig.social.instagram),
];

export interface BkmProduct {
  name: string;
  description: string;
}

export const bkmProducts: BkmProduct[] = [
  {
    name: "BKM Websites",
    description:
      "Professional websites and web experiences built for businesses, brands, individuals, and growing digital ventures.",
  },
  {
    name: "BKM Catalogue",
    description:
      "A digital catalogue platform designed to help businesses organize, present, and share their products online.",
  },
  {
    name: "BKM Digital Solutions",
    description:
      "Practical software, e-commerce, automation, and custom digital solutions built around specific business needs.",
  },
  {
    name: "BKM Guide",
    description:
      "An upcoming digital resource focused on helping people and businesses navigate practical technology and digital opportunities.",
  },
];

export const bkmDigitalUrl = siteConfig.brands.bkmDigital.url;
