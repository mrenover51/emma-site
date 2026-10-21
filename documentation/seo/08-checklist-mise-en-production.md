# Checklist de mise en production

## Réalisé dans le projet

- [x] Titres, descriptions, H1 et canonical uniques
- [x] Sitemap et robots générés
- [x] Données structurées sans avis, horaires, prix, GPS ni diplômes inventés
- [x] Open Graph et Twitter Card
- [x] Liens téléphone, e-mail, itinéraire et formulaire explicite sur l'absence d'envoi backend
- [x] Images dimensionnées, formats modernes et chargement différé hors éléments prioritaires
- [x] Page 404 et URL sans slash final
- [x] Validation du 21 octobre 2026 : `npm run lint`, `npx tsc --noEmit` et `npm run build` réussis

## À vérifier avant mise en ligne

- [ ] Valider tous les textes et toutes les modalités avec Emma
- [ ] Inventorier les anciennes URL Odoo et ajouter les seules 301 justifiées
- [ ] Tester les formulaires et liens sur iOS, Android et ordinateur
- [ ] Vérifier le domaine canonique choisi (`www`) et la redirection de l'autre variante
- [ ] Définir `GOOGLE_SITE_VERIFICATION` si la méthode balise HTML est choisie
- [ ] Contrôler l'aperçu social et les données structurées sur une URL publique de préproduction
- [ ] Sauvegarder/exporter l'ancien site avant la bascule

## Après mise en ligne

- [ ] Soumettre le sitemap dans Search Console
- [ ] Inspecter les pages principales et surveiller les 404/soft-404
- [ ] Vérifier les 301 Odoo une par une
- [ ] Mesurer LCP, INP et CLS réels, notamment sur mobile
- [ ] Mettre à jour Google Business Profile avec des données strictement confirmées
- [ ] Publier progressivement des articles réellement validés par Emma
- [ ] Comparer impressions, clics et requêtes après 4 à 12 semaines, sans promesse de classement
