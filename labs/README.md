# Labs GitHub Actions — parcours d'entraînement

Objectif : être capable, **seul et avec la doc officielle**, d'écrire, faire évoluer et dépanner un pipeline GitHub Actions comme en entreprise.

Ces labs complètent le cours KodeKloud. Ils partent du pipeline réalisé dans `lab/02-github-actions` :
tests unitaires Node 24 + MongoDB en *service container* + seed de la base.

## Les labs

| # | Lab | Branche | Ce que ça prouve | Quand |
|---|-----|---------|------------------|-------|
| 03 | [Dépannage d'un pipeline cassé](lab-03-debug.md) | `lab/03-debug` | Tu sais lire des logs et trouver une cause | Maintenant |
| 04 | [Reconstruire de mémoire](lab-04-replay.md) | `lab/04-replay` | Tu as retenu les notions, pas juste le fichier | Le lendemain |
| 05 | [Variantes](lab-05-variante.md) | `lab/05-variante` | Tu as **compris** (tu sais adapter) | Après le 04 |
| 06 | [Documenter pour un collègue](lab-06-documenter.md) | `lab/06-doc` | Tu sais **expliquer** | Après le 05 |

## Règles communes

1. **Doc officielle autorisée**, comme au travail : <https://docs.github.com/actions>.
   Interdit : copier ton ancien workflow, les vidéos, ou demander la solution.
2. **Les logs d'abord.** Avant toute modification, lis le log du run en échec et formule une hypothèse.
3. **Une correction = un commit**, avec un message qui dit la *cause* :
   `fix(ci): <ce qui était faux et pourquoi>`.
4. **Note tes blocages** dans la section « Journal » de chaque lab. Ce sont tes vrais points faibles : c'est eux qu'on révise.
5. **Indices graduels** si tu bloques plus de 20 min (demande à Claude en précisant le niveau) :
   - **Indice 1** : où regarder
   - **Indice 2** : ce qui ne va pas
   - **Indice 3** : la solution

   Commence toujours par l'indice 1.
6. **Validation** : un lab est terminé quand le run est vert **et** que tu peux expliquer chaque ligne que tu as écrite ou corrigée.

## Démarrer un lab

```powershell
git switch lab/02-github-actions
git pull
git switch -c lab/0X-nom          # sauf lab 03 : la branche existe déjà
```

Le workflow se déclenche au push sur `main` et `lab/*`, ou à la main depuis l'onglet **Actions**.

## Auto-évaluation (sans regarder)

À refaire avant chaque lab. Si tu hésites sur plus de deux questions, relis tes notes d'abord.

1. Pourquoi un run échoue-t-il en **0 seconde** ?
2. Différence entre `${{ secrets.X }}` et `$X` dans un `run:` ?
3. Que vaut `secrets.TRUC` si ce secret n'existe pas ?
4. Pourquoi `localhost:27017` fonctionne ici, et quand faut-il écrire `mongo:27017` ?
5. Pourquoi `npm ci` plutôt que `npm install` en CI ?
6. À quoi sert `--health-cmd` sur un service ?
7. Où ranger une URL, un nom d'utilisateur, un mot de passe : `env`, `vars` ou `secrets` ?
8. Pourquoi « admin » apparaît en `***` partout dans les logs de ce dépôt ?
