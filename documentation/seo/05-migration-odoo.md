# Migration SEO Odoo vers Next.js

## État de l'inventaire

**À vérifier / nécessite un export de l'ancien site et de Search Console** : la documentation locale ne contient aucun inventaire des anciennes URL Odoo. Une recherche publique effectuée le 21 octobre 2026 n'a pas permis de confirmer d'ancien chemin indexé correspondant aux pages actuelles. Aucune ancienne URL n'est donc inventée et aucune redirection non vérifiée n'est ajoutée au code.

## État dans le projet

- **Implémenté** : les nouvelles URL publiques sont stables, sans slash final, et figurent dans le sitemap.
- **Non implémenté volontairement** : aucune redirection Odoo, faute de source et de destination confirmées.
- **Action manuelle requise** : exporter le sitemap Odoo, les URL Search Console et les backlinks avant la bascule, puis compléter la table ci-dessous.

## Procédure avant bascule

1. Exporter les URL du sitemap Odoo et crawler le site authentifié/public.
2. Exporter depuis Search Console les pages ayant reçu clics ou impressions sur 16 mois.
3. Ajouter les URL liées depuis d'autres sites via un outil de backlinks.
4. Relever pour chaque page : code HTTP, canonical, title, H1, trafic, backlinks et nouvelle destination pertinente.
5. Créer des redirections permanentes uniquement pour les correspondances équivalentes.

## Table de correspondance à compléter

| Ancienne URL Odoo | Statut actuel | Contenu / intention | Nouvelle URL | Décision |
|---|---:|---|---|---|
| À exporter | À relever | Accueil | `/` | 301 si chemin différent |
| À exporter | À relever | Services | `/mes-services` | À valider |
| À exporter | À relever | Réflexologie | `/reflexologie` | À valider |
| À exporter | À relever | Naturopathie | `/naturopathie` | À valider |
| À exporter | À relever | Nutrition | `/coaching-nutrition` | À valider |
| À exporter | À relever | Actualités / articles | `/actualites` ou article équivalent | Cas par cas |
| À exporter | À relever | Contact | `/contact` | À valider |

Ne pas rediriger toutes les anciennes URL vers l'accueil. Une page sans équivalent doit conserver une 404/410 selon le contexte. Après confirmation, ajouter les règles permanentes dans `next.config.ts`, tester chaque source et chaque destination, puis conserver les redirections au moins un an. Avec Next.js, `permanent: true` produit une redirection permanente 308, équivalente à une 301 pour le transfert SEO tout en préservant la méthode HTTP.
