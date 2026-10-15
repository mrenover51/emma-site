import Link from "next/link";
import { SITE, navigation } from "@/lib/site";
import { ArrowUpRight } from "./icons";
import Image from "next/image";

export function Footer() {
  return <footer className="footer">
    <div className="shell footer-grid">
      <div className="footer-intro">
        <Image src="/images/logo-emma.webp" alt="Parenth'Emma — Emma Peynet" width={1942} height={809} className="footer-logo"/>
        <h2>Accordez-vous<br/><em>une parenthèse.</em></h2>
        <p>Un accompagnement attentif, naturel et personnalisé à Avize.</p>
      </div>
      <div><p className="footer-label">Explorer</p>{navigation.slice(1).map(x => <Link key={x.href} href={x.href}>{x.label}</Link>)}</div>
      <div className="footer-contact"><p className="footer-label">Me contacter</p><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a><a className="footer-email" href={SITE.emailHref}>emmapeynet.<wbr/>naturopathe@<wbr/>gmail.com</a><a href={SITE.mapsUrl} target="_blank" rel="noreferrer">{SITE.addressLines[0]}<br/>{SITE.addressLines[1]} <ArrowUpRight/></a></div>
    </div>
    <div className="shell footer-bottom"><p>© 2026 Parenth&apos;Emma — Emma Peynet</p><p>Les prestations proposées ne se substituent pas à un suivi médical.</p></div>
  </footer>;
}
