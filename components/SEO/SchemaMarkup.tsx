// Global structured data — injected once in root layout
// No visual output — pure SEO / AI-search signal (Organization, MedicalBusiness, WebSite)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness", "MedicalOrganization", "LocalBusiness"],
  "@id": "https://gmedco.com/#organization",
  name: "Global Medical Co.",
  legalName: "Global Medical Company W.L.L.",
  alternateName: ["GMEDCO", "Global Medical Company Qatar", "Global Medical Co Qatar", "الشركة الطبية العالمية"],
  url: "https://gmedco.com",
  logo: { "@type": "ImageObject", url: "https://gmedco.com/images/logo/logo.png", width: 300, height: 100 },
  image: "https://gmedco.com/images/og-image.jpg",
  slogan: "Complete Medical Solutions for the Middle East",
  description: "GMEDCO (Global Medical Co.) is Qatar's leading complete medical solutions provider — supplying aesthetic devices, dermal fillers, injectables, laser systems, body contouring, hospital equipment, laboratory products and medical consumables. Authorized distributor of Restylane, Motiva, Mia Femtech, ONAD, Emsculpt, Cooltech and 40+ international medical brands across Qatar, UAE, Bahrain and the GCC.",
  foundingDate: "2010",
  telephone: "+97444421661",
  email: "info@gmedco.com",
  priceRange: "$$$",
  currenciesAccepted: "QAR, USD, AED",
  paymentAccepted: "Bank Transfer, Credit Card, Letter of Credit",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Doha", addressLocality: "Doha",
    addressRegion: "Ad Dawhah", addressCountry: "QA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 25.2854, longitude: 51.531 },
  hasMap: "https://maps.google.com/?q=Global+Medical+Co+Doha+Qatar",
  areaServed: [
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Oman" },
    { "@type": "AdministrativeArea", name: "Gulf Cooperation Council" },
    { "@type": "AdministrativeArea", name: "Middle East" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+97444421661",
      contactType: "sales",
      areaServed: ["QA","AE","BH","SA","KW","OM"],
      availableLanguage: ["English","Arabic"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+97444421661",
      contactType: "customer support",
      areaServed: "Middle East",
      availableLanguage: ["English","Arabic"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/global_medicalqatar/",
    "https://www.linkedin.com/company/global-medical-co",
  ],
  medicalSpecialty: ["Dermatology","PlasticSurgery","Dietetics"],
  knowsAbout: [
    "Medical Equipment","Aesthetic Devices","Dermal Fillers","Injectables","PRP",
    "Exosomes","Thread Lifts","Hair Restoration","Body Contouring","Laser Systems",
    "Skin Rejuvenation","Anti-Aging Solutions","Breast Implants","Breast Harmonization",
    "Hospital Equipment","ICU Solutions","Operating Theatre Equipment","Hospital Furniture",
    "Patient Monitoring","Surgical Equipment","Laboratory Analyzers","Diagnostic Equipment",
    "Medical Consumables","NAD+ Skincare","Restylane","Motiva","Mia Femtech","ONAD",
    "Emsculpt","Cooltech","Healthcare Solutions Qatar","GCC Medical Market",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Medical Equipment & Aesthetic Solutions",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Aesthetic Devices & Laser Systems" },
      { "@type": "OfferCatalog", name: "Dermal Fillers & Injectables" },
      { "@type": "OfferCatalog", name: "Body Contouring Equipment" },
      { "@type": "OfferCatalog", name: "Breast Implants & Harmonization" },
      { "@type": "OfferCatalog", name: "Hair Restoration & PRP Solutions" },
      { "@type": "OfferCatalog", name: "Hospital Equipment & Furniture" },
      { "@type": "OfferCatalog", name: "Laboratory Products & Diagnostics" },
      { "@type": "OfferCatalog", name: "Medical Consumables" },
      { "@type": "OfferCatalog", name: "Professional Skincare" },
    ],
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
    opens: "08:00", closes: "17:00",
  }],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://gmedco.com/#website",
  name: "GMEDCO — Global Medical Co.",
  url: "https://gmedco.com",
  description: "Complete medical solutions provider in Qatar and the GCC — aesthetic devices, dermal fillers, hospital and laboratory equipment.",
  publisher: { "@id": "https://gmedco.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://gmedco.com/products?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-QA",
};

export default function SchemaMarkup() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
