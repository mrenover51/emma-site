import { JsonLd } from "./json-ld";
import { SITE } from "@/lib/site";

export function ServiceSeo({ name, description, path }: { name: string; description: string; path: string }) {
  const url = `${SITE.url}${path}`;
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        url,
        provider: { "@id": `${SITE.url}/#business` },
        areaServed: ["Avize", "Épernay", "Blancs-Coteaux", "Vertus", "Côte des Blancs"],
      }} />
    </>
  );
}
