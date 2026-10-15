import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./icons";

export function ServiceCard({ service, index }: { service: { eyebrow: string; title: string; description: string; href: string; image: string; imageAlt: string }; index: number }) {
  return <article className="service-card">
    <Link href={service.href} className="service-image" aria-label={`Découvrir ${service.title}`}><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 800px) 100vw, 33vw" className="cover"/><span>0{index + 1}</span></Link>
    <div className="service-copy"><p className="eyebrow">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.description}</p><Link href={service.href} className="text-link">Découvrir l&apos;accompagnement <ArrowRight/></Link></div>
  </article>;
}
