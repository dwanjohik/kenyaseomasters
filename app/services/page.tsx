// Server Component — no 'use client'
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/PricingCard";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services in Kenya | Search Engine Optimization Packages",
  description:
    "Explore our SEO services in Kenya. Affordable SEO companies in Kenya packages covering on-page SEO, off-page link building, technical SEO, and content marketing. Get a free audit.",
  alternates: { canonical: "https://www.kenyaseomasters.com/services" },
  openGraph: {
    title: "SEO Services in Kenya | Search Engine Optimization Packages",
    description:
      "Affordable SEO services in Kenya. On-page, off-page, technical SEO & content marketing packages tailored for Kenyan businesses. Free audit available.",
    url: "https://www.kenyaseomasters.com/services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Search Engine Optimization",
  provider: {
    "@type": "LocalBusiness",
    name: "Kenya SEO Masters",
    url: "https://www.kenyaseomasters.com",
  },
  areaServed: { "@type": "Country", name: "Kenya" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kenya SEO Packages",
    itemListElement: [
      { "@type": "Offer", name: "Basic SEO Kenya", price: "50000", priceCurrency: "KES" },
      { "@type": "Offer", name: "Standard SEO Kenya", price: "100000", priceCurrency: "KES" },
      { "@type": "Offer", name: "Premium SEO Kenya", price: "150000", priceCurrency: "KES" },
    ],
  },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      <div className="pt-32 pb-20 bg-accent/30">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-primary font-bold tracking-widest uppercase text-sm mb-4">
            SEO Companies in Kenya
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            SEO Services &amp; Packages in Kenya
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive <strong>search engine optimization Kenya</strong> solutions built for the local market. Choose the package that matches your growth ambitions.
          </p>
        </div>
      </div>

      <div className="py-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <PricingCard
            title="Basic SEO Kenya"
            price="KES 50,000"
            description="Best for small businesses and startups beginning their SEO in Kenya journey."
            features={[
              { text: "Detailed Website SEO Audit", included: true },
              { text: "Google Analytics & Search Console Setup", included: true },
              { text: "Local Keyword Research", included: true },
              { text: "Core On-Page Optimization", included: true },
              { text: "Google Business Profile Optimization", included: true },
              { text: "2 SEO Blog Articles / Month", included: true },
              { text: "100 Quality Backlinks", included: true },
              { text: "Monthly Performance Report", included: true },
              { text: "Competitor Analysis", included: false },
              { text: "Schema Markup", included: false },
            ]}
          />
          <PricingCard
            title="Standard SEO Kenya"
            price="KES 100,000"
            description="Ideal for growing Kenyan businesses targeting competitive SEO keywords."
            isPopular={true}
            features={[
              { text: "Advanced Website Audit", included: true },
              { text: "Full On-Page Optimization", included: true },
              { text: "Strong Off-Page Link Building", included: true },
              { text: "Technical SEO Fixes", included: true },
              { text: "4 SEO Blog Articles / Month", included: true },
              { text: "150 High-Authority Backlinks", included: true },
              { text: "Schema Markup Implementation", included: true },
              { text: "Detailed Competitor Analysis", included: true },
              { text: "Authority Research", included: false },
            ]}
          />
          <PricingCard
            title="Premium SEO Kenya"
            price="KES 150,000"
            description="For competitive niches requiring complete Kenya SEO dominance."
            features={[
              { text: "Enterprise SEO Audit", included: true },
              { text: "Authority Research & Strategy", included: true },
              { text: "High-Authority Off-Page SEO", included: true },
              { text: "Conversion Rate Optimization", included: true },
              { text: "6 SEO Blog Articles / Month", included: true },
              { text: "200+ Premium Backlinks", included: true },
              { text: "Monthly Strategy Call", included: true },
              { text: "Priority Support", included: true },
              { text: "Custom Analytics Dashboard", included: true },
            ]}
          />
        </div>

        {/* Detailed Service Breakdown */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4">
            What Our Kenya SEO Services Include
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            As one of the top <strong>SEO companies in Kenya</strong>, every package we deliver covers the three pillars of modern search engine optimization: on-page, off-page, and technical SEO.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">On-Page SEO in Kenya</h3>
              <p className="text-muted-foreground mb-4">
                We optimize every element of your website so Google understands exactly what you offer and who to show it to. For Kenyan businesses, this includes targeting location-specific keywords and search intent.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Meta Title & Description Optimization",
                  "Heading Tag Structure (H1, H2, H3)",
                  "Image Alt Text & Compression",
                  "Internal Linking Architecture",
                  "Content Keyword Optimization",
                  "URL Structure & Canonicalization",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <Check className="w-4 h-4 text-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Off-Page SEO &amp; Link Building Kenya</h3>
              <p className="text-muted-foreground mb-4">
                Google treats backlinks as votes of confidence. Our <strong>Kenya SEO</strong> link building strategy focuses on earning high-quality, relevant links from authoritative websites that strengthen your domain authority.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Guest Posting on Relevant Kenyan Blogs",
                  "Local Directory & Citation Building",
                  "Press Release Distribution",
                  "Social Signal Building",
                  "Broken Link Reclamation",
                  "Competitor Backlink Analysis",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <Check className="w-4 h-4 text-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Technical SEO Kenya</h3>
              <p className="text-muted-foreground mb-4">
                A technically sound website is the foundation of all <strong>search engine optimization in Kenya</strong>. We audit and fix all technical barriers preventing Google from crawling, indexing, and ranking your site.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "XML Sitemap Generation & Submission",
                  "Robots.txt Optimization",
                  "Core Web Vitals & Page Speed",
                  "Mobile-First Optimization",
                  "SSL/HTTPS Security Checks",
                  "Broken Link & 404 Error Fixes",
                  "Schema Markup (Structured Data)",
                  "Crawl Budget Optimization",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <Check className="w-4 h-4 text-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-form SEO content for /services page */}
            <div className="prose prose-lg dark:prose-invert max-w-none pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-primary">
                Why Choose Kenya SEO Masters as Your SEO Company in Kenya?
              </h3>
              <p className="text-muted-foreground">
                There are many self-proclaimed <strong>SEO companies in Kenya</strong>, but very few that combine deep technical expertise with genuine local market knowledge. Since our founding, Kenya SEO Masters has helped over 50 businesses — from real estate agencies in Westlands to e-commerce stores serving all of East Africa — achieve and sustain first-page Google rankings.
              </p>
              <p className="text-muted-foreground">
                Our approach to <strong>SEO in Kenya</strong> is built on three commitments: transparency (you get full monthly reports showing exactly what we did and what it achieved), ownership (all content and backlinks we build belong to you, forever), and results (we track rankings, organic traffic, and leads — not vanity metrics). Whether you need local SEO for a Nairobi business or national <strong>search engine optimization Kenya</strong> for a brand serving the entire country, we have a proven process to get you there.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
