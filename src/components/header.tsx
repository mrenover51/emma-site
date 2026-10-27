"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/site";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const menu = menuRef.current;
    const trigger = triggerRef.current;
    const scrollY = window.scrollY;
    const bodyStyle = document.body.style.cssText;
    const htmlOverflow = document.documentElement.style.overflow;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    menu.showModal();
    menu.querySelector<HTMLButtonElement>(".mobile-menu-close")?.focus();
    const desktop = window.matchMedia("(min-width: 1051px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      menu.close();
      document.body.style.cssText = bodyStyle;
      document.documentElement.style.overflow = htmlOverflow;
      window.scrollTo({ top: scrollY, behavior: "instant" });
      if (!desktop.matches) trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="brand" aria-label="Emma Peynet, accueil">
          <Image src="/images/logo-emma.webp" alt="" width={1942} height={809} priority className="brand-logo"/>
          <span className="sr-only">Emma Peynet</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="header-cta">Prendre contact</Link>
        <button ref={triggerRef} className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          <span/><span/>
        </button>
      </div>
      <dialog ref={menuRef} id="mobile-menu" className="mobile-menu" aria-label="Menu de navigation" onCancel={(event) => { event.preventDefault(); setOpen(false); }} onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const items = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button");
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}>
        <div className="mobile-menu-header">
          <Link href="/" className="brand" aria-label="Emma Peynet, accueil" onClick={() => setOpen(false)}>
            <Image src="/images/logo-emma.webp" alt="" width={1942} height={809} className="brand-logo"/>
            <span className="sr-only">Emma Peynet</span>
          </Link>
          <button className="menu-button mobile-menu-close" type="button" aria-label="Fermer le menu" onClick={() => setOpen(false)}><span/><span/></button>
        </div>
        <div className="mobile-menu-content">
        <nav aria-label="Navigation mobile">
          {navigation.map((item, i) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}><span aria-hidden="true">0{i + 1}</span>{item.label}</Link>)}
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}><span aria-hidden="true">07</span>Contact</Link>
        </nav>
        <p>Réflexologie, naturopathie & nutrition<br/>à Avize, au cœur de la Champagne.</p>
        </div>
      </dialog>
    </header>
  );
}
