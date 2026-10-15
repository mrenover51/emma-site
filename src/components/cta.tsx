import { ButtonLink } from "./button-link";
import { SITE } from "@/lib/site";
export function Cta(){return <section className="cta-section"><div className="shell cta-inner"><p className="eyebrow">Et si c&apos;était le bon moment ?</p><h2>Créons un espace pour <em>vous écouter.</em></h2><p>Une question sur l&apos;accompagnement qui vous conviendrait ? Échangeons simplement autour de vos besoins.</p><div className="cta-actions"><ButtonLink href="/contact">Prendre contact</ButtonLink><ButtonLink href={SITE.phoneHref} variant="secondary">Appeler Emma</ButtonLink></div></div></section>}
