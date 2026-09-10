import type { Project } from "@/data/projects";

interface ProjectStructuredDataProps {
  project: Project;
}

export function ProjectStructuredData({
  project,
}: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.longDescription ?? project.description,
    creator: {
      "@type": "Person",
      name: "Brian Kuria",
    },
    author: {
      "@type": "Person",
      name: "Brian Kuria",
    },
    inLanguage: "en",
    genre: project.category,
    keywords: project.technologies.join(", "),
    ...(project.liveUrl ? { url: project.liveUrl } : {}),
    ...(project.githubUrl
      ? {
          codeRepository: project.githubUrl,
        }
      : {}),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Role",
        value: project.role,
      },
      {
        "@type": "PropertyValue",
        name: "Status",
        value: project.status,
      },
      {
        "@type": "PropertyValue",
        name: "Technology Stack",
        value: project.technologies.join(", "),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
