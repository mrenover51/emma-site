import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { articles } from "@/lib/articles";
export default function sitemap():MetadataRoute.Sitemap {const routes=["","/mes-services","/reflexologie","/naturopathie","/coaching-nutrition","/actualites","/contact"].map((route)=>({url:`${SITE.url}${route}`,changeFrequency:(route==="/actualites"?"weekly":"monthly") as "weekly"|"monthly",priority:route===""?1:.8}));const articleRoutes=articles.map(article=>({url:`${SITE.url}/actualites/${article.slug}`,lastModified:new Date(article.publishedAt),changeFrequency:"monthly" as const,priority:.6}));return [...routes,...articleRoutes]}
