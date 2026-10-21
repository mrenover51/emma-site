import Link from "next/link";

export default function NotFound() {
  return (
    <section className="contact-page">
      <div className="shell contact-heading">
        <p className="eyebrow">Erreur 404</p>
        <h1>Cette page a pris une <em>autre direction.</em></h1>
        <p className="lede">Le contenu demandé n’existe pas ou a été déplacé. Retrouvez les accompagnements d&apos;Emma Peynet ou contactez-la directement.</p>
        <div className="hero-actions">
          <Link className="button primary" href="/mes-services">Découvrir les services</Link>
          <Link className="button secondary" href="/contact">Prendre contact</Link>
        </div>
      </div>
    </section>
  );
}
