import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Zynovix Tech Solutions",
  description:
    "Get in touch with Zynovix for custom web development, enterprise ERP software, and system automation solutions.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-transparent min-h-screen">
      <ContactSection />
    </main>
  );
}