// ─────────────────────────────────────────────
//  RAWG API KEY
// ─────────────────────────────────────────────
const RAWG_KEY = 'f6c45b580a3841c8bf5a054192ee23fd';

// ─────────────────────────────────────────────
//  GAME DATA  (104 jeux, triés par année)
//  slug  = partie finale de l'URL rawg.io/games/SLUG
//  rank  = position dans votre classement personnel (optionnel)
// ─────────────────────────────────────────────
const GAMES = [

  // ── 1990 ──────────────────────────────────
  { year:1990, slug:"the-secret-of-monkey-island", rank: 50,
    title:"The Secret of Monkey Island", platform:"PC / Amiga / Mac", publisher:"LucasArts",
    genre:"Point & Click", emoji:"🖱️",
    desc:"Guybrush Threepwood rêve de devenir le pirate le plus redouté des Caraïbes. Un classique absolu signé LucasArts avec ses duels d'insultes cultes, son humour irrésistible et sa direction artistique intemporelle." },

  { year:1990, slug:"actraiser",
    title:"ActRaiser", platform:"Super Nintendo", publisher:"Enix",
    genre:"Action / Simulation", emoji:"⚡",
    desc:"Hybride unique mêlant action-plateforme et simulation de ville, où vous incarnez un dieu guidant l'évolution de ses fidèles tout en combattant des monstres. Une perle méconnue d'une ambition remarquable." },

  // ── 1992 ──────────────────────────────────
  { year:1992, slug:"indiana-jones-and-the-fate-of-atlantis", rank: 50,
    title:"Indiana Jones and the Fate of Atlantis", platform:"PC / Mac / Amiga", publisher:"LucasArts",
    genre:"Point & Click", emoji:"🎩",
    desc:"Indy et Sofia traquent les secrets du continent perdu d'Atlantide à travers trois voies narratives distinctes. Chef-d'œuvre de LucasArts, souvent considéré comme le meilleur point & click de toute la décennie 90." },

  { year:1992, slug:"super-mario-land-2-6-golden-coins",
    title:"Super Mario Land 2: 6 Golden Coins", platform:"Game Boy", publisher:"Nintendo",
    genre:"Platformer", emoji:"🦊",
    desc:"Mario doit récupérer six pièces magiques pour reprendre son château à Wario. Un Game Boy d'une variété de design et d'une qualité graphique remarquables, qui offre à Wario son premier grand rôle." },

  { year:1992, slug:"kirbys-dream-land",
    title:"Kirby's Dream Land", platform:"Game Boy", publisher:"HAL Laboratory / Nintendo",
    genre:"Platformer", emoji:"🌸",
    desc:"L'introduction du petit héros rose de HAL Laboratory au grand public. Simple, attachant et plein de personnalité, ce premier épisode Game Boy lance l'une des licences les plus créatives de Nintendo." },

  { year:1992, slug:"evo-search-for-eden",
    title:"EVO: Search for Eden", platform:"Super Nintendo", publisher:"Enix",
    genre:"Action-RPG", emoji:"🦕",
    desc:"Action-RPG unique où l'on guide l'évolution d'une créature à travers les âges préhistoriques, de poisson à reptile à mammifère. Une ambition folle mêlant biologie et fantaisie avec une âme incomparable." },

  // ── 1993 ──────────────────────────────────
  { year:1993, slug:"ogre-battle-the-march-of-the-black-queen",
    title:"Ogre Battle: The March of the Black Queen", platform:"Super Nintendo", publisher:"Quest / Enix",
    genre:"Tactical RPG", emoji:"♟️",
    desc:"Libérez un continent opprimé en commandant des armées de créatures mythiques dans un système de combats en temps réel unique. Tactical RPG d'une profondeur politique et morale rare, avec un système de réputation qui influe sur chaque fin possible." },

  { year:1993, slug:"maniac-mansion-day-of-the-tentacle", rank: 5,
    title:"Day of the Tentacle", platform:"PC / Mac", publisher:"LucasArts",
    genre:"Point & Click", emoji:"🖱️",
    desc:"Trois amis naviguent dans le temps pour empêcher un tentacule maléfique de conquérir le monde. Un chef-d'œuvre de l'humour absurde et du design de puzzles, suite directe du cultissime Maniac Mansion.",
    opinion:"Années 90 oblige, il faut un point & click dans cette liste. Le choix est très dur, entre un The Secret of Monkey Island au combat d'insultes cultissime, un Indiana Jones and the Fate of Atlantis qui propose 3 styles de jeux et une rejouabilité exceptionnelle pour un point & click, ou encore un Woodruff and the Schnibble of Azimuth avec son scénario singulier et son doublage soigné. Mais s'il n'en fallait garder qu'un, cela ne pourrait être que le titanesque Day Of The Tentacle, avec son humour absurde intemporel, ses voyages dans le temps réellement impliqués dans le gameplay, ses énigmes \"à l\'ancienne\" qui nous obligent à réfléchir, apportant une telle satisfaction lorsque l\'on trouve la réponse et ses graphismes cartoon qui vieillissent très bien, même si aujourd\'hui le remaster sublime davantage le style. Bref, un classique de chez classique, qui se joue à tout âge ou presque, et qui mérite amplement sa place dans ma ludothèque." },

  { year:1993, slug:"illusion-of-gaia",
    title:"Illusion of Time", platform:"Super Nintendo", publisher:"Enix",
    genre:"Action-RPG", emoji:"⚔️",
    desc:"Will parcourt les grandes civilisations de l'histoire — pyramides d'Égypte, Machu Picchu, Angkor Vat — pour sauver le monde d'une extinction annoncée. Une narration mature et une ambiance envoûtante." },
  
  // ── 1994 ──────────────────────────────────
  { year:1994, slug:"theme-park",
    title:"Theme Park", platform:"PC / SNES / Amiga", publisher:"Bullfrog Productions / EA",
    genre:"Gestion", emoji:"🎡",
    desc:"Construisez et gérez un parc d'attractions rentable, des montagnes russes aux stands de restauration. Le jeu de gestion de Bullfrog regorge d'humour britannique et de profondeur stratégique." },

  { year:1994, slug:"wario-land-super-mario-land-3", rank: 50,
    title:"Wario Land: Super Mario Land 3", platform:"Game Boy", publisher:"Nintendo",
    genre:"Platformer", emoji:"🪙",
    desc:"Wario, avide et brutal, part à la chasse aux trésors dans ce platformer Game Boy qui redéfinit son personnage en anti-héros jouable. Un level design inventif centré sur l'accumulation de richesses et des capacités liées aux power-ups ennemis." },

  { year:1994, slug:"breath-of-fire-ii",
    title:"Breath of Fire II", platform:"Super Nintendo", publisher:"Capcom",
    genre:"RPG", emoji:"🐉",
    desc:"Ryu et son équipe enquêtent sur une religion corrompue qui cache une menace démoniaque ancienne. RPG SNES de Capcom au scénario plus sombre et mature que le premier opus, avec un système de fusion de personnages original." },

  { year:1994, slug:"woodruff-and-the-schnibble-of-azimuth", rank: 50,
    title:"Woodruff and the Schnibble of Azimuth", platform:"PC", publisher:"Coktel Vision / Sierra",
    genre:"Point & Click", emoji:"🖱️",
    desc:"Aventure point & click post-apocalyptique absurde et poétique made in France. Woodruff retrouve son père adoptif dans un univers bariolé loufoque, typiquement français dans son humour décalé." },

  { year:1994, slug:"the-firemen",
    title:"The Firemen", platform:"Super Nintendo", publisher:"Human Entertainment / Nintendo",
    genre:"Action", emoji:"🔥",
    desc:"Pete et Danny combattent un incendie dévastateur dans un gratte-ciel en utilisant lances à eau, extincteurs et accès de secours. Action-game SNES au gameplay atypique et à l'atmosphère tendue, rarement exporté hors du Japon et du Royaume-Uni — une curiosité exclusive au charme authentique." },
    
  // ── 1995 ──────────────────────────────────
  { year:1995, slug:"yoshis-island", rank: 50,
    title:"Super Mario World 2: Yoshi's Island", platform:"Super Nintendo", publisher:"Nintendo",
    genre:"Platformer", emoji:"🦕",
    desc:"Yoshi transporte bébé Mario à travers des niveaux peints à la craie dans un style aquarelle inédit. Un chef-d'œuvre graphique SNES d'une créativité permanente, avec des boss mémorables et inoubliables." },

  { year:1995, slug:"rayman", rank: 50,
    title:"Rayman", platform:"PlayStation / SNES / PC", publisher:"Ubisoft Montpellier",
    genre:"Platformer", emoji:"🦊",
    desc:"Premier opus du héros sans membres d'Ubisoft Montpellier. Des mondes oniriques sublimement animés, une bande-son jazzy envoûtante et un level design exigeant pour un platformer 2D parmi les plus ambitieux." },

  { year:1995, slug:"chrono-trigger-1995", rank: 5,
    title:"Chrono Trigger", platform:"Super Nintendo", publisher:"Square",
    genre:"RPG", emoji:"⚔️",
    desc:"L'un des plus grands RPG de tous les temps, né de la collaboration Toriyama-Horii-Sakaguchi. Voyage dans le temps, système ATB innovant, fins multiples et compositions légendaires de Mitsuda.",
    opinion:"Chrono Trigger est considéré par beaucoup comme un des meilleurs RPG de tous les temps, et cette réputation n'est pas volée ! Non seulement le titre sublime des mécaniques déjà existantes comme le système Active Time Battle (ATB) créé pour Final Fantasy 4 à l'origine, mais il innove le genre en proposant des combats non aléatoires directement dans la zone de jeu, les attaques combinées entre personnages, douze fins uniques et même le New Game + ! Son scénario, bien que traitant classiquement du bien et du mal, propose un univers unique divisé en six époques. Les graphismes sont magnifiques et exploitent une SNES en fin de vie. Et que dire de l'OST, simplement sublime avec ses 64 titres variés, composés en grande partie par un Yasunori Mitsuda à ses débuts, épaulé par Nobuo Uematsu lorsque la fatigue l'a contraint à s'arrêter ! Bref, un coup de cœur, qui avait été traduit en français à l'époque par les bénévoles de Terminus Traduction, qu'il convient de saluer ici !"},

  { year:1995, slug:"trials-of-mana", rank: 20,
    title:"Seiken Densetsu 3 / Trials of Mana", platform:"Super Nintendo", publisher:"Square",
    genre:"Action-RPG", emoji:"⚔️",
    desc:"Suite de Secret of Mana avec 6 personnages jouables et 3 storylines distinctes. Un action-RPG vibrant aux graphismes SNES sublimes, injustement resté exclusif au Japon pendant plus de vingt ans." },

  { year:1995, slug:"front-mission",
    title:"Front Mission", platform:"Super Nintendo", publisher:"Square",
    genre:"Tactical RPG", emoji:"🤖",
    desc:"Tactical RPG dans un futur proche où des mechas géants s'affrontent pour des enjeux géopolitiques complexes. Un scénario politique sophistiqué et un système de personnalisation profond pour une saga culte." },

  { year:1995, slug:"tales-of-phantasia",
    title:"Tales of Phantasia", platform:"Super Nintendo", publisher:"Namco",
    genre:"RPG", emoji:"⚔️",
    desc:"Le premier Tales of, avec un système de combat en temps réel révolutionnaire pour les RPG japonais de l'époque. Une saga fondatrice qui allie nervosité des affrontements et narration épique." },

  { year:1995, slug:"terranigma",
    title:"Terranigma", platform:"Super Nintendo", publisher:"Enix",
    genre:"Action-RPG", emoji:"🌍",
    desc:"Ark ressuscite littéralement la Terre et ses civilisations. Chef-d'œuvre mélancolique sur le cycle de la vie et de la mort, injustement méconnu hors du Japon — clôture magnifique de la trilogie de l'âme d'Enix." },

  // ── 1996 ──────────────────────────────────
  { year:1996, slug:"wipeout-2097", rank: 50,
    title:"Wipeout 2097", platform:"PlayStation / PC / Saturn", publisher:"Psygnosis",
    genre:"Course anti-gravité", emoji:"🚀",
    desc:"Vaisseaux anti-gravitationnels à des vitesses insensées sur des circuits futuristes conçus avec The Designers Republic. La bande-son électronique de The Chemical Brothers et Leftfield en fait une expérience sensorielle totale." },

  { year:1996, slug:"donkey-kong-country-3-dixies-double-trouble",
    title:"Donkey Kong Country 3", platform:"Super Nintendo", publisher:"Rare / Nintendo",
    genre:"Platformer", emoji:"🦍",
    desc:"Troisième volet de la trilogie SNES avec Dixie et Kiddy Kong à la rescousse. La technique graphique pré-rendue de Rare reste bluffante et la richesse des niveaux confirme l'excellence d'une série souvent sous-estimée." },

  // ── 1997 ──────────────────────────────────
  { year:1997, slug:"broken-sword-2-the-smoking-mirror", rank: 50,
    title:"Broken Sword 2: The Smoking Mirror", platform:"PC / PlayStation", publisher:"Revolution Software",
    genre:"Point & Click", emoji:"🗡️",
    desc:"George et Nico s'embarquent dans une enquête sur un culte maya et un miroir aux pouvoirs obscurs. Plus rythmé que son prédécesseur, il perfectionne la formule point & click avec des décors caraïbes et mésoaméricains somptueux." },

  { year:1997, slug:"age-of-empires",
    title:"Age of Empires", platform:"PC", publisher:"Ensemble Studios / Microsoft",
    genre:"Stratégie temps réel", emoji:"🏰",
    desc:"Le RTS historique qui démocratise le genre et façonne une génération entière de joueurs PC. De l'âge de pierre à l'Antiquité, bâtir sa civilisation et mener ses armées à la victoire devient une obsession." },

  { year:1997, slug:"crash-bandicoot-2",
    title:"Crash Bandicoot 2: Cortex Strikes Back", platform:"PlayStation", publisher:"Naughty Dog / Sony",
    genre:"Platformer", emoji:"🦊",
    desc:"La série atteint sa pleine maturité avec des niveaux thématiques variés — arctique, égout, espace — et une maniabilité affinée. Crash s'impose comme la mascotte incontestée de la PlayStation originale." },

  { year:1997, slug:"oddworld-abes-oddysee", rank: 50,
    title:"Oddworld: Abe's Oddysee", platform:"PlayStation / PC", publisher:"Oddworld Inhabitants / GT Interactive",
    genre:"Platformer", emoji:"👾",
    desc:"Abe, esclave moudar dans une usine de viande, s'échappe et tente de sauver ses 99 congénères. Platformer sombre et satirique, critique du capitalisme industriel, avec un gameplay de possession mentale unique." },

  { year:1997, slug:"theme-hospital", rank: 10,
    title:"Theme Hospital", platform:"PC", publisher:"Bullfrog Productions / EA",
    genre:"Gestion", emoji:"🏥",
    desc:"Gérez un hôpital peuplé de maladies absurdes — crâne gonflé, faux docteur, syndrome de la langue de bois. L'humour britannique décapant de Bullfrog en fait un jeu de gestion culte et toujours aussi savoureux." },

  { year:1997, slug:"the-lost-vikings-2",
    title:"The Lost Vikings 2", platform:"Super Nintendo / PS1 / PC", publisher:"Blizzard Entertainment",
    genre:"Platformer / Puzzle", emoji:"🪓",
    desc:"Erik, Baleog et Olaf sont de retour, accompagnés de deux nouveaux compagnons aux capacités inédites. Suite du cultissime premier opus de Blizzard, The Lost Vikings 2 pousse encore plus loin l'ingéniosité des puzzles en coopération asynchrone." },

  { year:1997, slug:"dungeon-keeper-gold",
    title:"Dungeon Keeper", platform:"PC", publisher:"Bullfrog Productions / EA",
    genre:"God Game / Gestion", emoji:"😈",
    desc:"Incarnez le Gardien du Donjon : creusez, piégez, recrutez des créatures maléfiques et repoussez les héros envahisseurs. Chef-d'œuvre absolu de Peter Molyneux et Bullfrog, Dungeon Keeper renverse les conventions du genre avec un humour noir irrésistible et une profondeur de gestion redoutable." },
  
  // ── 1998 ──────────────────────────────────
  { year:1998, slug:"the-legend-of-zelda-links-awakening-dx", rank: 50,
    title:"The Legend of Zelda: Link's Awakening DX", platform:"Game Boy Color", publisher:"Nintendo",
    genre:"Action-Aventure", emoji:"🗡️",
    desc:"Link naufragé sur l'île mystérieuse de Cocolint doit réveiller le Poisson-Vent. Un Zelda atypique, mélancolique et poétique, avec une conclusion émotionnelle inattendue et des emprunts savoureux à d'autres licences." },

  { year:1998, slug:"suikoden-ii-2014", rank: 50,
    title:"Suikoden II", platform:"PlayStation", publisher:"Konami",
    genre:"RPG", emoji:"⚔️",
    desc:"RPG PS1 d'une richesse scénaristique bouleversante avec 108 personnages recrutables. Une histoire de guerre, de trahison et d'amitié brisée d'une intensité rare dans le médium, encore adulée des décennies plus tard." },

  { year:1998, slug:"crash-bandicoot-warped", rank: 20,
    title:"Crash Bandicoot 3: Warped", platform:"PlayStation", publisher:"Naughty Dog / Sony",
    genre:"Platformer", emoji:"🦊",
    desc:"Crash et Coco voyagent dans le temps et débloquent de nouvelles capacités spectaculaires — moto, avion biplan, sous-marin. L'apothéose de la trilogie PS1, avec une générosité de contenu exemplaire." },

  { year:1998, slug:"medievil",
    title:"MediEvil", platform:"PlayStation", publisher:"SCE Cambridge Studio / Sony",
    genre:"Action-Aventure", emoji:"💀",
    desc:"Sir Daniel Fortesque, chevalier lâche ressuscité par accident, doit sauver le royaume de Gallowmere. Une aventure gothique et humoristique, exclusive PlayStation d'un charme noir irrésistible." },

  { year:1998, slug:"the-settlers-3",
    title:"The Settlers III", platform:"PC", publisher:"Blue Byte",
    genre:"Stratégie / Gestion", emoji:"🏗️",
    desc:"Troisième opus de la saga de colonisation Blue Byte. Construire des chaînes de production complexes et mener ses armées à la conquête d'îles colorées — un équilibre parfait entre détente et stratégie." },

  { year:1998, slug:"populous-the-beginning", rank: 10,
    title:"Populous: The Beginning", platform:"PC", publisher:"Bullfrog Productions / EA",
    genre:"God Game", emoji:"⚡",
    desc:"Troisième volet 3D de la saga god game de Bullfrog. Vous incarnez une chamane qui guide sa tribu à conquérir des planètes grâce à un arsenal de sortilèges divins dévastateurs — tornade, volcan, tremblement de terre." },

  // ── 1999 ──────────────────────────────────
  { year:1999, slug:"heroes-of-might-and-magic-3-the-restoration-of-era", rank: 50,
    title:"Heroes of Might and Magic III", platform:"PC", publisher:"New World Computing / 3DO",
    genre:"Tour par tour", emoji:"♟️",
    desc:"Le sommet absolu de la saga HoMM, encore joué compétitivement vingt-cinq ans après sa sortie. Exploration de cartes gigantesques, recrutement de créatures légendaires et sièges de châteaux en heroic fantasy." },

  { year:1999, slug:"grandia", rank: 50,
    title:"Grandia", platform:"PlayStation / Saturn", publisher:"Game Arts / Sony",
    genre:"RPG", emoji:"⚔️",
    desc:"Justin, fils d'aventurier, part à la découverte des mystères d'une civilisation ancienne dans un monde en pleine révolution industrielle. RPG de Game Arts au système de combat dynamique révolutionnaire, vibrant d'optimisme et d'esprit d'aventure." },

  { year:1999, slug:"chrono-cross-2011",
    title:"Chrono Cross", platform:"PlayStation", publisher:"Square",
    genre:"RPG", emoji:"⚔️",
    desc:"Suite spirituelle de Chrono Trigger dans un univers de mondes parallèles avec 45 personnages jouables. Une bande-son magistrale de Mitsuda et un système de combat en éléments chromatiques composent une œuvre fascinante." },

  { year:1999, slug:"metal-gear-solid-vr-missions",
    title:"Metal Gear Solid: VR Missions", platform:"PlayStation", publisher:"Konami",
    genre:"Action Furtive", emoji:"👁️",
    desc:"Extension de MGS avec plus de 300 missions de simulation virtuelle pour Solid Snake. Un bac à sable d'entraînement qui approfondit toutes les mécaniques de furtivité dans des décors polygonaux hypnotiques." },

  { year:1999, slug:"civilization-call-to-power", rank: 50,
    title:"Civilization: Call to Power", platform:"PC", publisher:"Activision",
    genre:"4X / Tour par tour", emoji:"🌍",
    desc:"Spin-off de la saga Civilization qui guide une civilisation de l'Antiquité jusqu'au futur lointain, avec des ères science-fiction inédites incluant la conquête spatiale et les fonds marins." },

  { year:1999, slug:"worms-armageddon",
    title:"Worms Armageddon", platform:"PC / PlayStation / N64 / DC", publisher:"Team17",
    genre:"Stratégie / Artillerie", emoji:"💣",
    desc:"Le sommet absolu de la saga Worms, avec ses centaines d'armes absurdes et son humour britannique irrésistible. Dix modes de jeu, un éditeur de niveaux et un multijoueur dévastateur qui réunit encore des communautés entières." },

  { year:1999, slug:"ape-escape",
    title:"Ape Escape", platform:"PlayStation", publisher:"Sony",
    genre:"Platformer", emoji:"🐒",
    desc:"Spike doit capturer une horde de singes espièges disséminés à travers le temps après qu'ils se soient emparés de casques de contrôle mental. Premier jeu PlayStation à rendre l'usage des deux sticks analogiques obligatoire, Ape Escape est un platformer inventif et plein de charme." },

  { year:1999, slug:"simcity-3000",
    title:"SimCity 3000", platform:"PC / Mac", publisher:"Maxis / EA",
    genre:"City Builder", emoji:"🏙️",
    desc:"SimCity 3000 raffine la formule isométrique avec une gestion des déchets, des négociations avec les villes voisines et une ambiance sonore et visuelle particulièrement soignée. Un épisode souvent sous-estimé entre le légendaire 2000 et le colossal SimCity 4." },
  
  // ── 2000 ──────────────────────────────────
  { year:2000, slug:"zeus-master-of-olympus", rank: 5,
    title:"Zeus: Master of Olympus", platform:"PC", publisher:"Impressions Games / Sierra",
    genre:"City Builder", emoji:"🏛️",
    desc:"City builder mythologique dans la Grèce antique. Construisez des cités florissantes, apaisez les dieux de l'Olympe et repoussez les monstres légendaires dans ce titre d'une richesse culturelle sincère." },

  { year:2000, slug:"final-fantasy-ix",
    title:"Final Fantasy IX", platform:"PlayStation", publisher:"Square",
    genre:"RPG", emoji:"⚔️",
    desc:"Retour aux sources médiévales-fantastiques de la saga après les opus futuristes. Zidane, Garnet et Vivi vivent une aventure nostalgique et profondément émouvante — un amour déclaré aux RPG japonais classiques." },

  { year:2000, slug:"command-conquer-red-alert-2", rank: 20,
    title:"Command & Conquer: Red Alert 2", platform:"PC", publisher:"Westwood Studios / EA",
    genre:"Stratégie temps réel", emoji:"🏰",
    desc:"Uchronie de la Guerre Froide où l'URSS envahit les États-Unis avec des esprits contrôlés et des téléporteurs. STR nerveux et charismatique de Westwood avec des cinématiques live-action mémorables." },

  { year:2000, slug:"time-crisis-ii",
    title:"Time Crisis 2", platform:"Arcade / PlayStation 2", publisher:"Namco",
    genre:"Rail Shooter", emoji:"🔫",
    desc:"Deux agents affrontent une organisation terroriste dans un shooter sur rail en coopération, avec le système de pédale de mise à couvert emblématique de la série. Time Crisis 2 perfectionne la formule arcade de Namco et reste l'un des meilleurs rail shooters jamais conçus, aussi jouissif en solo qu'à deux." },
  
  // ── 2001 ──────────────────────────────────
  { year:2001, slug:"golden-sun",
    title:"Golden Sun", platform:"Game Boy Advance", publisher:"Camelot / Nintendo",
    genre:"RPG", emoji:"☀️",
    desc:"Isaac et ses compagnons Psynergistes partent empêcher l'allumage des quatre phares d'Alchemy dans un monde de fantasy coloré. RPG GBA de Camelot aux puzzles environnementaux ingénieux, vitrine technique absolue de la portable." },

  { year:2001, slug:"baldurs-gate-dark-alliance",
    title:"Baldur's Gate: Dark Alliance", platform:"PS2 / Xbox / GameCube", publisher:"Snowblind Studios / Interplay",
    genre:"Action-RPG", emoji:"⚔️",
    desc:"Hack-and-slash dans les Royaumes Oubliés pour trois héros qui démantèlent une alliance criminelle. Snowblind livre un dungeon crawler fluide et spectaculaire, pionnier du genre sur consoles, avec un mode coopératif particulièrement addictif." },

  { year:2001, slug:"phoenix-wright-ace-attorney-2001", rank: 50,
    title:"Phoenix Wright: Ace Attorney", platform:"Game Boy Advance", publisher:"Capcom",
    genre:"Visual Novel", emoji:"⚖️",
    desc:"Naruhodō Ryūichi, avocat maladroit, défend des accusés innocents dans des procès absurdes et dramatiques. Les OBJECTION ! retentissants, l'écriture savoureuse et les twists judiciaires en font une série unique." },

  { year:2001, slug:"max-payne", rank: 20,
    title:"Max Payne", platform:"PC / PS2 / Xbox", publisher:"Remedy Entertainment / 3D Realms",
    genre:"TPS", emoji:"🔫",
    desc:"Flic en cavale dans New York sous la neige, Max Payne popularise le bullet time et la narration en roman noir graphique. Remedy livre un shooter atmosphérique d'une intensité dramatique saisissante, hommage au cinéma hard-boiled." },

  { year:2001, slug:"commandos-2-men-of-courage",
    title:"Commandos 2: Men of Courage", platform:"PC", publisher:"Pyro Studios / Eidos",
    genre:"Tactique", emoji:"🪖",
    desc:"Six commandos aux compétences complémentaires infiltrent des bases ennemies dans des environnements en 3D isométrique. Pyro Studios signe le sommet de la série avec une richesse de missions et de possibilités tactiques inégalées." },

  { year:2001, slug:"arcanum-of-steamworks-and-magick-obscura",
    title:"Arcanum: Of Steamworks and Magick Obscura", platform:"PC", publisher:"Troika Games / Sierra",
    genre:"RPG", emoji:"⚙️",
    desc:"Un monde steampunk où magie et technologie industrielle s'affrontent. RPG isométrique de Troika d'une liberté narrative vertigineuse — race, classe, réputation et compétences recomposent entièrement l'expérience." },

  { year:2001, slug:"ring-of-red",
    title:"Ring of Red", platform:"PlayStation 2", publisher:"Konami",
    genre:"Tactical RPG", emoji:"🤖",
    desc:"Dans une Japon alternatif des années 60 où la guerre froide se joue à coups de mechas AFW, chaque combat au tour par tour se double d'une phase d'action en temps réel au cœur du cockpit. Ring of Red fascine par sa profondeur tactique atypique et son uchronie historique soignée, injustement ignoré à sa sortie." },
  
  // ── 2002 ──────────────────────────────────
  { year:2002, slug:"dark-cloud-2", rank: 50,
    title:"Dark Chronicle", platform:"PlayStation 2", publisher:"Level-5 / Sony",
    genre:"Action-RPG", emoji:"⚔️",
    desc:"Monica et Max voyagent dans le temps pour reconstruire un monde détruit, en combinant dungeon crawling et construction de villes. Un jeu généreux et touchant — vitrine de l'excellence naissante de Level-5." },

  { year:2002, slug:"warcraft-3-reign-of-chaos", rank: 50,
    title:"Warcraft III: Reign of Chaos", platform:"PC / Mac", publisher:"Blizzard Entertainment",
    genre:"Stratégie temps réel", emoji:"🏰",
    desc:"Révolutionne le RTS avec ses héros et ses éléments RPG profonds. Son éditeur donne naissance au genre MOBA via DotA — l'une des influences les plus durables et imprévisibles de l'histoire du jeu vidéo." },

  { year:2002, slug:"age-of-mythology", rank: 20,
    title:"Age of Mythology", platform:"PC", publisher:"Ensemble Studios / Microsoft",
    genre:"Stratégie temps réel", emoji:"⚡",
    desc:"Spin-off fantastique d'Age of Empires intégrant les panthéons grec, nordique et égyptien. Pouvoirs divins et créatures mythologiques insufflent une épopée légendaire à la formule RTS bien rodée." },

  { year:2002, slug:"metroid-fusion", 
    title:"Metroid Fusion", platform:"Game Boy Advance", publisher:"Nintendo",
    genre:"Metroidvania", emoji:"🪐",
    desc:"Samus, infectée par le parasite X, explore la station BSL sous la menace d'une version d'elle-même corrompue — le SA-X. Metroidvania GBA d'une tension exemplaire, avec un scénario nettement plus narratif que ses prédécesseurs." },

  { year:2002, slug:"syberia", rank: 50,
    title:"Syberia", platform:"PC / Mac", publisher:"Microïds / Benoît Sokal",
    genre:"Point & Click", emoji:"🚂",
    desc:"Kate Walker part en mission commerciale et se retrouve embarquée dans un voyage onirique à travers une Europe de l'Est steampunk. Une œuvre graphiquement sublime signée Benoît Sokal, avec des automates d'une poésie unique." },

  // ── 2003 ──────────────────────────────────
  { year:2003, slug:"tropico-2-pirate-cove",
    title:"Tropico 2: Pirate Cove", platform:"PC", publisher:"Frog City Software / Gathering",
    genre:"Gestion", emoji:"🏴‍☠️",
    desc:"Vous dirigez une île de pirates avec une poignée de forbans à contenter et des captifs à exploiter pour maintenir l'économie. Suite décalée du Tropico original, avec un humour mordant et une profondeur de gestion surprenante." },

  { year:2003, slug:"zoo-tycoon-2001",
    title:"Zoo Tycoon: Complete Collection", platform:"PC", publisher:"Blue Fang Games / Microsoft",
    genre:"Gestion", emoji:"🦁",
    desc:"Gérez un zoo avec des centaines d'espèces animales dans des habitats sur mesure. Blue Fang crée un jeu de simulation accessible et éducatif, véritable bac à sable créatif pour amoureux des animaux." },

  { year:2003, slug:"castlevania-aria-of-sorrow-2", rank: 10,
    title:"Castlevania: Aria of Sorrow", platform:"Game Boy Advance", publisher:"Konami",
    genre:"Metroidvania", emoji:"🏰",
    desc:"Soma Cruz découvre qu'il est la réincarnation de Dracula dans un château bloqué dans le futur. L'apogée de la formule Metroidvania sur GBA grâce au Tactical Soul — absorber les pouvoirs ennemis." },

  { year:2003, slug:"beyond-good-evil", rank: 20,
    title:"Beyond Good & Evil", platform:"PS2 / GameCube / Xbox / PC", publisher:"Ubisoft Montpellier",
    genre:"Action-Aventure", emoji:"📷",
    desc:"Jade, reporter-photographe et combattante, enquête sur une invasion extraterrestre dissimulée par le gouvernement. Jeu culte de Michel Ancel mêlant aventure, infiltration et photographie dans un univers SF vibrant." },

  { year:2003, slug:"xiii",
    title:"XIII", platform:"PS2 / Xbox / GameCube / PC", publisher:"Ubisoft",
    genre:"FPS", emoji:"🔫",
    desc:"FPS à l'esthétique bande dessinée où un amnésique découvre son passé d'assassin au cœur d'une conspiration présidentielle. Les onomatopées visuelles et son adaptation de la BD de Van Hamme en font un ovni PS2." },

  { year:2003, slug:"spellforce-the-order-of-dawn", rank: 50,
    title:"SpellForce: The Order of Dawn", platform:"PC", publisher:"Phenomic / JoWooD",
    genre:"RTS / RPG", emoji:"🧙",
    desc:"Hybride audacieux mêlant RTS de construction de base et RPG en temps réel où vous incarnez un Rune Warrior immortel. SpellForce fusionne deux genres avec une cohérence surprenante dans un univers fantasy riche." },

  { year:2003, slug:"final-fantasy-tactics-advance",
    title:"Final Fantasy Tactics Advance", platform:"Game Boy Advance", publisher:"Square Enix",
    genre:"Tactical RPG", emoji:"⚔️",
    desc:"Marche et ses amis sont aspirés dans le monde d'Ivalice, univers fait de règles et de lois à respecter sous peine de prison. Tactical RPG GBA d'une profondeur de gameplay et d'un système de jobs remarquables." },

  { year:2003, slug:"prince-of-persia-the-sands-of-time",
    title:"Prince of Persia: The Sands of Time", platform:"PS2 / Xbox / GameCube / PC", publisher:"Ubisoft Montréal",
    genre:"Action-Aventure", emoji:"⏳",
    desc:"Le Prince manipule le temps pour corriger ses erreurs dans un palais envahi de créatures de sable. Reboot magistral d'Ubisoft Montréal qui réinvente l'action-aventure avec une fluidité acrobatique et un charme narratif inégalé." },

  { year:2003, slug:"impossible-creatures",
    title:"Impossible Creatures", platform:"PC", publisher:"Relic Entertainment / Microsoft",
    genre:"Stratégie temps réel", emoji:"🧬",
    desc:"Rex Chance fusionne des animaux pour créer des créatures hybrides uniques constituant son armée. RTS de Relic au concept totalement original où chaque unité est une combinaison personnalisée de deux espèces — un bac à sable créatif fascinant, injustement tombé dans l'oubli." },

  { year:2003, slug:"warioware-inc-mega-microgame",
    title:"WarioWare, Inc.", platform:"Game Boy Advance", publisher:"Nintendo",
    genre:"Party Game", emoji:"🕹️",
    desc:"Wario lance sa boîte de jeux vidéo avec des centaines de microjeux de cinq secondes enchaînés à vitesse croissante. Nintendo invente un genre à part entière — frénétique, absurde et infiniment rejouable, WarioWare est l'une des expériences les plus originales et jubilatoires jamais produites sur GBA." },
  
  // ── 2004 ──────────────────────────────────
  { year:2004, slug:"dragon-quest-viii",
    title:"Dragon Quest VIII", platform:"PlayStation 2", publisher:"Level-5 / Square Enix",
    genre:"RPG", emoji:"⚔️",
    desc:"Premier opus PS2 du monument japonais avec un cel-shading lumineux révélant un monde immense signé Level-5. Yangus, Angelo et Jessica accompagnent le héros silencieux dans une aventure épique mémorable." },

  { year:2004, slug:"sly-2-band-of-thieves",
    title:"Sly 2: Band of Thieves", platform:"PlayStation 2", publisher:"Sucker Punch / Sony",
    genre:"Platformer", emoji:"🎭",
    desc:"Sly Cooper et sa bande démantèlent le KLAWW Gang. Plus ambitieux que son prédécesseur avec ses niveaux bacs à sable, il brille par son humour, sa générosité et l'alchimie de ses trois héros." },

  { year:2004, slug:"the-lord-of-the-rings-the-battle-for-middle-earth",
    title:"The Lord of the Rings: The Battle for Middle-earth", platform:"PC", publisher:"EA Games",
    genre:"Stratégie temps réel", emoji:"🏰",
    desc:"Revivez les batailles épiques de la trilogie Jackson en commandant les armées du Bien ou du Mal. RTS accessible et spectaculaire d'EA, avec des unités héroïques emblématiques et des assauts de Minas Tirith mémorables." },

  { year:2004, slug:"sacred",
    title:"Sacred", platform:"PC", publisher:"Ascaron Entertainment",
    genre:"Action-RPG", emoji:"⚔️",
    desc:"Hack-and-slash dans le vaste monde d'Ancaria avec six classes jouables. Sacred se distingue par son monde ouvert immense et continu, ses quêtes secondaires foisonnantes et sa rejouabilité redoutable." },

  // ── 2005 ──────────────────────────────────
  { year:2005, slug:"shadow-of-the-colossus", rank: 50,
    title:"Shadow of the Colossus", platform:"PlayStation 2", publisher:"Team Ico / Sony",
    genre:"Action-Aventure", emoji:"🗡️",
    desc:"Wander affronte seize colosses monumentaux pour ressusciter une jeune femme. Sans HUD, sans ennemis communs — un poème visuel et émotionnel de Fumito Ueda qui prouve que les jeux vidéo peuvent être de l'art." },

  { year:2005, slug:"the-movies",
    title:"The Movies", platform:"PC", publisher:"Lionhead Studios / Activision",
    genre:"Simulation", emoji:"🎬",
    desc:"Simulateur de studio hollywoodien de Peter Molyneux. Gérez acteurs, réalisateurs et plateaux de l'ère du muet au blockbuster moderne, tout en tournant vos propres films grâce à un éditeur créatif addictif." },

  { year:2005, slug:"soulcalibur-iii",
    title:"SoulCalibur III", platform:"PlayStation 2", publisher:"Namco",
    genre:"Combat", emoji:"⚔️",
    desc:"Le troisième opus de la saga d'armes blanches exclusive PS2 enrichit le roster avec des personnages créés de toutes pièces grâce à un mode Chronicles of the Sword ambitieux. SoulCalibur III reste l'épisode le plus généreux en contenu solo de la série, avec un système de combat spectaculaire au sommet de son art." },
  
  // ── 2006 ──────────────────────────────────
  { year:2006, slug:"okami", rank: 5,
    title:"Ōkami", platform:"PlayStation 2", publisher:"Clover Studio / Capcom",
    genre:"Action-Aventure", emoji:"🌸",
    desc:"Amaterasu, déesse-loup blanche, restaure la nature dévastée à coups de pinceau divin. Chef-d'œuvre visuel inspiré des estampes ukiyo-e et de Zelda — le Celestial Brush comme mécanique centrale d'une poésie incomparable.",
    opinion:"Ōkami est sans aucun doute le plus beau jeu auquel il m'a été donné de jouer. Sa direction artistique en cel-shading est indémodable, rappelant les estampes ukiyo-e et sumi-e provenant du Japon, univers dans lequel le jeu veut nous emmener. Mais s'arrêter à son identité visuelle serait un crime, tant le titre est bourré de qualités. Son gameplay tout d'abord, proposant un système de dessins magiques à peindre soi-même pour agir sur le décor, les énigmes et les combats. Son histoire ensuite, combinant mythologie et folklore japonais, et qui nous amène à jouer la déesse du soleil, Amaterasu. Malgré des critiques dithyrambiques, Ōkami fut un échec commercial à sa sortie, et Clover Studio qui était derrière ce projet a été dissous peu après. Heureux possesseur d'une des 10 000 copies de la version PlayStation 2 seulement distribuées en France, je ne risque pas de m'en séparer !"},

  { year:2006, slug:"company-of-heroes",
    title:"Company of Heroes", platform:"PC", publisher:"Relic Entertainment / THQ",
    genre:"Stratégie temps réel", emoji:"🪖",
    desc:"RTS tactique ancré dans le débarquement en Normandie, avec une physique destructible révolutionnaire et une gestion des unités d'une profondeur inédite. Considéré par beaucoup comme le meilleur RTS jamais conçu." },

  { year:2006, slug:"titan-quest", rank: 20,
    title:"Titan Quest", platform:"PC", publisher:"Iron Lore Entertainment / THQ",
    genre:"Action-RPG", emoji:"⚡",
    desc:"Hack-and-slash dans la Grèce antique, l'Égypte et la Chine mythologiques face aux Titans déchaînés. Titan Quest s'impose par sa richesse culturelle, ses classes hybrides et son atmosphère somptueuse." },

  { year:2006, slug:"elite-beat-agents",
    title:"Elite Beat Agents", platform:"Nintendo DS", publisher:"Nintendo",
    genre:"Rythme", emoji:"🕺",
    desc:"Des agents en costumes noirs sauvent des civils en difficulté grâce à la puissance de la musique, entièrement joué au stylet sur l'écran tactile du DS. Adaptation occidentale d'Osu! Tatakae! Ouendan, Elite Beat Agents est un jeu de rythme d'une énergie communicative et d'un humour visuel absolument irrésistibles." },
  
  // ── 2008 ──────────────────────────────────
  { year:2008, slug:"spore",
    title:"Spore", platform:"PC / Mac", publisher:"Maxis / EA",
    genre:"Simulation / Dieu", emoji:"🦠",
    desc:"Guidez une créature de cellule unicellulaire jusqu'à la conquête spatiale à travers cinq phases d'évolution distinctes. La vision de Will Wright pour un jeu de création infini — ambitieux, créatif et débordant de possibilités." },

  { year:2008, slug:"the-last-remnant",
    title:"The Last Remnant", platform:"PC / Xbox 360", publisher:"Square Enix",
    genre:"RPG", emoji:"⚔️",
    desc:"Rush Sykes part à la rescousse de sa sœur dans un monde dominé par d'énigmatiques artéfacts appelés Remnants. RPG de Square Enix au système de batailles en formations d'unités atypique, avec un lore d'une richesse considérable." },

  { year:2008, slug:"kings-bounty-the-legend", rank: 20,
    title:"King's Bounty: The Legend", platform:"PC", publisher:"Katauri Interactive / 1C Company",
    genre:"Tactical RPG", emoji:"♟️",
    desc:"Un chasseur de primes sillonne un monde de fantasy ouvert à dos de cheval pour lever des armées et combattre au tour par tour. Revival moderne du genre fondateur, King's Bounty séduit par son humour, sa richesse et sa liberté d'exploration." },

  // ── 2009 ──────────────────────────────────
  { year:2009, slug:"dragon-age-origins", rank: 10,
    title:"Dragon Age: Origins", platform:"PC / PS3 / Xbox 360", publisher:"BioWare / EA",
    genre:"RPG tactique", emoji:"🛡️",
    desc:"RPG tactique de BioWare avec six origines jouables distinctes. Un monde de heroic fantasy sombre, des choix moraux aux conséquences durables et un niveau d'écriture exceptionnel pour les compagnons et la politique du royaume." },

  { year:2009, slug:"dj-hero",
    title:"DJ Hero", platform:"PS3 / Xbox 360 / Wii", publisher:"Activision / FreeStyleGames",
    genre:"Rythme", emoji:"🎧",
    desc:"Mixez des mashups de morceaux iconiques sur une platine vinyle périphérique dans ce spinoff musical de Guitar Hero. FreeStyleGames livre une expérience de rythme unique en son genre, avec une tracklist soignée mêlant hip-hop, électro et pop — un objet culte sous-estimé de la grande époque des jeux musicaux." },
  
  // ── 2010 ──────────────────────────────────
  { year:2010, slug:"xenoblade-chronicles",
    title:"Xenoblade Chronicles", platform:"Wii", publisher:"Monolith Soft / Nintendo",
    genre:"RPG", emoji:"⚔️",
    desc:"Shulk armé du Monado affronte les Mechon sur le dos de deux titans pétrifiés depuis l'aube des temps. RPG d'une ambition narrative rare, avec un monde ouvert saisissant et la bande-son magistrale de Yoko Shimomura." },

  { year:2010, slug:"vvvvvv",
    title:"VVVVVV", platform:"PC / Mac / 3DS", publisher:"Terry Cavanagh",
    genre:"Platformer", emoji:"🔄",
    desc:"Captain Viridian ne peut pas sauter — il inverse la gravité. Platformer minimaliste d'une difficulté redoutable, avec une bande-son chiptune de SoulEye inoubliable et un game design d'une élégance absolue." },

  // ── 2011 ──────────────────────────────────
  { year:2011, slug:"rayman-origins",
    title:"Rayman Origins", platform:"Multi-plateformes", publisher:"Ubisoft Montpellier",
    genre:"Platformer", emoji:"🦊",
    desc:"Retour en 2D pour Rayman dans des mondes aquarellés d'une beauté sidérante. Fruit du moteur UbiArt révolutionnant l'animation 2D, ce platformer coopératif jusqu'à 4 joueurs est une déclaration d'amour au médium." },

  { year:2011, slug:"bastion",
    title:"Bastion", platform:"PC / Xbox 360", publisher:"Supergiant Games",
    genre:"Action-RPG", emoji:"⚔️",
    desc:"The Kid reconstruit le Bastion dans un monde fracturé, guidé par la voix narrative réactive de Rucks qui commente chaque action en temps réel. Premier jeu de Supergiant, un coup de maître visuel, sonore et ludique." },

  // ── 2012 ──────────────────────────────────
  { year:2012, slug:"the-walking-dead",
    title:"The Walking Dead: Season 1", platform:"Multi-plateformes", publisher:"Telltale Games",
    genre:"Aventure narrative", emoji:"📖",
    desc:"Lee Everett protège la petite Clementine dans un monde dévasté par les zombies. Telltale réinvente le jeu narratif épisodique avec des choix déchirants, des personnages profonds et une conclusion inoubliable." },

  { year:2012, slug:"hotline-miami", rank: 50,
    title:"Hotline Miami", platform:"PC / PS3 / PS Vita", publisher:"Dennaton Games / Devolver Digital",
    genre:"Action", emoji:"🔪",
    desc:"Tueur masqué assassine des gangsters au rythme d'une bande-son synthwave hypnotique dans une Miami néon des années 80. Ultra-violent et ultra-nerveux, il questionne notre rapport à la violence dans les jeux vidéo." },

  { year:2012, slug:"spec-ops-the-line", rank: 5,
    title:"Spec Ops: The Line", platform:"PC / PS3 / Xbox 360", publisher:"Yager Development / 2K",
    genre:"TPS", emoji:"💀",
    desc:"Shooter militaire en apparence, déconstruction lucide du genre en réalité. Inspiré de Au Cœur des Ténèbres de Conrad, il confronte le joueur à ses propres actes dans une Dubaï apocalyptique d'une noirceur rare." },

  { year:2012, slug:"fez", rank: 50,
    title:"Fez", platform:"Xbox 360 / PC / PS4", publisher:"Polytron Corporation",
    genre:"Puzzle-Platformer", emoji:"🧩",
    desc:"Gomez découvre la troisième dimension dans son monde 2D grâce à un fez magique. Puzzle-platformer de Phil Fish avec une rotation ingénieuse et des mystères cryptiques qui ont alimenté des mois d'exploration communautaire." },

  { year:2012, slug:"dust-an-elysian-tail",
    title:"Dust: An Elysian Tail", platform:"PC / Xbox 360 / PS4", publisher:"Humble Hearts",
    genre:"Action-RPG", emoji:"🌀",
    desc:"Dust, guerrier amnésique accompagné de l'épée parlante Ahrah et de la fée Fidget, explore un monde animé d'une beauté stupéfiante. Action-RPG développé quasi entièrement par une seule personne, Dean Dodrill, avec un système de combat fluide et spectaculaire d'une générosité remarquable." },
    
  // ── 2013 ──────────────────────────────────
  { year:2013, slug:"the-stanley-parable",
    title:"The Stanley Parable", platform:"PC", publisher:"Galactic Cafe",
    genre:"Aventure narrative", emoji:"📖",
    desc:"Stanley suit — ou non — les instructions d'un narrateur omniscient. Expérience métafictionnelle sur le libre arbitre et la condition du joueur. Drôle, philosophique et proprement fascinant — un objet vidéoludique unique." },

  { year:2013, slug:"deponia-the-complete-journey",
    title:"Deponia: The Complete Journey", platform:"PC / Mac / Linux", publisher:"Daedalic Entertainment",
    genre:"Point & Click", emoji:"🗑️",
    desc:"Rufus tente désespérément de quitter la planète-décharge Deponia pour rejoindre Elysium. Compilation de la trilogie de Daedalic, avec un humour absurde à l'allemande, des puzzles inventifs et une histoire d'amour délicieusement chaotique." },

  // ── 2014 ──────────────────────────────────
  { year:2014, slug:"this-war-of-mine",
    title:"This War of Mine", platform:"PC / Mobile / Consoles", publisher:"11 bit studios",
    genre:"Survie", emoji:"🕯️",
    desc:"Survivre dans une ville assiégée, non comme soldat mais comme civil. 11 bit studios signe un jeu courageux qui présente la guerre sous son angle le plus humain et douloureux — la faim, le deuil, les choix impossibles." },

  { year:2014, slug:"south-park-the-stick-of-truth", rank: 50,
    title:"South Park: The Stick of Truth", platform:"PC / PS3 / Xbox 360", publisher:"Obsidian Entertainment / Ubisoft",
    genre:"RPG", emoji:"⚔️",
    desc:"RPG tour par tour dans l'univers de la série culte, entièrement écrit par Parker et Stone. Obsidian livre une adaptation parfaite en termes d'humour dévastateur, de références pointues et de profondeur de gameplay." },

  { year:2014, slug:"shantae-and-the-pirates-curse",
    title:"Shantae and the Pirate's Curse", platform:"3DS / Wii U / PC", publisher:"WayForward",
    genre:"Metroidvania", emoji:"💃",
    desc:"La demi-génie Shantae perd ses pouvoirs magiques et doit s'allier à son ennemi pirate Risky Boots. Platformer-Metroidvania débordant d'énergie et de personnalité, avec un pixel art expressif et un level design généreux." },

  { year:2014, slug:"lumino-city",
    title:"Lumino City", platform:"PC / Mac / iOS", publisher:"State of Play Games",
    genre:"Point & Click", emoji:"🏙️",
    desc:"Lumi part à la recherche de son grand-père dans une ville construite entièrement à la main en maquettes de papier, carton et bois. Point & click d'une beauté artisanale époustouflante, récompensé pour son design et son univers incomparable." },

  // ── 2015 ──────────────────────────────────
  { year:2015, slug:"life-is-strange-episode-1-2",
    title:"Life is Strange", platform:"Multi-plateformes", publisher:"Dontnod Entertainment / Square Enix",
    genre:"Aventure narrative", emoji:"📷",
    desc:"Max Caulfield peut rembobiner le temps pour changer les événements du présent. Aventure narrative épisodique qui aborde avec sensibilité l'adolescence, l'amitié, le deuil et les conséquences irréversibles de nos choix." },

  { year:2015, slug:"ori-and-the-blind-forest", rank: 20,
    title:"Ori and the Blind Forest", platform:"PC / Xbox One", publisher:"Moon Studios / Microsoft",
    genre:"Platformer", emoji:"🌟",
    desc:"Ori, esprit de la forêt, restaure la lumière dans un monde mourant d'une beauté visuelle et musicale bouleversante. Platformer de précision exigeant signé Moon Studios, à la direction artistique somptueuse." },

  { year:2015, slug:"her-story", rank: 10,
    title:"Her Story", platform:"PC / Mac / iOS", publisher:"Sam Barlow",
    genre:"Aventure narrative", emoji:"📼",
    desc:"Explorez une base de données d'interrogatoires vidéo fragmentés pour reconstituer l'histoire d'une femme soupçonnée de meurtre. Sam Barlow réinvente la narration non-linéaire dans un thriller FMV d'une finesse et d'une efficacité rares." },

  { year:2015, slug:"evoland-legendary-edition", rank: 50,
    title:"Evoland: Legendary Edition", platform:"PC / Mobile / Switch", publisher:"Shiro Games",
    genre:"RPG", emoji:"🎮",
    desc:"Méta-RPG français qui voyage à travers l'histoire du jeu vidéo en débloquant ses propres mécaniques et graphismes au fil de la progression. Un hommage ludique et érudit signé Shiro Games aux grandes sagas du RPG japonais." },

  { year:2015, slug:"the-incredible-adventures-of-van-helsing-final-cut",
    title:"Van Helsing: Final Cut", platform:"PC", publisher:"NeocoreGames",
    genre:"Action-RPG", emoji:"🧛",
    desc:"Le fils du célèbre chasseur de monstres traque créatures et conspirateurs dans une Borgovie victorienne alternative. Hack-and-slash gothique à l'atmosphère soignée, avec un système de tours-défense original et un humour mordant." },

  { year:2015, slug:"rise-of-the-tomb-raider",
    title:"Rise of the Tomb Raider", platform:"Xbox One / PC / PS4", publisher:"Crystal Dynamics / Square Enix",
    genre:"Action-Aventure", emoji:"🏹",
    desc:"Lara Croft traque la légendaire cité de Kitezh dans les steppes sibériennes gelées. Sequel ambitieux qui perfectionne la formule reboot avec des tombeaux facultatifs exemplaires, une survie bien pensée et une narration plus mature." },

  { year:2015, slug:"steamworld-heist", rank: 20,
    title:"SteamWorld Heist", platform:"3DS / PC / Switch / PS4", publisher:"Image & Form",
    genre:"Stratégie tour par tour", emoji:"🤖",
    desc:"Des pirates-robots recrutent un équipage hétéroclite pour piller des vaisseaux en apesanteur dans des niveaux générés procéduralement. Tactical tour par tour au gameplay d'une élégance rare où viser manuellement fait toute la différence — une pépite d'Image & Form." },

  { year:2015, slug:"ronin", rank: 50,
    title:"RONIN", platform:"PC / Mac / Linux", publisher:"Devolver Digital",
    genre:"Action / Tactique", emoji:"⚔️",
    desc:"Une vindicatrice enchaîne des infiltrations nocturnes contre cinq cibles dans un système de combat au tour par tour déclenché au contact. RONIN fascine par sa tension unique entre action fluide en temps réel et réflexion tactique instantanée — une perle discrète éditée par Devolver." },
  
  // ── 2016 ──────────────────────────────────
  { year:2016, slug:"inside",
    title:"Inside", platform:"Multi-plateformes", publisher:"Playdead",
    genre:"Puzzle-Platformer", emoji:"🧩",
    desc:"Un garçon fuit dans un monde totalitaire dystopique sans un mot d'explication. Playdead signe un puzzle-platformer silencieux d'une efficacité narrative redoutable, avec une conclusion aussi stupéfiante que dérangeante." },

  { year:2016, slug:"superhot-vr",
    title:"Superhot VR", platform:"VR (Oculus / Vive / PSVR)", publisher:"Superhot Team",
    genre:"Action VR", emoji:"🥽",
    desc:"Le temps ne bouge que quand vous bougez — en réalité virtuelle. Une expérience VR transformative où esquiver des balles au ralenti et neutraliser des ennemis devient un ballet stratégique physique et euphorigène." },

  { year:2016, slug:"owlboy", rank: 50,
    title:"Owlboy", platform:"PC / Switch / PS4 / Xbox", publisher:"D-Pad Studio",
    genre:"Platformer", emoji:"🦉",
    desc:"Otus, jeune hibou sourd-muet, sauve son village pirate des envahisseurs à dos de ses amis tireurs. Dix ans de développement pour un pixel art monumental et un récit d'amitié et d'estime de soi d'une sensibilité touchante." },

  // ── 2017 ──────────────────────────────────
  { year:2017, slug:"doki-doki-literature-club", rank: 50,
    title:"Doki Doki Literature Club!", platform:"PC / Mac / Linux", publisher:"Team Salvato",
    genre:"Visual Novel", emoji:"📖",
    desc:"Un club de lecture lycéen en apparence mignon qui déconstruit les codes du visual novel japonais dans une spirale psychologique de plus en plus dérangeante. Expérience gratuite sur Steam, à déconseiller aux âmes sensibles." },

  // ── 2018 ──────────────────────────────────
  { year:2018, slug:"monster-boy-and-the-cursed-kingdom", rank: 50,
    title:"Monster Boy and the Cursed Kingdom", platform:"Switch / PS4 / Xbox / PC", publisher:"FDG Entertainment / Game Atelier",
    genre:"Action-Aventure", emoji:"🐸",
    desc:"Hommage vibrant à la saga Wonder Boy, Jin doit désenvoûter son royaume en se métamorphosant en différentes créatures. Action-aventure 2D d'une générosité rare, sublimé par une animation main-levée magnifique." },

  { year:2018, slug:"chuchel", rank: 50,
    title:"Chuchel", platform:"PC / Mac / iOS / Android", publisher:"Amanita Design",
    genre:"Point & Click", emoji:"🍒",
    desc:"Une boule de poils orange et sa cerise dans une série de mini-aventures burlesques signées Amanita Design. Jeu d'une douceur et d'un humour visuel irrésistibles, accessible à tous les âges, pépite de la scène indépendante tchèque." },

  { year:2018, slug:"minit",
    title:"Minit", platform:"PC / PS4 / Xbox / Switch", publisher:"Devolver Digital",
    genre:"Action-Aventure", emoji:"⏱️",
    desc:"Vous ne disposez que de 60 secondes avant de mourir et de repartir de chez vous. Aventure minimaliste en noir et blanc qui transforme sa contrainte de temps en mécanique de progression brillante — compact, inventif et profondément satisfaisant." },

  { year:2018, slug:"ni-no-kuni-ii-revenant-kingdom", rank: 50,
    title:"Ni no Kuni II: Revenant Kingdom", platform:"PC / PS4", publisher:"Level-5",
    genre:"RPG", emoji:"🏰",
    desc:"Le jeune roi Evan reconstruit son royaume après un coup d'État dans un monde de conte de fées animé façon Ghibli. RPG d'action généreux et lumineux de Level-5, avec un système de construction de royaume addictif et une bande-son enchanteresse." },

];

