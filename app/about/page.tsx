// Server Component — no 'use client'
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, TrendingUp, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Leading SEO Company Kenya – Kenya SEO Masters",
  description:
    "Meet the team behind Kenya's top SEO company. Kenya SEO Masters has helped 50+ businesses with expert SEO Kenya strategies and professional website design since 2018.",
  alternates: { canonical: "https://www.kenyaseomasters.com/about" },
  openGraph: {
    title: "About Us | Leading SEO Company Kenya – Kenya SEO Masters",
    description:
      "The team behind Kenya's top SEO company. 50+ businesses helped with expert Kenya SEO and website design since 2018.",
    url: "https://www.kenyaseomasters.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 bg-accent/30">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            About Kenya SEO Masters
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are Kenya&apos;s most trusted SEO company a team of digital strategists, expert web developers, and content specialists dedicated to growing Kenyan businesses online.
          </p>
        </div>
      </div>

      {/* STORY */}
      <div className="py-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="Kenya Master SEO CEO.jpg"
                alt="Founder of Kenya SEO Masters – leading SEO company Kenya"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <p className="font-display font-bold text-xl text-primary">
                &ldquo;SEO is not magic. It&apos;s engineering, applied consistently.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              Kenya&apos;s Premier SEO Company, Founded on Results
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kenya SEO Masters was founded with a single mission to provide Kenyan businesses with the same calibre of <strong>search engine optimization</strong> that international brands enjoy at fair, transparent pricing that makes sense for the local market. Our lead strategist brings over <strong>7 years of Kenya SEO</strong> experience across industries including real estate, hospitality, e-commerce, fintech, and healthcare.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We built this agency because we saw too many Kenyan businesses paying for SEO and getting nothing in return vague reports, no rankings, and excuses. We do things differently, every campaign is tied to measurable outcomes, every strategy is explained in plain language, and every client owns everything we build for them.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Award className="w-8 h-8 text-secondary" />
                <h4 className="font-bold text-lg">Google Certified</h4>
                <p className="text-sm text-muted-foreground">Google Analytics 4, Search Console & Ads certified team members.</p>
              </div>
              <div className="flex flex-col gap-2">
                <TrendingUp className="w-8 h-8 text-secondary" />
                <h4 className="font-bold text-lg">Proven Track Record</h4>
                <p className="text-sm text-muted-foreground">50+ Kenyan businesses helped to double or triple organic traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="py-16 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "50+", label: "Kenyan Businesses Served" },
              { stat: "7+", label: "Years of Kenya SEO Experience" },
              { stat: "95%", label: "Client Retention Rate" },
              { stat: "#1", label: "SEO Company Kenya" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-display font-bold mb-2">{item.stat}</div>
                <div className="text-blue-200 text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">
              The Principles Behind Our Kenya SEO Success
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Data-Driven Precision",
                desc: "Every Kenya SEO decision we make is backed by data; keyword research, competitor analysis, and performance metrics and are never gut feeling.",
              },
              {
                icon: Users,
                title: "True Partnership",
                desc: "We work as an extension of your team, not just a vendor. Your business growth is our primary measure of success.",
              },
              {
                icon: Award,
                title: "Relentless Excellence",
                desc: "Google updates its algorithm hundreds of times a year. We stay ahead so your SEO Kenya rankings are never at risk.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold font-display mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
