'use client';

import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, description, features, isPopular }: PricingProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-8 rounded-3xl transition-all duration-300",
        isPopular
          ? "bg-slate-900 text-white shadow-2xl shadow-primary/20 scale-105 border-2 border-primary ring-4 ring-primary/10 z-10"
          : "bg-card text-foreground border border-border hover:shadow-xl hover:border-primary/30"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-current" />
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3 className={cn("text-xl font-display font-bold", isPopular ? "text-white" : "text-foreground")}>
          {title}
        </h3>
        <p className={cn("mt-2 text-sm", isPopular ? "text-slate-300" : "text-muted-foreground")}>
          {description}
        </p>
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-4xl font-bold font-display">{price}</span>
          <span className={cn("text-sm", isPopular ? "text-slate-400" : "text-muted-foreground")}>/mo</span>
        </div>
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <div
              className={cn(
                "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                feature.included
                  ? isPopular ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  : isPopular ? "bg-slate-800 text-slate-600" : "bg-slate-100 text-slate-300"
              )}
            >
              <Check className="w-3 h-3" />
            </div>
            <span
              className={cn(
                feature.included
                  ? isPopular ? "text-slate-200" : "text-foreground"
                  : "text-muted-foreground line-through opacity-60"
              )}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <Link href="/contact" className="w-full">
        <Button
          variant={isPopular ? "default" : "outline"}
          className={cn(
            "w-full h-12 font-semibold text-base transition-all",
            isPopular
              ? "shadow-lg shadow-primary/25 hover:shadow-primary/40"
              : "hover:border-primary hover:text-primary"
          )}
        >
          Choose {title}
        </Button>
      </Link>
    </div>
  );
}
