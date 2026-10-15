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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Parenth'Emma | Réflexologie & naturopathie à Avize", template: "%s | Parenth'Emma" },
  description: "Emma Peynet vous accompagne en réflexologie, naturopathie, gemmothérapie et nutrition à Avize, près d'Épernay et de la Côte des Blancs.",
  applicationName: "Parenth'Emma",
  keywords: ["réflexologie Avize", "naturopathe Avize", "nutrition Épernay", "gemmothérapie", "Côte des Blancs"],
  authors: [{ name: "Emma Peynet" }],
  alternates: { canonical: SITE.url },
  openGraph: { type: "website", locale: "fr_FR", siteName: "Parenth'Emma", url: SITE.url, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Parenth'Emma — Emma Peynet, naturopathie, réflexologie et coaching en nutrition" }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
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
        alternateName: `${SITE.name} — Emma Peynet`,
        url: SITE.url,
        telephone: "+33695321822",
        email: SITE.email,
        image: `${SITE.url}/opengraph-image`,
        founder: { "@id": `${SITE.url}/#person` },
        address: { "@type": "PostalAddress", streetAddress: "8 place Léon Bourgeois", postalCode: "51190", addressLocality: "Avize", addressCountry: "FR" },
        areaServed: ["Avize", "Épernay", "Vertus", "Blancs-Coteaux", "Côte des Blancs"],
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
