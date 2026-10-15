type IconProps = { className?: string };

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function ArrowUpRight({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}
export function ArrowRight({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...base}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}
export function Phone({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...base}><path d="M6.6 3.5 9.2 8l-2 1.8a15.5 15.5 0 0 0 7 7l1.8-2 4.5 2.6-1.2 3a2.4 2.4 0 0 1-2.6 1.4C9.2 20.5 3.5 14.8 2.2 7.3a2.4 2.4 0 0 1 1.4-2.6l3-1.2Z" /></svg>;
}
export function MapPin({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...base}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}
export function Leaf({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...base}><path d="M20.5 3.5C13 3.5 5 7 5 14.5c0 2.8 1.8 5 4.5 5 7.5 0 11-8 11-16Z"/><path d="M3.5 21c3-5 6.5-8.5 12-11.5"/></svg>;
}
export function Spark({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...base}><path d="M12 2c.6 6.6 3.4 9.4 10 10-6.6.6-9.4 3.4-10 10-.6-6.6-3.4-9.4-10-10 6.6-.6 9.4-3.4 10-10Z"/></svg>;
}
