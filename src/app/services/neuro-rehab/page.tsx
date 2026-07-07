import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { SERVICE_DETAILS } from "@/lib/data";

const detail = SERVICE_DETAILS["neuro-rehab"];

export const metadata: Metadata = {
  title: { absolute: detail.seoTitle },
  description: detail.seoDescription,
  alternates: { canonical: "/services/neuro-rehab" },
  openGraph: {
    title: detail.seoTitle,
    description: detail.seoDescription,
    url: "https://www.elavivephysio.com/services/neuro-rehab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: detail.seoTitle,
    description: detail.seoDescription,
  },
};

export default function NeuroRehabPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.elavivephysio.com" },
          { name: "Services", url: "https://www.elavivephysio.com/services" },
          {
            name: detail.name,
            url: "https://www.elavivephysio.com/services/neuro-rehab",
          },
        ]}
      />
      <Header />
      <main>
        <ServiceDetail slug="neuro-rehab" />
      </main>
      <Footer />
    </>
  );
}
