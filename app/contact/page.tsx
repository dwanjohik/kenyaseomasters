// Server Component — no 'use client'
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free SEO Audit – Kenya SEO Masters",
  description:
    "Contact Kenya SEO Masters – the leading SEO company in Kenya. Get a free website SEO audit and custom strategy session. Based in Nairobi, serving all of Kenya.",
  alternates: { canonical: "https://www.kenyaseomasters.com/contact" },
  openGraph: {
    title: "Contact Us | Get a Free SEO Audit – Kenya SEO Masters",
    description:
      "Contact Kenya's top SEO company for a free website audit and strategy session. Serving all of Kenya from our Nairobi office.",
    url: "https://www.kenyaseomasters.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Contact Kenya&apos;s Top SEO Company
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to rank higher? Get your free website SEO audit and a custom Kenya SEO strategy no obligations, no jargon.
          </p>
        </div>
      </div>

      <div className="py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a full Kenya SEO strategy, a new website, or just want to ask about pricing our team is ready to help. We respond to all enquiries within 24 hours on business days.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-muted-foreground">
                    Westlands Business Park, 4th Floor<br />
                    Westlands, Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+254 705 227 427</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon – Fri, 8am to 6pm EAT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">blockenterprisesltd@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-border relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Westlands, Nairobi — Google Map
                </span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
