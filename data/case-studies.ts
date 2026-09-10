export interface CaseStudySection {
  number: string;
  title: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  sections: CaseStudySection[];
  capabilities: string[];
  stack: string[];
  role: string;
  status: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bkm-catalogue",
    eyebrow: "CASE STUDY / BKM DIGITAL",
    headline: "Building a digital catalogue platform for small businesses.",
    introduction:
      "BKM Catalogue is a digital catalogue platform designed to help businesses create, manage, customize, publish, and share professional product catalogues online.",
    sections: [
      {
        number: "01",
        title: "The challenge",
        body:
          "Many small businesses need a professional way to present their products online without the complexity of building a full e-commerce platform. The goal was to create a simpler digital experience that could turn product information into a shareable online catalogue.",
      },
      {
        number: "02",
        title: "The solution",
        body:
          "BKM Catalogue combines a management workspace with a public-facing catalogue. A business can create a catalogue, manage its products and product information, upload multiple product images, configure the catalogue presentation, save changes, publish it, and share the resulting public link with customers.",
      },
      {
        number: "03",
        title: "The product experience",
        body:
          "The public catalogue is designed around product discovery and direct customer action. Visitors can search and filter products, sort results, inspect product galleries and details, view availability information, and contact the business through WhatsApp or phone.",
      },
      {
        number: "04",
        title: "Technical implementation",
        body:
          "The platform is built with Next.js and TypeScript, with Supabase providing authentication, database persistence, and image storage. Catalogue data and product information are persisted independently, while public catalogue routes dynamically load the published business and product data.",
      },
      {
        number: "05",
        title: "Publishing workflow",
        body:
          "The platform supports a clear draft-to-published workflow. Catalogue owners can save changes as drafts, publish a catalogue when it is ready, and later unpublish it when it should no longer be publicly accessible.",
      },
    ],
    capabilities: [
      "Catalogue creation and management",
      "Product management",
      "Product categories and SKUs",
      "Stock availability states",
      "Product sizes, colours and tags",
      "Multi-image product galleries",
      "Catalogue design configuration",
      "Draft and published states",
      "Public catalogue pages",
      "Product search and filtering",
      "Product sorting",
      "WhatsApp ordering",
      "Catalogue sharing",
      "SEO and structured product data",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Supabase Storage"],
    role: "Founder & Developer",
    status: "Active Development",
  },
];
