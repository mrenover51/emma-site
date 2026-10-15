# Audit SEO technique — Parenth'Emma

Audit réalisé le 15 octobre 2026 sur le code Next.js local. Aucun chiffre de trafic, de position ou de Lighthouse n'est supposé.

## Synthèse

| Contrôle | Statut | Constat / action |
|---|---|---|
| Architecture | Réalisé | App Router, 7 pages publiques, articles dynamiques, routes lisibles. |
| Titles et descriptions | Réalisé | Métadonnées uniques sur toutes les pages éditoriales. |
| Canonical | Corrigé | URL absolues basées sur `https://www.emmapeynet.fr`. |
| Hn | Réalisé | Un H1 par page ; sections structurées en H2/H3. |
| Indexabilité | Réalisé | `robots.txt` autorise l'exploration et référence le sitemap. |
| Sitemap | Corrigé | 7 URL réelles, articles ajoutés seulement s'ils existent ; suppression de dates artificiellement renouvelées. |
| 404 | Corrigé | Page personnalisée avec sorties vers services et contact. |
| Données structurées | Corrigé | Graphe LocalBusiness, Person, WebSite ; Service et BreadcrumbList sur les prestations. |
| Images | Réalisé | Dimensions réservées, formats WebP disponibles, textes alternatifs descriptifs. Logo WebP utilisé. |
| Liens internes | Réalisé | Navigation, cartes de services, prestations associées et CTA contact. |
| Réseaux sociaux | Réalisé | Open Graph, Twitter Card et image OG générée. |
| URL / slash final | Corrigé | `trailingSlash: false` explicite. |
| Paramètres URL | À vérifier | Aucun filtre indexable actuellement ; surveiller les paramètres dans Search Console après lancement. |
| Redirections Odoo | Nécessite un accès externe | L'ancien site et son sitemap n'ont pas pu être inventoriés depuis l'environnement d'audit. |
| Performance terrain | Après mise en ligne | Mesurer LCP, INP et CLS avec CrUX/Search Console ; aucun score n'est revendiqué. |

## Points techniques observés

- Les pages publiques sont rendues côté serveur ou pré-rendues ; le JavaScript client est limité au menu et au formulaire.
- Le hero possède des dimensions intrinsèques et une variante mobile, ce qui protège le cadrage et le CLS.
- Les polices passent par `next/font`, évitant une requête CSS tierce en production.
- La carte Google est chargée paresseusement. Aucun script analytique ou tiers bloquant n'est présent.
- Les contenus de bien-être utilisent des formulations prudentes et rappellent qu'ils ne remplacent pas un suivi médical.
- Les articles sont absents : l'état vide ne crée aucune fausse publication et le sitemap ne génère aucune URL fictive.

## Priorités restantes

1. **Nécessite un accès externe** — exporter les URL Odoo, les pages vues et les backlinks avant bascule.
2. **À vérifier** — valider chaque redirection 301 contre un contenu réellement équivalent.
3. **Après mise en ligne** — tester les URL canoniques, le sitemap et les données structurées depuis le domaine public.
4. **Après mise en ligne** — mesurer les Core Web Vitals réels sur mobile et ajuster uniquement à partir de données.
