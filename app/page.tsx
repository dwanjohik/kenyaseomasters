// NO 'use client' — this is a Server Component for full SEO crawlability
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/PricingCard";
import { ContactForm } from "@/components/ContactForm";
import { HeroAnimated } from "@/components/HeroAnimated";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, Globe, Search, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Company in Kenya | Expert Search Engine Optimization Kenya",
  description:
    "Kenya SEO Masters is the top SEO company in Kenya. We deliver proven search engine optimization, Kenya SEO strategies, and web design that get your business to page one of Google.",
  alternates: { canonical: "https://www.kenyaseomasters.com/" },
  openGraph: {
    title: "SEO Company in Kenya | Expert Search Engine Optimization Kenya",
    description:
      "Top-rated SEO company in Kenya. Proven Kenya SEO strategies, expert search engine optimization, and web design. Get a free audit today.",
    url: "https://www.kenyaseomasters.com/",
  },
};

// FAQ Schema for homepage – targets Kenya SEO questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does SEO cost in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO packages in Kenya start at KES 50,000 per month for small businesses. Our packages scale up to KES 150,000 for enterprise-level search engine optimization campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Which is the best SEO company in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kenya SEO Masters is widely regarded as the leading SEO company in Kenya, with a proven track record helping 50+ businesses achieve page-one rankings on Google.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to work in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Kenya SEO campaigns begin showing meaningful ranking improvements within 3–6 months. Long-term, SEO delivers compounding returns unlike paid advertising.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide website design services in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer professional website design in Kenya built for speed, mobile responsiveness, and SEO — ensuring your site ranks and converts from day one.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* HERO — client component to preserve framer-motion animations */}
      <HeroAnimated />

      {/* WHY SEO IN KENYA */}
      <section className="py-20 bg-accent/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-foreground">
                Why Kenyan Businesses Need Professional SEO in Kenya
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Kenyan digital market is expanding rapidly. Millions of Kenyans search Google every day for products and services yet most local business websites never appear on page one. Without a dedicated{" "}
                <strong>SEO company in Kenya</strong>, you are invisible to your best customers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Kenya SEO Masters, we specialize in <strong>SEO in Kenya</strong> combining local market knowledge with internationally proven techniques to help your business dominate search results in Nairobi, Mombasa, Kisumu, and across the country.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-background rounded-xl shadow-sm border border-border/50">
                  <h4 className="text-3xl font-bold text-primary mb-1">93%</h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    Of Online Experiences Begin with a Search Engine
                  </p>
                </div>
                <div className="p-4 bg-background rounded-xl shadow-sm border border-border/50">
                  <h4 className="text-3xl font-bold text-secondary mb-1">14x</h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    Higher Close Rate for Organic SEO Leads vs Outbound
                  </p>
                </div>
              </div>
            </div>
            {/* Animated SEO Dashboard */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-full bg-slate-800/50 rounded-xl p-4 mb-4 border border-white/10 backdrop-blur-sm">
                    <div className="h-2 w-1/3 bg-slate-700 rounded mb-4" />
                    <div className="flex gap-2 items-end h-32 justify-between px-2">
                      {[30, 45, 40, 60, 55, 80, 95].map((h, i) => (
                        <div key={i} className="w-8 bg-primary rounded-t-sm opacity-80" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-xl">Organic Traffic Growth</h3>
                  <p className="text-slate-400 text-sm mt-2">Real results from Kenya SEO campaigns</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — focused on SEO keywords, web design on its own page */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What We Do as a Leading SEO Company in Kenya
            </h2>
            <p className="text-lg text-muted-foreground">
              From search engine optimization to web design in Kenya we are the full-service digital agency Kenyan businesses trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Search Engine Optimization Kenya</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Broad <strong>Kenyan SEO</strong>; keyword research, on-page optimization, technical audits, and high-authority link building that moves your site to page one and keeps it there.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:underline flex items-center">
                View SEO Packages <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Website Design in Kenya</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fast, mobile-first websites crafted by expert <strong>website designers in Kenya</strong>. Every site we build is engineered to rank on Google and convert visitors into customers.
              </p>
              <Link href="/web-design" className="text-primary font-semibold hover:underline flex items-center">
                Explore Web Design <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Content &amp; Digital Marketing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SEO-driven content strategies; blog articles, landing pages, and link building that cement your authority in the Kenyan market and drive sustainable organic traffic.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:underline flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Transparent Kenya SEO Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible packages for every stage of growth, no hidden fees, no long-term lock-ins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Basic SEO Kenya"
              price="KES 50,000"
              description="Ideal for small businesses and startups beginning their Kenya SEO journey."
              features={[
                { text: "Full Website SEO Audit", included: true },
                { text: "Local Keyword Research", included: true },
                { text: "Core On-Page Optimization", included: true },
                { text: "Google Business Profile Setup", included: true },
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
              description="For growing Kenyan businesses competing for high-value search terms."
              isPopular={true}
              features={[
                { text: "Advanced SEO Audit", included: true },
                { text: "Full On-Page Optimization", included: true },
                { text: "Technical SEO Fixes", included: true },
                { text: "Strong Off-Page Strategy", included: true },
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
              description="For competitive industries requiring total search engine dominance in Kenya."
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
        </div>
      </section>

      {/* LONG-FORM SEO CONTENT — primary keyword focus: SEO company in Kenya / seo kenya */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Search Engine Optimization in Kenya
            </h2>

            <h3 className="text-2xl font-bold text-primary mt-8">What is SEO and Why Does it Matter for Kenyan Businesses?</h3>
            <p className="text-muted-foreground">
              <strong>Search engine optimization (SEO)</strong> is the process of improving your website so it ranks higher in Google search results. For businesses across Kenya, good <strong>SEO in Kenya</strong> means appearing on page one when potential customers search for your products or services. Unlike paid advertising, organic rankings from SEO continue generating traffic and leads long after the initial work is done, making it the highest-ROI digital marketing investment available to Kenyan businesses.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8">What Do SEO Companies in Kenya Actually Do?</h3>
            <p className="text-muted-foreground">
              The best <strong>SEO companies in Kenya</strong> combine several disciplines: keyword research to identify what your customers are searching for; on-page optimization to ensure your content clearly answers those searches; technical SEO to make your site fast, secure, and easily crawlable; link building to earn authority from other reputable websites; and local SEO to ensure you appear in Google Maps and location-based searches across Nairobi, Mombasa, Kisumu, and beyond. At Kenya SEO Masters, we handle all of this under one roof.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8">Kenya SEO vs. Generic SEO: Why Local Expertise Matters</h3>
            <p className="text-muted-foreground">
              <strong>Kenya SEO</strong> is not the same as running a generic global SEO campaign. The Kenyan market has unique search behaviors, competitive landscapes, and local intent signals that require deep local understanding. For example, searches like "SEO company Kenya" or "web designers Kenya" have very different competitive profiles than their equivalents in Europe or North America. Our team lives and works in Kenya we know what Kenyan searchers want, what Kenyan Google results look like, and how to beat your local competitors on the SERPs that matter to your business.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8">How Long Does Kenya SEO Take to Deliver Results?</h3>
            <p className="text-muted-foreground">
              Most <strong>Kenya SEO</strong> campaigns begin showing meaningful improvement in 3–6 months. Technical fixes and on-page optimization often produce quick gains within the first 30–60 days, while link building and content authority compounds over time. The key advantage of SEO over pay-per-click advertising: your rankings and traffic continue growing even when you are not actively spending delivering compounding returns on your investment for years.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Frequently Asked Questions About SEO in Kenya
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does SEO cost in Kenya?",
                a: "Our Kenya SEO packages start at KES 50,000 per month for small businesses, scaling up based on the competitiveness of your industry and target keywords.",
              },
              {
                q: "Which is the best SEO company in Kenya?",
                a: "Kenya SEO Masters is widely recognized as the leading SEO company in Kenya, with a proven track record of helping 50+ Kenyan businesses achieve and maintain page-one rankings.",
              },
              {
                q: "Can you guarantee #1 rankings on Google?",
                a: "No ethical SEO company in Kenya can guarantee specific rankings Google's algorithm is constantly evolving. We guarantee proven best practices, full transparency, and a track record of significant ranking improvements.",
              },
              {
                q: "Do I need SEO every month or is it a one-time service?",
                a: "SEO in Kenya requires ongoing effort. Competitors are always optimizing and Google updates its algorithm hundreds of times per year. A monthly retainer keeps your site competitive and growing.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Dominate Kenya SEO?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Stop watching competitors take customers that should be yours. Partner with the most trusted SEO company in Kenya and start ranking today.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free Website SEO Audit Included",
                  "Custom Strategy Session for Your Industry",
                  "No Long-Term Contracts Required",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <div className="bg-white/20 p-1 rounded-full">
                      <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-foreground">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
