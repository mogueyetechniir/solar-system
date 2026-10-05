# Lab 05 — Variantes

**Branche :** `lab/05-variante`
**Compétence :** adapter un pipeline à une contrainte nouvelle. Réussir une variante prouve qu'on a compris ;
réussir une copie prouve seulement qu'on a mémorisé.

Pars de ton pipeline qui marche et fais **chaque variante dans un commit séparé**. Le run doit rester vert après chacune.

## Variante A — Le job tourne dans un conteneur

Ajoute `container: node:24` au job (et retire `setup-node`, devenu inutile).

- Le run va casser. **Pourquoi ?** Qu'est-ce qui change pour joindre MongoDB ?
- Adapte ce qu'il faut.

**Critère :** run vert, et tu sais expliquer la différence réseau entre « job sur le runner » et « job dans un conteneur ».

## Variante B — Seed depuis le runner

Remplace le seed fait avec `docker exec` par un seed lancé **depuis le runner** (ou depuis le conteneur du job
si tu as gardé la variante A). À toi de trouver comment obtenir un client MongoDB à cet endroit.

**Critère :** run vert, plus aucun `docker exec` dans le workflow, et tu sais dire quelle approche tu préfères et pourquoi.

## Variante C — Matrice de versions Node

Fais tourner les tests sur **Node 22 et 24** en parallèle.

**Critère :** deux jobs visibles dans l'onglet Actions, tous deux verts. Que se passe-t-il pour l'autre version si l'une échoue ? Comment changer ce comportement ?

## Variante D (bonus) — Rapport de tests

Archive `test-results.xml` comme artefact, **y compris quand les tests échouent**.
Avec la matrice, attention : deux jobs qui uploadent un artefact du même nom.

**Critère :** l'artefact est téléchargeable depuis le run, même sur un run rouge (casse un test volontairement pour vérifier, puis répare-le).

## Journal

| Variante | Ce qui a cassé | Ce que j'ai compris |
|----------|----------------|---------------------|
| A | | |
| B | | |
| C | | |
| D | | |
