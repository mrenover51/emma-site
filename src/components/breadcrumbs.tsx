import Link from "next/link";
import { JsonLd } from "./json-ld";
import { SITE } from "@/lib/site";

type BreadcrumbItem = { label: string; href: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, SITE.url).toString(),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Fil d’Ariane">
        <ol>
          {allItems.map((item, index) => (
            <li key={item.href}>
              {index === allItems.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={data} />
    </>
  );
}
