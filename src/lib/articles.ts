export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "Réflexologie" | "Naturopathie" | "Nutrition" | "Bien-être";
  publishedAt: string;
  image: string;
  imageAlt: string;
  content: string[];
};

// Ajouter uniquement des articles réellement publiés ou validés par Emma.
// La grille et les pages individuelles se généreront automatiquement.
export const articles: Article[] = [];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
