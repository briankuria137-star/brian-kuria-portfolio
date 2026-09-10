import { siteConfig } from "@/lib/site";

export function WebsiteStructuredData() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: siteConfig.professional.headline,
      description: siteConfig.description,
      email: `mailto:${siteConfig.social.email}`,
      address: {
        "@type": "Country",
        name: siteConfig.location,
      },
      sameAs: [
        siteConfig.social.linkedin,
      ].filter(Boolean),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: {
        "@id": personId,
      },
    },
  ];

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
    </>
  );
}
