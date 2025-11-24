// components/SeoHead.jsx
import { Helmet } from "react-helmet-async";

const SeoHead = () => {
  const siteUrl = "https://columnadelaverdad.x10.mx";
  const siteTitle = "Iglesia Columna de la Verdad de Cojimar";
  const siteDescription =
    "Iglesia Evangélica Pentecostal de las Asambleas de Dios en Cojimar, La Habana Cuba";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteTitle,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cojimar",
      addressRegion: "La Habana",
      addressCountry: "CU",
    },
    sameAs: [
      "https://www.facebook.com/share/1Cn3vdVuHn", // Reemplaza con tu Facebook real
    ],
  };

  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph - Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}/images/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Columna de la Verdad" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta
        name="twitter:image"
        content={`${siteUrl}/images/twitter-image.jpg`}
      />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SeoHead;
