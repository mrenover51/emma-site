import Image from "next/image";
import { Breadcrumbs } from "./breadcrumbs";
import { ButtonLink } from "./button-link";
import { Faq, type FaqItem } from "./faq";
import { PageHero } from "./page-hero";
import { RelatedServices } from "./related-services";
import { SITE } from "@/lib/site";

type ContentBlock = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  reverse?: boolean;
  note?: string;
};

type Props = {
  path: string;
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;
  introduction: string[];
  introductionCta: string;
  principle: ContentBlock;
  featureBlocks: ContentBlock[];
  cards: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[] };
  middleCta: { title: string; text: string; buttonLabel: string };
  journey: { eyebrow: string; title: string; intro: string; steps: { title: string; text: string }[]; confirmation: string };
  faq: FaqItem[];
  finalCta: { eyebrow: string; title: string; text: string; buttonLabel: string };
  exclude: string;
};

function EditorialBlock({ block }: { block: ContentBlock }) {
  const copy = <div className="service-story-copy"><p className="eyebrow">{block.eyebrow}</p><h2>{block.title}</h2>{block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{block.note ? <div className="service-caution"><strong>À retenir</strong><p>{block.note}</p></div> : null}</div>;
  if (!block.image || !block.imageAlt) return <section className="service-explainer"><div className="shell service-explainer-inner">{copy}</div></section>;
  const visual = <div className="service-story-image"><Image src={block.image} alt={block.imageAlt} fill sizes="(max-width: 760px) 100vw, 48vw" className="cover" style={{ objectPosition: block.imagePosition ?? "center" }} /></div>;
  return <section className={`service-story ${block.reverse ? "reverse" : ""}`}><div className="shell service-story-grid">{block.reverse ? <>{copy}{visual}</> : <>{visual}{copy}</>}</div></section>;
}

export function ServiceEditorial(props: Props) {
  return <>
    <div className="service-breadcrumb-shell shell"><Breadcrumbs items={[{ href: props.path, label: props.breadcrumbLabel }]} /></div>
    <PageHero eyebrow={props.eyebrow} title={props.title} intro={props.heroLead} image={props.heroImage} imageAlt={props.heroImageAlt} />
    <section className="service-introduction"><div className="shell service-introduction-grid"><div><p className="eyebrow">L&apos;essentiel</p><h2>Une approche expliquée <em>simplement.</em></h2></div><div>{props.introduction.map((paragraph, index) => <p className={index === 0 ? "lede" : undefined} key={paragraph}>{paragraph}</p>)}<ButtonLink href="/contact">{props.introductionCta}</ButtonLink></div></div></section>
    <EditorialBlock block={props.principle} />
    {props.featureBlocks.map((block) => <EditorialBlock key={block.title} block={block} />)}
    <section className="service-benefits"><div className="shell"><div className="service-benefits-heading"><div><p className="eyebrow">{props.cards.eyebrow}</p><h2>{props.cards.title}</h2></div><p>{props.cards.intro}</p></div><div className="service-benefits-grid">{props.cards.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="service-mid-cta"><div className="shell service-mid-cta-inner"><div><p className="eyebrow">Un premier pas</p><h2>{props.middleCta.title}</h2><p>{props.middleCta.text}</p></div><div><ButtonLink href="/contact">{props.middleCta.buttonLabel}</ButtonLink><ButtonLink href={SITE.phoneHref} variant="secondary">Appeler Emma</ButtonLink></div></div></section>
    <section className="service-journey"><div className="shell service-journey-grid"><div className="service-journey-heading"><p className="eyebrow">{props.journey.eyebrow}</p><h2>{props.journey.title}</h2><p>{props.journey.intro}</p><div className="service-caution"><strong>Déroulement indicatif</strong><p>{props.journey.confirmation}</p></div></div><ol className="service-steps">{props.journey.steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>
    <Faq items={props.faq} />
    <RelatedServices exclude={props.exclude} />
    <section className="service-final-cta"><div className="shell service-final-cta-inner"><p className="eyebrow">{props.finalCta.eyebrow}</p><h2>{props.finalCta.title}</h2><p>{props.finalCta.text}</p><div className="cta-actions"><ButtonLink href="/contact">{props.finalCta.buttonLabel}</ButtonLink><ButtonLink href={SITE.phoneHref} variant="secondary">{SITE.phoneDisplay}</ButtonLink></div></div></section>
  </>;
}
