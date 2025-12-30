// components/SeoHead.jsx
import { Helmet } from "react-helmet-async";

const SeoHead = () => {
  // const siteUrl = "https://columnadelaverdad.x10.mx";
  // const siteTitle = "Iglesia Columna de la Verdad de Cojimar";
  // const siteDescription =
  //   "Iglesia Evangélica Pentecostal de las Asambleas de Dios en Cojimar, La Habana Cuba";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Iglesia Columna de la Verdad de Cojimar",
    url: "https://columnadelaverdad.x10.mx",
    logo: `https://columnadelaverdad.x10.mx/images/logo.png`,
    description:
      "Iglesia Evangélica Pentecostal de las Asambleas de Dios en Cojimar, La Habana Cuba",
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
      <title>{"Iglesia Columna de la Verdad de Cojimar"}</title>
      <meta
        name="description"
        content={
          "Iglesia Evangélica Pentecostal de las Asambleas de Dios en Cojimar, La Habana Cuba"
        }
      />
      <link rel="canonical" href={"https://columnadelaverdad.x10.mx"} />

      {/* Open Graph - Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://columnadelaverdad.x10.mx" />
      <meta
        property="og:title"
        content={"Iglesia Columna de la Verdad de Cojimar"}
      />
      <meta
        property="og:description"
        content={
          "Iglesia Evangélica Pentecostal de las Asambleas de Dios en Cojimar, La Habana Cuba"
        }
      />
      <meta
        property="og:image"
        content={`https://columnadelaverdad.x10.mx/images/og-image.jpg`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Columna de la Verdad" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={"Iglesia Columna de la Verdad de Cojimar"}
      />
      <meta
        name="twitter:description"
        content={
          "Iglesia Evangélica Pentecostal de las Asambleas de Dios en Cojimar, La Habana Cuba"
        }
      />
      <meta
        name="twitter:image"
        content={"https://columnadelaverdad.x10.mx/images/twitter-image.jpg"}
      />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SeoHead;
