# Google Search Console

## Préparation réalisée

- Domaine de production centralisé : `https://www.emmapeynet.fr`.
- Canonical absolues, `robots.txt` et `sitemap.xml` générés.
- Le code accepte `GOOGLE_SITE_VERIFICATION` sans valeur fictive.

## Mise en place — nécessite un accès externe

1. Créer ou ouvrir la propriété **Domaine** et valider le TXT DNS, ou utiliser la propriété préfixe d'URL avec la variable Vercel `GOOGLE_SITE_VERIFICATION`.
2. Soumettre `https://www.emmapeynet.fr/sitemap.xml`.
3. Inspecter `/`, les trois pages de service et `/contact`, puis demander l'indexation si nécessaire.
4. Vérifier la canonical choisie par Google, le rendu HTML, l'exploration et l'indexation.
5. Après migration, suivre quotidiennement pendant deux semaines : pages non trouvées, redirections, sitemap, Core Web Vitals et actions manuelles.
6. Puis suivre mensuellement requêtes, pages, pays, appareils, CTR et variations anormales.

Ne jamais publier une balise de vérification provenant d'un autre compte ou environnement.
