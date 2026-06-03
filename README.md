# timeline_JV

> Frise chronologique personnelle des jeux vidéo qui m'ont marqué, de 1990 à 2020.

Une page web statique (HTML / CSS / JS vanilla, sans framework) qui présente une centaine de jeux organisés par décennie, avec un système de filtres permettant de réduire la sélection à un top 50, top 20, top 10 ou top 5. Les top 20, top 10 et top 5 s'affichent dans un carrousel dédié, accompagnés d'opinions personnelles rédigées pour les jeux phares.

---

## Aperçu des fonctionnalités

- **Frise verticale néon-rétro** organisée par décennies (1990s → 2020s), avec une carte par jeu (titre, année, plateforme, éditeur, description, tag genre, jaquette).
- **Barre de filtres** permettant de basculer entre la frise complète, un top 50, top 20, top 10 ou top 5.
- **Carrousel dédié** pour les tops 20, 10 et 5, avec navigation au clavier (← →), au swipe sur mobile, ou via les boutons / dots.
- **Avis personnels** affichés dans le carrousel pour les jeux du top.
- **Cross-références « Voir aussi »** : les pills qui pointent vers une autre entrée présente dans la frise sont stylées différemment (cyan, flèche `→`) et permettent de naviguer directement vers la carte cible avec animation de flash à l'arrivée.
- **Chargement progressif des jaquettes** via l'API RAWG (avec fallback en cas d'URL expirée).
- **Modale d'image** : un clic sur une jaquette l'ouvre en plein écran.
- **Responsive mobile** : la mise en page passe en colonne unique sur écrans étroits, et le swipe tactile remplace le clavier dans le carrousel.

---

## Structure du projet

```
timeline_JV/
├── timeline-jeux-video.html    # Page d'entrée
├── css/
│   └── styles.css              # Styles néon-rétro complets (frise + carrousel + modale + responsive)
├── js/
│   ├── data.js                 # Données des jeux (tableau GAMES) + clé API RAWG
│   └── app.js                  # Logique : rendu, filtres, carrousel, modale, chargement images
├── scripts/
│   └── fetch-covers.mjs        # Script Node.js de pré-fetch des URLs de jaquettes RAWG
└── README.md
```

---

## Format d'une entrée de jeu (`data.js`)

```javascript
{
  year: 2003,
  slug: "castlevania-aria-of-sorrow-2",     // identifiant unique (et URL RAWG)
  img: "https://media.rawg.io/.../cover.jpg",
  rank: 10,                                  // optionnel : position dans le classement perso
  title: "Castlevania: Aria of Sorrow",
  platform: "Game Boy Advance",
  publisher: "Konami",
  tags: ["Metroidvania", "Horreur / Sombre"],
  emoji: "🏰",
  alts: ["Bloodstained: Ritual of the Night (2019)"],  // optionnel : « voir aussi »
  desc: "Description courte du jeu.",
  opinion: "Avis personnel développé (s'affiche dans le carrousel)."  // optionnel
}
```

---

## Comment l'utiliser en local

Aucune compilation nécessaire — c'est du HTML / CSS / JS pur.

1. Cloner le dépôt.
2. Ouvrir `timeline-jeux-video.html` dans un navigateur (ou servir le dossier via un serveur statique léger, ex : `python -m http.server`).
3. Pour mettre à jour les jaquettes en lot, lancer le script de pré-fetch :
   ```bash
   node scripts/fetch-covers.mjs
   ```
   (Nécessite une clé RAWG, déjà présente dans `data.js`.)

---

## Stack technique

