import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";
import "./enhancements.css";
import "./brand-refresh.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteTitle = "Emma Peynet | Réflexologie et naturopathie à Avize";
const siteDescription = "Emma Peynet vous accompagne en réflexologie, naturopathie, gemmothérapie et coaching en nutrition à Avize, près d’Épernay et de la Côte des Blancs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: siteTitle, template: "%s | Emma Peynet" },
  description: siteDescription,
  applicationName: "Emma Peynet",
  keywords: ["réflexologie Avize", "réflexologie Épernay", "naturopathe Avize", "naturopathie Épernay", "coaching nutrition Avize", "coaching nutrition Épernay", "gemmothérapie Avize", "Côte des Blancs"],
  authors: [{ name: "Emma Peynet" }],
  alternates: { canonical: SITE.url },
  openGraph: { title: siteTitle, description: siteDescription, type: "website", locale: "fr_FR", siteName: SITE.name, url: SITE.url, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Emma Peynet — réflexologie, naturopathie et coaching en nutrition à Avize" }] },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        url: SITE.url,
        description: siteDescription,
        telephone: SITE.phoneInternational,
        email: SITE.email,
        image: `${SITE.url}/opengraph-image`,
        founder: { "@id": `${SITE.url}/#person` },
        address: { "@type": "PostalAddress", streetAddress: SITE.streetAddress, postalCode: SITE.postalCode, addressLocality: SITE.addressLocality, addressCountry: SITE.addressCountry },
        areaServed: SITE.serviceAreas,
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.practitioner,
        worksFor: { "@id": `${SITE.url}/#business` },
        url: SITE.url,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE.url}/#business` },
      },
    ],
  };
  return (
    <html lang="fr" className={`${manrope.variable} ${cormorant.variable}`}>
      <body><a className="skip-link" href="#contenu">Aller au contenu</a><Suspense fallback={<div className="header-fallback" aria-hidden="true"/>}><Header/></Suspense><main id="contenu">{children}</main><Footer/><JsonLd data={structuredData}/></body>
    </html>
  );
}
