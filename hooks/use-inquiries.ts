import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface InsertInquiry {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceInterest: "seo" | "web_design" | "hosting" | "audit" | "digital_marketing";
  message: string;
}

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Inquiry sent!", description: "We'll get back to you within 24 hours." });
    },
    onError: () => {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    },
  });
}