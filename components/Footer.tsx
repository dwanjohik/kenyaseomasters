'use client';

import Link from "next/link";
import { BarChart2, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <BarChart2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-white">Kenya SEO</span>
                <span className="text-xs font-medium text-slate-400 tracking-wider">MASTERS</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kenya SEO Masters is the leading <strong className="text-slate-300">SEO company in Kenya</strong>, helping local businesses grow through expert search engine optimization and professional website design.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/kenyaseomasters", label: "Facebook" },
                { Icon: Twitter, href: "https://www.twitter.com/kenyaseomasters", label: "Twitter" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/kenyaseomasters", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/kenyaseomasters", label: "Instagram" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* SEO Services */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">SEO Services Kenya</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">Search Engine Optimization Kenya</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">SEO Companies in Kenya</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Local SEO Nairobi</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Technical SEO Kenya</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Content Marketing Kenya</Link></li>
            </ul>
          </div>

          {/* Web Design */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Web Design Kenya</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/web-design" className="hover:text-primary transition-colors">Website Design in Kenya</Link></li>
              <li><Link href="/web-design" className="hover:text-primary transition-colors">Web Designers Kenya</Link></li>
              <li><Link href="/web-design" className="hover:text-primary transition-colors">Website Developers Kenya</Link></li>
              <li><Link href="/web-design" className="hover:text-primary transition-colors">Web Design in Kenya</Link></li>
              <li><Link href="/web-design" className="hover:text-primary transition-colors">Kenya Website Developers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Westlands Business Park, 4th Floor<br />Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+254700000000" className="hover:text-primary transition-colors">+254 700 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@kenyaseomasters.com" className="hover:text-primary transition-colors">info@kenyaseomasters.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kenya SEO Masters. All rights reserved. | Leading SEO Company in Kenya | Search Engine Optimization Kenya | Website Design Kenya</p>
        </div>
      </div>
    </footer>
  );
}
