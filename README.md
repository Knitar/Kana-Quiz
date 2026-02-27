# Kana Quiz v2

Application web pour apprendre les kana (hiragana/katakana) avec trois modes complémentaires.

## Lancer l'application

Aucune installation nécessaire : ouvre simplement `kana-quiz-v2.html` dans ton navigateur.

## Fonctionnalités

### 1) Mode **Étude**
- Affiche une carte kana à la fois.
- Clique sur **👁 Cliquer pour révéler** (ou touche Espace) pour afficher la lecture romaji.
- Le mnémonique est maintenant **révélable** : il apparaît au moment de la révélation (pas avant).
- La prononciation se joue automatiquement quand tu révèles la carte d'étude.
- Tu peux naviguer avec les flèches clavier ou les boutons **Préc / Suiv**.

### 2) Mode **Quiz**
- Un kana est affiché, tu dois taper sa lecture en romaji.
- **確認** valide la réponse ; **⏭** passe la question (comptée comme erreur).
- Les statistiques de score, série, progression et points faibles sont mises à jour en direct.

### 3) Mode **Défi** (QCM)
- Le prompt est affiché et tu choisis la bonne réponse parmi 4 choix.
- Feedback visuel immédiat (bonne/mauvaise réponse).
- Temps moyen et meilleur temps affichés pendant la session.

## Réglages disponibles

- **Écriture** : Hiragana / Katakana / Mix
- **Deck** : Base / Dakuten / Yōon / Tout
- **Taille de session** : 5 / 10 / 20 / ∞
- **Mode spécial** :
  - **Normal**
  - **Survie** (système de vies)
  - **Drill** (focalisé sur les kana faibles)

## Audio et comportement

- La synthèse vocale utilise Web Speech API en `ja-JP` (révélation en Étude + feedback en Défi).
- En mode Étude, l'audio suit l'index de carte d'étude (pas la dernière question Quiz/Défi), ce qui corrige le décalage de prononciation après changement d'onglet.

## Persistance

Si `window.storage` est disponible, l'app sauvegarde :
- progression/statistiques globales,
- meilleur streak,
- onboarding.