// ─────────────────────────────────────────────
//  ALTERNATIVES  (slug → [titres suggérés])
// ─────────────────────────────────────────────
const ALTS = {
  // ── 1990 ──
  "the-secret-of-monkey-island":                       ["Monkey Island 2: LeChuck's Revenge (1991)", "The Curse of Monkey Island (1997)"],
  "actraiser":                                         ["Soul Blazer (1994)"],
  // ── 1992 ──
  "ogre-battle-the-march-of-the-black-queen":          ["Tactics Ogre: Let Us Cling Together (1995)"],
  "kirbys-dream-land":                                 ["Kirby's Dream Land 3 (1997)"],
  // ── 1993 ──
  "maniac-mansion-day-of-the-tentacle":                ["Thimbleweed Park (2017)"],
  // ── 1994 ──
  "theme-park":                                        ["Theme Park World (2000)"],
  "wario-land-super-mario-land-3":                     ["Wario Land II (1998)", "Wario Land 4 (2001)"],
  "woodruff-and-the-schnibble-of-azimuth":             ["Gobliins 2: Le Prince Bouffon (1992)"],
  // ── 1995 ──
  "rayman":                                            ["Rayman Forever (1998)", "Rayman 3: Hoodlum Havoc (2003)"],
  "trials-of-mana":                                    ["Secret of Mana (1993)", "Mystic Quest (1991)"],
  "front-mission":                                     ["Valkyria Chronicles (2008)"],
  "tales-of-phantasia":                                ["Tales of Berseria (2016)"],
  "terranigma":                                        ["Terra Nil (2023)"],
  "chrono-trigger-1995":                               ["Chained Echoes (2022)"],
  // ── 1996 ──
  "wipeout-2097":                                      ["Wipeout 3 (1999)", "Wipeout Fusion (2002)"],
  "donkey-kong-country-3-dixies-double-trouble":       ["Donkey Kong Country (1994)", "Donkey Kong Country 2: Diddy's Kong Quest (1995)"],
  "broken-sword-2-the-smoking-mirror":                 ["Broken Sword: The Shadow of the Templars (1996)", "Broken Sword 5: The Serpent's Curse (2013)"],
  // ── 1997 ──
  "age-of-empires":                                    ["Age of Empires II (1999)"],
  "crash-bandicoot-2":                                 ["Spyro the Dragon (1998)"],
  "oddworld-abes-oddysee":                             ["Oddworld: Abe's Exoddus (1998)", "Oddworld: New 'n' Tasty (2014)"],
  "theme-hospital":                                    ["Two Point Hospital (2018)"],
  "the-lost-vikings-2":                                ["The Lost Vikings (1993)", "Trine Enchanted Edition (2009)"],
  "dungeon-keeper":                                    ["Dungeons 2 (2015)"],
  // ── 1998 ──
  "the-legend-of-zelda-links-awakening-dx":            ["The Legend of Zelda: A Link to the Past (1991)", "The Legend of Zelda: A Link Between Worlds (2013)"],
  "crash-bandicoot-warped":                            ["Crash Bandicoot N. Sane Trilogy (2017)"],
  "medievil":                                          ["MediEvil II (2000)"],
  "the-settlers-3":                                    ["The Settlers II: 10th Anniversary (2006)", "Anno 1602 (1998)"],
  "populous-the-beginning":                            ["Black & White (2001)", "From Dust (2011)"],
  // ── 1999 ──
  "worms-armageddon":                                  ["Worms World Party (2001)", "Worms W.M.D (2016)"],
  "heroes-of-might-and-magic-3-the-restoration-of-era": ["Age of Wonders II: The Wizard's Throne (2002)"],
  "metal-gear-solid-vr-missions":                      ["Metal Gear Solid 2: Sons of Liberty (2001)", "Metal Gear Solid (1998)"],
  "civilization-call-to-power":                        ["Civilization V (2010)"],
  "ape-escape":                                        ["Ape Escape 2 (2002)", "Ape Escape 3 (2005)"],
  "simcity-3000":                                      ["Les Sims 2: Castaway (2007)"],
  // ── 2000 ──
  "zeus-master-of-olympus":                            ["Pharaon (1999)", "Caesar III (1998)", "Emperor: Rise of the Middle Kingdom (2002)"],
  "final-fantasy-ix":                                  ["Final Fantasy X (2001)", "Final Fantasy V (1992)"],
  "command-conquer-red-alert-2":                       ["Tiberian Sun (1999)", "Command & Conquer Remastered Collection (2020)"],
  "time-crisis-ii":                                    ["Point Blank 2 (1999)", "Crisis Zone (2004)"],
  // ── 2001 ──
  "max-payne":                                         ["Max Payne 2: The Fall of Max Payne (2003)"],
  "commandos-2-men-of-courage":                        ["Shadow Gambit: The Cursed Crew (2023)"],
  "baldurs-gate-dark-alliance":                        ["Champions of Norrath (2004)", "Champions: Return to Arms (2005)"],
  "phoenix-wright-ace-attorney-2001":                  ["Phoenix Wright: Ace Attorney Trilogy (2014)"],
  "ring-of-red":                                       ["Valkyria Chronicles (2008)"],
  // ── 2002 ──
  "dark-cloud-2":                                       ["Dark Cloud (2000)", "Rogue Galaxy (2005)"],
  "warcraft-3-reign-of-chaos":                          ["Warcraft III: The Frozen Throne (2003)", "Warcraft II: Tides of Darkness (1995)"],
  "age-of-mythology":                                   ["Age of Mythology: The Titans (2003)"],
  "metroid-fusion":                                     ["Metroid Dread (2021)"],
  "syberia":                                            ["L'Amerzone (1999)", "Syberia II (2004)", "Syberia: The World Before (2022)"],
  // ── 2003 ──
  "tropico-2-pirate-cove":                              ["Tropico 6 (2019)"],
  "zoo-tycoon-2001":                                    ["Jurassic World Evolution (2018)"],
  "xiii":                                               ["Command & Conquer: Renegade (2002)"],
  "spellforce-the-order-of-dawn":                       ["SpellForce 2: Shadow Wars (2006)", "SpellForce - Platinum Edition (2005)"],
  "final-fantasy-tactics-advance":                      ["Fire Emblem: The Blazing Blade (2003)"],
  "prince-of-persia-the-sands-of-time":                 ["Prince of Persia 2: The Shadow and the Flame (1993)"],
  "impossible-creatures":                               ["Paraworld (2006)"],
  // ── 2004 ──
  "sly-2-band-of-thieves":                              ["Sly 3: Honor Among Thieves (2005)"],
  "the-lord-of-the-rings-the-battle-for-middle-earth":  ["The Battle for Middle-earth II (2006)"],
  // ── 2005 ──
  // ── 2006 ──
  "company-of-heroes":                                  ["Act of War: Direct Action (2004)"],
  "titan-quest":                                        ["Titan Quest: Immortal Throne (2007)", "Titan Quest Anniversary Edition (2016)"],
  // ── 2008 ──
  "kings-bounty-the-legend":                            ["King's Bounty: Armored Princess (2009)"],
  // ── 2009 ──
  "dragon-age-origins":                                 ["Dragon Age: Origins - Ultimate Edition (2010)"],
  // ── 2010 ──
  "vvvvvv":                                             ["Super Meat Boy (2010)"],
  // ── 2011 ──
  "rayman-origins":                                     ["Rayman Legends (2013)"],
  "bastion":                                            ["Transistor (2014)"],
  // ── 2012 ──
  // ── 2013 ──
  "deponia-the-complete-journey":                       ["Runaway, A Road Adventure (2001)"],
  // ── 2014 ──
  "this-war-of-mine":                                   ["Frostpunk (2018)"],
  "south-park-the-stick-of-truth":                      ["South Park: The Fractured But Whole (2017)"],
  "shantae-and-the-pirates-curse":                      ["Shantae and the Seven Sirens (2020)"],
  "lumino-city":                                        ["The Tiny Bang Story (2011)"],
  // ── 2015 ──
  "life-is-strange-episode-1-2":                        ["Twin Mirror (2020)"],
  "ori-and-the-blind-forest":                           ["Ori and the Will of the Wisps (2020)"],
  "evoland-legendary-edition":                          ["Swords & Souls: Neverseen (2019)"],
  "the-incredible-adventures-of-van-helsing-final-cut": ["Grim Dawn (2016)", "Victor Vran (2015)"],
  "rise-of-the-tomb-raider":                            ["Tomb Raider (2013)"],
  "steamworld-heist":                                   ["SteamWorld Heist II (2024)"],
  // ── 2016 ──
  "inside":                                             ["Limbo (2010)"],
  "superhot-vr":                                        ["Townsmen VR (2018)", "Beat Saber (2018)"],
  "owlboy":                                             ["Shovel Knight (2014)"],
  // ── 2017 ──
  // ── 2018 ──
  "monster-boy-and-the-cursed-kingdom":                 ["Wonder Boy in Monster World (1991)"],
  "chuchel":                                            ["Machinarium (2009)", "Botanicula (2012)"],
};
