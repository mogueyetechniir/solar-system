# Lab 04 — Reconstruire le pipeline de mémoire

**Branche :** `lab/04-replay`
**Durée visée :** 45 min, chrono lancé
**Quand :** au moins **un jour** après avoir fini le pipeline. Le refaire dans l'heure donne une fausse impression de maîtrise.

## Préparation

```powershell
git switch lab/02-github-actions
git switch -c lab/04-replay
git rm .github/workflows/solar-system.yml
git commit -m "chore(ci): start replay from scratch"
```

Ferme tous les onglets qui montrent l'ancien workflow.

## Objectif

Recréer `.github/workflows/solar-system.yml` qui :

- se déclenche au push sur `main` et `lab/*`, et manuellement
- a un job `unit-testing` sur `ubuntu-latest`
- démarre un service MongoDB 7 avec authentification, et **attend** qu'il soit prêt
- récupère le code, installe Node 24, installe les dépendances de façon reproductible
- remplit la base avec `scripts/seed.js`
- lance `npm test`
- n'écrit **aucun** mot de passe en clair

## Définition de « terminé »

- [ ] Run vert en moins de 45 min
- [ ] Aucun secret en clair dans le fichier
- [ ] Tu peux expliquer chaque ligne à voix haute

## Journal

Note **chaque** endroit où tu as hésité ou dû chercher dans la doc. C'est la liste de ce qu'il te reste à apprendre.

| Où j'ai bloqué | Ce que j'ai cherché | Ce que j'ai appris |
|----------------|---------------------|--------------------|
| | | |
