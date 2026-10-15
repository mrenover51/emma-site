"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="brand" aria-label="Parenth'Emma, accueil">
          <Image src="/images/logo-emma.webp" alt="" width={1942} height={809} priority className="brand-logo"/>
          <span className="sr-only">Parenth&apos;Emma — Emma Peynet</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="header-cta">Prendre contact</Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          <span/><span/>
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navigation mobile">
          {navigation.map((item, i) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)}><span>07</span>Contactez-moi</Link>
        </nav>
        <p>Réflexologie, naturopathie & nutrition<br/>à Avize, au cœur de la Champagne.</p>
      </div>
    </header>
  );
}
