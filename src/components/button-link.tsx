import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function ButtonLink({ href, children, variant = "primary", external = false }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "light"; external?: boolean }) {
  const className = `button button-${variant}`;
  if (external) return <a href={href} className={className} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a>;
  return <Link href={href} className={className}>{children}<ArrowUpRight /></Link>;
}