- **HTML5 / CSS3** : flexbox, custom properties, animations, `backdrop-filter`, gradients linéaires et radiaux.
- **JavaScript vanilla** (ES6+) : pas de framework, pas de bundler, pas de dépendances NPM côté front.
- **Polices Google Fonts** : `Press Start 2P` (pixel rétro), `Orbitron` (futuriste), `Rajdhani` (corps de texte).
- **API RAWG** ([rawg.io](https://rawg.io)) : récupération des jaquettes par slug, avec fallback automatique sur l'endpoint API en cas d'URL pré-stockée expirée.
- **Node.js** (uniquement pour le script `fetch-covers.mjs` de pré-population des URLs d'images).

---

## Transparence — Qu'est-ce qui est humain, qu'est-ce qui vient d'une IA ?

Ce projet a été développé en grande partie avec l'assistance d'une IA (Claude, Anthropic). Pour rester honnête sur ce qui relève de moi et ce qui a été co-produit, voici la répartition en trois niveaux.

### 100 % humain

Ces éléments relèvent intégralement de mes choix personnels — l'IA n'a fait que les transcrire ou les organiser.

- **La sélection des jeux** : les ~145 titres présents dans la frise viennent de ma propre mémoire, de mes goûts et de mon parcours de joueur depuis les années 90. Aucune IA n'a suggéré quels jeux inclure ou exclure.
- **Le classement personnel** (top 50, top 20, top 10, top 5) : chaque rang reflète ma propre hiérarchie subjective.
- **Les opinions personnelles** rédigées pour les jeux du top 10 : le contenu, les anecdotes vécues (la première fois que Méduse est entrée dans ma ville sur Zeus, les 130 h sur une Elfe citadine de Dragon Age, l'achèvement de Populous 20 ans après ma première partie grâce à la communauté, etc.) sont 100 % les miens. L'IA a seulement servi de relecteur de style et de grammaire — j'ai corrigé ses propositions à plusieurs reprises pour conserver mon ton.
- **Le concept global et le ton visuel** voulus pour le site (esthétique néon-rétro arcade, organisation par décennies, double affichage frise / carrousel).

### Assisté par IA, avec relecture et corrections humaines

Ces éléments ont été produits par l'IA selon mes consignes, puis relus et corrigés par moi avant intégration.

- **Le code HTML / CSS / JS** : la structure de base, les animations, le carrousel, les filtres, la modale, le système de cross-référencement « Voir aussi », le chargement progressif des jaquettes — tout cela a été généré ou co-écrit avec l'IA. J'ai testé, validé, demandé des ajustements et corrigé les comportements qui ne me convenaient pas.
- **Les scripts utilitaires** (`scripts/fetch-covers.mjs`) : script Node.js généré par l'IA pour automatiser le pré-chargement des URLs RAWG.
- **Les choix de typographie et de palette** : palette néon (cyan, rose, jaune, vert, violet) et trio de polices Google Fonts proposés par l'IA, validés et conservés par moi.

### Initialement généré par IA, factuellement révisé

Ces éléments ont été produits par l'IA puis ont fait l'objet d'une **passe de vérification factuelle** ciblée (avec corrections d'erreurs identifiées).

- **Les ~145 descriptions courtes de jeux** dans `data.js` : ce sont des textes initialement rédigés par l'IA à partir de ses connaissances générales. Une première relecture a permis d'identifier des erreurs factuelles majeures (par exemple, *America: No Peace Beyond the Line* décrit à tort comme un jeu de pirates au lieu de la conquête de l'Ouest). Une seconde passe a corrigé d'autres erreurs : fautes sur les maladies de *Theme Hospital* (« faux docteur » et « langue de bois » n'existent pas dans le jeu), inversion développeur/éditeur de *Rage of Mages*, etc. Malgré ces corrections, **il est possible que des inexactitudes subsistent** — les descriptions n'ont pas valeur de référence encyclopédique, mais d'introduction synthétique.
- **Le brouillon `TAGS-PROPOSITION.md`** : réflexion sur la taxonomie des tags, générée comme support de travail puis exploitée partiellement.

### Pourquoi cette transparence ?

Parce que c'est honnête, et parce que ça compte. Un projet personnel comme une frise vidéoludique repose sur l'authenticité du regard porté — il serait malhonnête de laisser croire que j'ai écrit moi-même 145 mini-textes encyclopédiques, et il serait tout aussi malhonnête de laisser penser que l'IA a choisi mes jeux préférés à ma place. Cette section permet à tout visiteur de savoir ce qu'il lit : un regard humain sur 30 ans de jeu vidéo, mis en forme avec l'aide d'un outil moderne, et patiemment relu pour que les faits tiennent debout.

---

## Données externes

- **API RAWG** ([rawg.io/apidocs](https://rawg.io/apidocs)) : utilisée pour récupérer les jaquettes de jeux. Une clé API gratuite est intégrée à `data.js` (`RAWG_KEY`).
- **Google Fonts** : polices `Press Start 2P`, `Orbitron`, `Rajdhani` chargées via CDN.

---

## Licence

Code : libre d'usage personnel et de modification.
Contenu éditorial (sélection, classement, opinions personnelles) : © SansNom — usage à des fins de citation autorisé avec mention de la source.
