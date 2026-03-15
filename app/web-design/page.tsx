// Server Component — no 'use client'
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Layout, Server, Zap, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design Kenya | Professional Web Designers & Developers Kenya",
  description:
    "Expert website design in Kenya by the top web designers in Kenya. We build fast, SEO-optimized, mobile-first websites. Kenya website developers you can trust.",
  alternates: { canonical: "https://www.kenyaseomasters.com/web-design" },
  openGraph: {
    title: "Website Design Kenya | Professional Web Designers & Developers Kenya",
    description:
      "Top web designers in Kenya creating fast, SEO-ready, mobile-first websites. Expert website developers Kenya serving all industries.",
    url: "https://www.kenyaseomasters.com/web-design",
  },
};

const webDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design and Development",
  name: "Website Design Kenya",
  provider: {
    "@type": "LocalBusiness",
    name: "Kenya SEO Masters",
    url: "https://www.kenyaseomasters.com",
  },
  areaServed: { "@type": "Country", name: "Kenya" },
  description:
    "Professional website design in Kenya. Our web designers in Kenya build SEO-optimized, mobile-first, fast-loading websites for businesses across Kenya.",
};

export default function WebDesign() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDesignSchema) }}
      />
      <Navbar />

      {/* HERO */}
      <div className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
            Web Design in Kenya
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Website Design &amp; Development in Kenya
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            We are expert <strong className="text-white">website designers in Kenya</strong> building fast, mobile-first, SEO-optimized sites that rank on Google and convert visitors into customers.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-blue-600 text-white font-bold h-14 px-8 text-lg">
              Start Your Website Project
            </Button>
          </Link>
        </div>
      </div>

      {/* THREE PILLARS */}
      <div className="py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Kenya&apos;s Best Web Designers Deliver
          </h2>
          <p className="text-lg text-muted-foreground">
            As leading <strong>website developers in Kenya</strong>, we combine beautiful design with technical excellence and SEO foundations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold">Custom Web Design Kenya</h3>
            <p className="text-muted-foreground leading-relaxed">
              No templates. Every website we design in Kenya is custom-built to your brand identity, ensuring a unique, professional presence that stands out from competitors. All designs are fully responsive across mobile, tablet, and desktop.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 text-secondary rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold">Domain &amp; .co.ke Registration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your brand starts with the right domain. We help you secure the perfect .co.ke, .com, or .africa domain name that is memorable, authoritative, and signals local relevance to Kenyan searchers and Google alike.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold">Fast Kenya Web Hosting</h3>
            <p className="text-muted-foreground leading-relaxed">
              Page speed is a Google ranking factor. Our hosting solutions offer 99.9% uptime, daily backups, and lightning-fast response times keeping both Google and your Kenyan visitors happy.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Code/laptop visual */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                  alt="Web designers in Kenya working on website development"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Why Choose Our Web Designers in Kenya?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Many <strong>website designers in Kenya</strong> offer cheap sites that look good but rank nowhere. We are different our <strong>web design in Kenya</strong> process begins with an SEO strategy, ensuring every page is built to attract organic traffic from day one.
              </p>
              <ul className="space-y-4">
                {[
                  "SEO-First: Built to rank on Google from line one of code",
                  "Speed-Optimized: We target sub-2-second load times",
                  "Mobile-First: Designed for Kenya's predominantly mobile audience",
                  "Secure: Free SSL certificate and security hardening included",
                  "Easy to Manage: WordPress CMS that you can update yourself",
                  "Conversion-Focused: Designed to turn visitors into leads",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* LONG-FORM CONTENT — targets web design Kenya keywords */}
      <div className="py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-display font-bold text-3xl text-foreground">
              Everything You Need to Know About Website Design in Kenya
            </h2>

            <h3 className="text-2xl font-bold text-primary mt-8">
              What Does Professional Web Design in Kenya Cost?
            </h3>
            <p className="text-muted-foreground">
              <strong>Website design in Kenya</strong> typically ranges from KES 30,000 for a basic 5-page brochure site to KES 500,000+ for a complex e-commerce platform or custom web application. At Kenya SEO Masters, our standard business websites start at KES 60,000 and include professional design, mobile responsiveness, SSL security, basic on-page SEO, and a user-friendly CMS so you can manage content without technical expertise.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8">
              What Makes a Good Website in Kenya?
            </h3>
            <p className="text-muted-foreground">
              The best websites built by <strong>web designers Kenya</strong> share several characteristics: they load in under 3 seconds on mobile (critical for Kenya's predominantly mobile internet users), they are secured with HTTPS, they have clear calls-to-action on every page, and they are structured to rank on Google for relevant Kenyan search terms. A beautiful site that no one finds is worthless which is why our <strong>Kenya website developers</strong> build SEO into every project from the very beginning.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8">
              Web Design Kenya vs. DIY Website Builders
            </h3>
            <p className="text-muted-foreground">
              Tools like Wix and Squarespace can get a basic site online quickly, but they have significant limitations for businesses serious about <strong>web design Kenya</strong>: limited SEO control, slow page speeds, restricted customization, and no support from local <strong>website developers Kenya</strong> who understand your market. For a business investing in growth, a professionally designed and SEO-optimized website from expert <strong>web designers in Kenya</strong> will generate far more leads and revenue over time.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8">
              Our Web Design Process in Kenya
            </h3>
            <p className="text-muted-foreground">
              Our <strong>website design Kenya</strong> process begins with a discovery session to understand your business, competitors, and target customers. We then build an SEO keyword strategy before any design work begins, ensuring your sitemap and page structure is optimized for search. Design mockups are approved before development, and every site is tested across devices and browsers before launch. Post-launch, we offer optional ongoing SEO and maintenance packages to keep your site growing.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Work with Kenya&apos;s Best Web Designers?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a professionally designed, SEO-optimized website that ranks on Google and converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-bold h-14 px-8 text-lg">
                Get a Free Website Quote
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold h-14 px-8 text-lg">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
