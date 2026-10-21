import Image from "next/image";
import { Breadcrumbs } from "./breadcrumbs";

export function PageHero({ eyebrow, title, intro, image, imageAlt, path, breadcrumbLabel }: { eyebrow: string; title: React.ReactNode; intro: string; image: string; imageAlt: string; path?: string; breadcrumbLabel?: string }) {
  return <section className="page-hero">
    <div className="shell">
      {path && breadcrumbLabel ? <Breadcrumbs items={[{ href: path, label: breadcrumbLabel }]} /> : null}
      <div className="page-hero-grid">
      <div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p></div>
      <div className="page-hero-image"><Image src={image} alt={imageAlt} fill sizes="(max-width: 800px) 100vw, 45vw" priority className="cover"/><div className="image-stamp">Emma Peynet <span>•</span> Avize</div></div>
      </div>
    </div>
  </section>;
}
