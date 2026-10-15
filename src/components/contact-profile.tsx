import Image from "next/image";
import { ButtonLink } from "./button-link";
import { SITE } from "@/lib/site";

export function ContactProfile(){return <div className="contact-profile"><div className="contact-portrait"><Image src="/images/portrait-emma.webp" alt="Portrait d'Emma Peynet" fill priority sizes="(max-width: 760px) 100vw, 42vw" className="cover"/></div><div className="contact-profile-copy"><p className="eyebrow">Votre praticienne</p><h2>Emma Peynet</h2><p className="lede">Je vous accueille avec écoute et simplicité pour construire un accompagnement adapté à votre rythme, au cabinet Parenth&apos;Emma à Avize ou selon les modalités convenues ensemble.</p><div className="contact-profile-actions"><ButtonLink href={SITE.phoneHref}>Appeler Emma</ButtonLink><ButtonLink href={SITE.emailHref} variant="secondary">Envoyer un e-mail</ButtonLink></div></div></div>}
