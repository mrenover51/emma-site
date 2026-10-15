export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return <section className="faq-section"><div className="shell faq-grid"><div><p className="eyebrow">Questions fréquentes</p><h2>Avant votre <em>rendez-vous.</em></h2><p>Quelques repères pour préparer votre démarche sereinement. Pour toute situation personnelle, contactez directement Emma.</p></div><div className="faq-list">{items.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
