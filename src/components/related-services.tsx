import Link from "next/link";
import { ArrowUpRight } from "./icons";
const items=[{href:"/reflexologie",label:"Retrouver du calme",title:"La réflexologie"},{href:"/naturopathie",label:"Soutenir son équilibre",title:"La naturopathie"},{href:"/coaching-nutrition",label:"Avancer pas à pas",title:"Le coaching en nutrition"}];
export function RelatedServices({exclude}:{exclude?:string}){return <section className="related"><div className="shell"><p className="eyebrow">Continuer à explorer</p><h2>Un accompagnement, plusieurs <em>portes d&apos;entrée.</em></h2><div className="related-grid">{items.filter(x=>x.href!==exclude).map(x=><Link href={x.href} className="related-card" key={x.href}><span>{x.label}</span><h3>{x.title}</h3><ArrowUpRight/></Link>)}</div></div></section>}
