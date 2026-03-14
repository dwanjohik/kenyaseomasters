import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const SITE_URL = "https://www.kenyaseomasters.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEO Company in Kenya | Kenya SEO Masters – Search Engine Optimization Kenya",
    template: "%s | Kenya SEO Masters",
  },
  description:
    "Kenya SEO Masters is the leading SEO company in Kenya. Expert search engine optimization, website design, and digital marketing services. Get a free SEO audit today.",
  keywords: [
    "seo company in kenya",
    "seo company kenya",
    "seo kenya",
    "seo companies in kenya",
    "seo in kenya",
    "kenya seo",
    "search engine optimization kenya",
    "website design kenya",
    "website designers kenya",
    "web designers kenya",
    "kenya website developers",
    "website design in kenya",
    "web design in kenya",
    "website designers in kenya",
    "website developers kenya",
    "web design kenya",
  ],
  authors: [{ name: "Kenya SEO Masters", url: SITE_URL }],
  creator: "Kenya SEO Masters",
  publisher: "Kenya SEO Masters",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Kenya SEO Masters",
    title: "SEO Company in Kenya | Kenya SEO Masters",
    description:
      "Leading SEO company in Kenya offering expert search engine optimization, website design, and digital marketing. Free audit available.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kenya SEO Masters – Leading SEO Company in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Kenya | Kenya SEO Masters",
    description:
      "Leading SEO company in Kenya. Expert search engine optimization, website design & digital marketing. Get a free audit today.",
    images: ["/og-image.png"],
    creator: "@KenyaSEOMasters",
  },
  alternates: { canonical: SITE_URL },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  verification: { google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "Kenya SEO Masters",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      description:
        "Kenya SEO Masters is the leading SEO company in Kenya providing search engine optimization, website design, and digital marketing services.",
      telephone: "+254700000000",
      email: "info@kenyaseomasters.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Westlands Business Park, 4th Floor",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        postalCode: "00100",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.2744,
        longitude: 36.8116,
      },
      areaServed: [
        { "@type": "City", name: "Nairobi" },
        { "@type": "City", name: "Mombasa" },
        { "@type": "City", name: "Kisumu" },
        { "@type": "Country", name: "Kenya" },
      ],
      priceRange: "KES 50,000 – KES 150,000",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.facebook.com/kenyaseomasters",
        "https://www.twitter.com/kenyaseomasters",
        "https://www.linkedin.com/company/kenyaseomasters",
        "https://www.instagram.com/kenyaseomasters",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Kenya SEO Masters",
      description: "Leading SEO Company in Kenya",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
