// scripts/fetch-covers.mjs
// Usage : node scripts/fetch-covers.mjs
// Lit js/data.js, récupère les URLs RAWG, réécrit data.js avec un champ img par jeu.

import { readFileSync, writeFileSync } from 'fs';
import { setTimeout as sleep } from 'timers/promises';

const RAWG_KEY  = 'f6c45b580a3841c8bf5a054192ee23fd';
const DATA_PATH = 'js/data.js';
const DELAY_MS  = 300; // délai entre requêtes pour respecter le rate limit

// ── Lire le fichier et extraire les slugs ──
const raw = readFileSync(DATA_PATH, 'utf8');

// Extraire tous les slugs via regex
const slugMatches = [...raw.matchAll(/slug:\s*"([^"]+)"/g)];
const slugs = slugMatches.map(m => m[1]);
console.log(`${slugs.length} jeux trouvés.\n`);

// ── Fetch toutes les URLs ──
const imgMap = {};
for (const slug of slugs) {
  const url = `https://api.rawg.io/api/games/${encodeURIComponent(slug)}?key=${RAWG_KEY}`;
  try {
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const src  = data.background_image || data.background_image_additional || null;
    // Retirer le segment de resize pour avoir la pleine résolution
    imgMap[slug] = src ? src.replace(/\/resize\/\d+\/-\//, '/') : null;
    const status = imgMap[slug] ? '✓' : '✗ (pas d\'image)';
    console.log(`${status}  ${slug}`);
  } catch(e) {
    imgMap[slug] = null;
    console.log(`✗ ERREUR  ${slug} — ${e.message}`);
  }
  await sleep(DELAY_MS);
}

// ── Injecter img dans chaque entrée de GAMES ──
// On cherche chaque ligne slug:"..." et on insère img:"..." juste après
let updated = raw;

for (const [slug, imgUrl] of Object.entries(imgMap)) {
  // Échapper les caractères spéciaux dans le slug pour la regex
  const escapedSlug = slug.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  // Remplacer slug:"..." par slug:"...", img:"..."
  // Mais seulement si img n'est pas déjà présent sur cette ligne
  updated = updated.replace(
    new RegExp(`(slug:\\s*"${escapedSlug}",)(?!\\s*\\n.*img:)`, 'g'),
    `$1\n    img:${imgUrl ? `"${imgUrl}"` : 'null'},`
  );
}

writeFileSync(DATA_PATH, updated, 'utf8');
console.log(`\n✅ data.js mis à jour avec ${Object.values(imgMap).filter(Boolean).length} URLs d'images.`);
console.log(`   ${Object.values(imgMap).filter(v => !v).length} jeux sans image.`);
