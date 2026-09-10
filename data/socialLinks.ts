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
    description: "Websites built for independent businesses and brands.",
  },
  {
    name: "BKM Catalogue",
    description: "A catalogue-builder platform for showcasing products online.",
  },
  {
    name: "BKM Guide",
    description: "A guide product in early planning within the BKM DIGITAL ecosystem.",
  },
];

export const bkmDigitalUrl = siteConfig.brands.bkmDigital.url;
