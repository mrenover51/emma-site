export const SITE = {
  name: "Emma Peynet",
  practitioner: "Emma Peynet",
  phoneDisplay: "06 95 32 18 22",
  phoneHref: "tel:+33695321822",
  email: "emmapeynet.naturopathe@gmail.com",
  emailHref: "mailto:emmapeynet.naturopathe@gmail.com",
  addressLines: ["8 place Léon Bourgeois", "51190 Avize"],
  address: "8 place Léon Bourgeois, 51190 Avize",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=8+place+L%C3%A9on+Bourgeois+51190+Avize",
  url: "https://www.emmapeynet.fr",
  interventionAreas: ["Avize", "Épernay", "Vertus", "Communes voisines"],
  appointmentFormats: ["Au cabinet", "À domicile", "En entreprise", "En maison senior"],
} as const;

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/mes-services", label: "Mes services" },
  { href: "/reflexologie", label: "Réflexologie" },
  { href: "/naturopathie", label: "Naturopathie" },
  { href: "/coaching-nutrition", label: "Coaching nutrition" },
  { href: "/actualites", label: "Actualités" },
] as const;

export const services = [
  {
    eyebrow: "01 — Se reconnecter",
    title: "Réflexologie",
    description: "Une pratique manuelle douce, plantaire ou palmaire, pensée comme une pause pour relâcher les tensions et retrouver une sensation d'équilibre.",
    href: "/reflexologie",
    image: "/images/soin-emma.webp",
    imageAlt: "Emma Peynet pratiquant une séance de réflexologie plantaire",
  },
  {
    eyebrow: "02 — Soutenir son terrain",
    title: "Naturopathie & gemmothérapie",
    description: "Un accompagnement global qui s'appuie sur l'hygiène de vie et, lorsque cela est pertinent, sur les bourgeons et jeunes pousses.",
    href: "/naturopathie",
    image: "/images/coaching-nutrition-new.webp",
    imageAlt: "Plantes, bourgeons et ingrédients naturels sur une table en bois",
  },
  {
    eyebrow: "03 — Nourrir son quotidien",
    title: "Coaching en nutrition",
    description: "Des repères concrets et progressifs pour construire une alimentation qui vous ressemble, sans injonction ni solution toute faite.",
    href: "/coaching-nutrition",
    image: "/images/naturopathie-nutrition.webp",
    imageAlt: "Fruits de saison, noix et carnet de conseils nutritionnels",
  },
] as const;

export function pageMetadata(title: string, description: string, path: string) {
  const canonical = new URL(path, SITE.url).toString();
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" as const, locale: "fr_FR", siteName: SITE.name },
  };
}
