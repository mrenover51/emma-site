import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle } from "@/lib/articles";
import { Cta } from "@/components/cta";
import { Suspense } from "react";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({params}:Props):Promise<Metadata>{const article=getArticle((await params).slug);if(!article)return{};return pageMetadata(article.title,article.description,`/actualites/${article.slug}`)}
export default function ArticlePage({params}:Props){return <Suspense fallback={<div className="shell article-loading"><p className="eyebrow">Le journal</p><h1>Chargement de l&apos;article…</h1></div>}><ArticleContent params={params}/></Suspense>}
async function ArticleContent({params}:Props){const article=getArticle((await params).slug);if(!article)notFound();return <><article className="article-page"><header className="shell article-header"><Link href="/actualites" className="eyebrow">← Retour aux actualités</Link><p className="article-meta"><span>{article.category}</span><time dateTime={article.publishedAt}>{new Intl.DateTimeFormat("fr-FR",{dateStyle:"long"}).format(new Date(article.publishedAt))}</time></p><h1>{article.title}</h1><p className="lede">{article.description}</p></header><div className="shell article-cover"><Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" className="cover"/></div><div className="shell article-body">{article.content.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></article><Cta/></>}
