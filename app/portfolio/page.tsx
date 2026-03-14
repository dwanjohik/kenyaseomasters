// Server Component — no 'use client'
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | Kenya SEO & Web Design Case Studies",
  description:
    "Explore real results from Kenya SEO Masters. See how our SEO company in Kenya and web design services have transformed businesses across Nairobi and Kenya.",
  alternates: { canonical: "https://www.kenyaseomasters.com/portfolio" },
  openGraph: {
    title: "Portfolio | Kenya SEO & Web Design Case Studies",
    description:
      "Real results from Kenya's top SEO company. Web design and SEO case studies across Nairobi and Kenya.",
    url: "https://www.kenyaseomasters.com/portfolio",
  },
};

const PROJECTS = [
  {
    category: "E-Commerce SEO Kenya",
    title: "Fashion Retailer – Nairobi CBD",
    result: "+250% Organic Traffic in 5 Months",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    alt: "E-commerce SEO Kenya case study – fashion retailer Nairobi",
  },
  {
    category: "Web Design & Local SEO Kenya",
    title: "Dental Clinic – Westlands Nairobi",
    result: "#1 Ranking for 'Dentist Nairobi'",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    alt: "Local SEO and website design Kenya – dental clinic Westlands",
  },
  {
    category: "Corporate Website Design Kenya",
    title: "Logistics Company – Mombasa",
    result: "Professional Rebrand + 180% More Enquiries",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    alt: "Website design Kenya – logistics company Mombasa corporate site",
  },
  {
    category: "Real Estate SEO Kenya",
    title: "Property Agency – Nairobi",
    result: "300+ Qualified Leads Per Month",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    alt: "Real estate SEO company Kenya – property agency Nairobi",
  },
  {
    category: "Tourism SEO Kenya",
    title: "Safari Operator – Masai Mara",
    result: "Top 3 Google Rankings for International Searches",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    alt: "Tourism SEO Kenya – safari operator Masai Mara international rankings",
  },
  {
    category: "Fintech Web Design Kenya",
    title: "Mobile Lending Platform – Kenya",
    result: "50,000+ App Installs via Organic SEO",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    alt: "Fintech website design Kenya – mobile lending app SEO growth",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 bg-accent/30">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Kenya SEO &amp; Web Design Results
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real Kenyan businesses. See how our <strong>SEO company in Kenya</strong> and website design services have transformed online presence and revenue across every industry.
          </p>
        </div>
      </div>

      <div className="py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-card border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold font-display mb-1">{project.title}</h3>
                <p className="text-sm text-slate-300 mb-4">{project.result}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm font-semibold text-primary">
                  View Case Study <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
