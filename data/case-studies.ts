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

  {
    slug: "yobby-kicks",
    eyebrow: "CASE STUDY / COMMERCE",
    headline: "Building a digital storefront for a real local footwear business.",
    introduction:
      "Yobby Kicks is a real-world commerce website project created to give an independent footwear business a professional digital presence and a practical way to showcase products online.",
    sections: [
      {
        number: "01",
        title: "The challenge",
        body:
          "A local footwear business needs more than a social-media presence to establish a professional digital identity. Customers need a clear place to discover products, understand what the business offers, and move naturally from product discovery to contact.",
      },
      {
        number: "02",
        title: "The solution",
        body:
          "Yobby Kicks was developed as a focused commerce website that puts the business and its products at the centre of the experience. The project combines product presentation, customer-facing information, contact pathways, and a structured web presence into one branded experience.",
      },
      {
        number: "03",
        title: "The product experience",
        body:
          "The website is designed around straightforward product discovery and customer action. Product presentation is supported by a responsive interface, while customer contact pathways make it easier for interested buyers to move from browsing toward an enquiry.",
      },
      {
        number: "04",
        title: "Technical implementation",
        body:
          "The project uses Next.js and TypeScript for the application layer, Tailwind CSS for the interface, and Supabase for backend data workflows. The implementation also includes foundations for search visibility and an administrative product-management workflow.",
      },
      {
        number: "05",
        title: "Real-world deployment",
        body:
          "Unlike a purely conceptual portfolio exercise, Yobby Kicks was developed around an actual independent business and deployed as a live website. It serves as an example of turning a real business requirement into a working digital product.",
      },
    ],
    capabilities: [
      "Responsive business website",
      "Product presentation",
      "Commerce-focused user experience",
      "Customer contact pathways",
      "Administrative product workflow",
      "Supabase-backed data",
      "SEO foundations",
      "Mobile-first interface",
      "Production deployment",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    role: "Developer",
    status: "Live",
  },

  {
    slug: "bkm-digital",
    eyebrow: "CASE STUDY / DIGITAL ECOSYSTEM",
    headline: "Building a digital solutions brand around practical products.",
    introduction:
      "BKM DIGITAL is a growing digital solutions initiative bringing together websites, catalogues, digital products, and practical technology services under one long-term brand.",
    sections: [
      {
        number: "01",
        title: "The vision",
        body:
          "The goal behind BKM DIGITAL is to build more than isolated websites. It is being developed as a long-term digital solutions ecosystem capable of turning practical business and technology needs into useful products and services.",
      },
      {
        number: "02",
        title: "The ecosystem",
        body:
          "The broader BKM DIGITAL direction brings together product areas such as BKM Websites, BKM Catalogue, BKM Guide, online business solutions, and future digital products. Each initiative can stand on its own while contributing to a larger technology brand.",
      },
      {
        number: "03",
        title: "Product-first approach",
        body:
          "The approach is centred on building useful working products rather than presenting technology for its own sake. BKM Catalogue and Yobby Kicks provide practical examples of how the brand's ideas are translated into deployed digital experiences.",
      },
      {
        number: "04",
        title: "Technical foundation",
        body:
          "The current product direction uses modern web technologies including Next.js, TypeScript, and Supabase. This foundation provides a consistent starting point for building responsive interfaces, data-backed applications, and scalable digital products.",
      },
      {
        number: "05",
        title: "Long-term direction",
        body:
          "BKM DIGITAL is being developed progressively, with each product contributing to a broader professional portfolio and business ecosystem. The focus is on practical execution, continuous improvement, and building solutions that can create real value for businesses and users.",
      },
    ],
    capabilities: [
      "Digital product development",
      "Business websites",
      "Digital catalogue solutions",
      "E-commerce experiences",
      "Web application development",
      "Technology-focused product design",
      "Business-oriented digital solutions",
      "Product prototyping and deployment",
      "Long-term digital ecosystem development",
    ],
    stack: ["Next.js", "TypeScript", "Supabase"],
    role: "Founder & Developer",
    status: "Active Development",
  },
];
