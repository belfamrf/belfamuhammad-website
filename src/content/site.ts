// The site's public address and the facts search engines read about Belfa.
export const SITE_URL = "https://www.belfamuhammad.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/belfa-muhammad-ravi-firmansyah-103387225/";

export const SITE_TITLE = "Belfa Muhammad · Premium websites, designed by a marketer";
export const SITE_DESCRIPTION =
  "Web designer with 6–7 years in marketing and branding. Websites that look premium and get people to book, buy or get in touch. Based in Indonesia, working with clients worldwide.";

// schema.org data for search engines: who Belfa is and what is offered.
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Belfa Muhammad Ravi Firmansyah",
      alternateName: "Belfa Muhammad",
      jobTitle: "Web designer",
      url: SITE_URL,
      image: `${SITE_URL}/belfa.jpg`,
      sameAs: [LINKEDIN_URL],
      address: { "@type": "PostalAddress", addressCountry: "ID" },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Belfa Muhammad",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: "Worldwide",
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Website design and build" },
          priceSpecification: { "@type": "PriceSpecification", minPrice: 900, priceCurrency: "USD" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Brand identity" },
          priceSpecification: { "@type": "PriceSpecification", minPrice: 600, priceCurrency: "USD" },
        },
      ],
    },
  ],
};
