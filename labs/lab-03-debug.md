# Lab 03 — Dépannage d'un pipeline cassé

**Branche :** `lab/03-debug` (déjà créée et poussée)
**Durée visée :** 1 h
**Compétence :** diagnostiquer une CI en échec à partir des logs — le quotidien d'un DevOps.

## Le ticket

> **INC-2048 — Priorité : haute**
> **De :** Karim, équipe Backend
> **Objet :** La CI est cassée depuis mon commit
>
> Salut, j'ai fait un peu de ménage dans le workflow CI (renommage du service Mongo et quelques
> ajustements de config) sur `lab/03-debug`. Depuis, plus rien ne marche et je ne comprends pas :
> je n'ai presque rien changé et le YAML est valide. Tu peux regarder ? On livre demain. Merci !

## Règles spécifiques

- Il y a **4 bugs**. Ils se révèlent **les uns après les autres** : en corriger un fait apparaître le suivant.
- **Pas de `git diff`** ni de comparaison avec `lab/02-github-actions` au départ. Ton outil, ce sont les **logs**.
  Comparer avec la dernière version qui marchait est une vraie technique de dépannage : garde-la en **joker**,
  utilisable une seule fois, après 20 min de blocage sur un même bug.
- Un commit `fix(ci): ...` par bug.

## Méthode

Pour chaque échec, réponds dans l'ordre :

1. **Le workflow s'est-il seulement lancé ?** (onglet Actions)
2. **Quel job / quel step est rouge ?** Le premier step en échec est celui qui compte.
3. **Que dit le message d'erreur exact ?** Lis-le en entier, y compris les lignes au-dessus.
4. **Quelle ligne du YAML est concernée ?** Formule une hypothèse *avant* de modifier.
5. **Corrige une seule chose**, pousse, observe.

## Définition de « terminé »

- [ ] Le run sur `lab/03-debug` est vert
- [ ] 4 commits `fix(ci): ...`
- [ ] Le post-mortem ci-dessous est rempli
- [ ] Tu sais dire, pour chaque bug, comment l'éviter à l'avenir

## Post-mortem

| # | Symptôme (ce que j'ai observé) | Cause (pourquoi ça cassait) | Correctif | Comment l'éviter |
|---|-------------------------------|-----------------------------|-----------|------------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |

## Journal

Temps passé, blocages, indices demandés :

-
