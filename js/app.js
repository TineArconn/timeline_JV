/* ════════════════════════════════════════════
   RENDER
════════════════════════════════════════════ */
function render() {
  const root = document.getElementById('root');
  const decades = [
    { label:'1990s', range:[1990,2000] },
    { label:'2000s', range:[2000,2010] },
    { label:'2010s', range:[2010,2020] },
    { label:'2020s', range:[2020,2030] },
  ];

  decades.forEach(dec => {
    const [from, to] = dec.range;
    const group = GAMES.filter(g => g.year >= from && g.year < to);
    if (!group.length) return;

    const sep = document.createElement('div');
    sep.className = 'decade-sep';
    sep.innerHTML = `<span class="decade-label">// ${dec.label}</span>`;
    root.appendChild(sep);

    const tl = document.createElement('div');
    tl.className = 'timeline';

    group.forEach(g => {
      const alts = ALTS[g.slug] || [];
      const altsHtml = alts.length
        ? `<div class="card-alts">
             <span class="alts-label">Voir aussi</span>
             ${alts.map(a => `<span class="alt-pill">${a}</span>`).join('')}
           </div>`
        : '';

      const entry = document.createElement('div');
      entry.className = 'entry';
      entry.dataset.rank = g.rank || 0;
      entry.innerHTML = `
        <span class="year-badge">${g.year}</span>
        <div class="card">
          <div class="card-content">
            <div class="card-title">${g.title}</div>
            <div class="card-platform">${g.platform} &nbsp;·&nbsp; ${g.publisher}</div>
            <div class="card-desc">${g.desc}</div>
            <span class="tag">${g.genre}</span>
            ${altsHtml}
          </div>
          <div class="card-image">
            <div class="img-placeholder">
              <span class="ph-emoji">${g.emoji}</span>
              <span class="ph-text">chargement…</span>
            </div>
            <img data-slug="${g.slug}" alt="${g.title}" loading="lazy" />
          </div>
        </div>`;
      tl.appendChild(entry);
    });

    root.appendChild(tl);
  });
}

/* ════════════════════════════════════════════
   INTERSECTION OBSERVER — scroll reveal
════════════════════════════════════════════ */
function initObserver() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.entry').forEach(el => io.observe(el));
}

/* ════════════════════════════════════════════
   MODAL
════════════════════════════════════════════ */
function initModal() {
  const modal      = document.getElementById('modal');
  const modalImg   = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalYear  = document.getElementById('modal-year');
  const modalClose = document.getElementById('modal-close');

  function openModal(src, title, year) {
    modalImg.src           = src;
    modalImg.alt           = title;
    modalTitle.textContent = title;
    modalYear.textContent  = year;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('root').addEventListener('click', e => {
    const imgWrap = e.target.closest('.card-image');
    if (!imgWrap) return;
    const img = imgWrap.querySelector('img.loaded');
    if (!img) return;
    const card  = imgWrap.closest('.card');
    const title = card.querySelector('.card-title').textContent;
    const year  = card.closest('.entry').querySelector('.year-badge').textContent;
    openModal(img.src, title, year);
  });

  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ════════════════════════════════════════════
   FILTER BAR
════════════════════════════════════════════ */
function initFilter() {
  const counter = document.getElementById('game-count');
  const root        = document.getElementById('root');
  const carouselView = document.getElementById('carousel-view');

  function showTimeline() {
    root.style.display         = '';
    carouselView.style.display = 'none';
  }

  function showCarousel(top) {
    const ranked = GAMES
      .filter(g => g.rank > 0 && g.rank <= top)
      .sort((a, b) => a.year - b.year);
    root.style.display         = 'none';
    carouselView.style.display = 'block';
    renderCarousel(ranked);
  }
 
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const top = parseInt(btn.dataset.top);
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (top === 0) {
        // Tous — frise normale
        showTimeline();
        document.querySelectorAll('.entry').forEach(e => e.style.display = 'flex');
        document.querySelectorAll('.timeline, .decade-sep').forEach(e => e.style.display = '');
        counter.textContent = `${GAMES.length} JEUX SÉLECTIONNÉS`;

      } else if (top === 50) {
        // Top 50 — frise filtrée
        showTimeline();
        document.querySelectorAll('.entry').forEach(entry => {
          const rank = parseInt(entry.dataset.rank || 0);
          entry.style.display = (rank > 0 && rank <= 50) ? 'flex' : 'none';
        });
        document.querySelectorAll('.timeline').forEach(tl => {
          const hasVisible = [...tl.querySelectorAll('.entry')].some(e => e.style.display !== 'none');
          tl.previousElementSibling.style.display = hasVisible ? 'flex' : 'none';
          tl.style.display = hasVisible ? 'block' : 'none';
        });
        const visible = [...document.querySelectorAll('.entry')].filter(e => e.style.display !== 'none').length;
        counter.textContent = `${visible} / ${GAMES.length} JEUX AFFICHÉS`;

      } else {
        // Top 10 ou Top 5 — carrousel
        showCarousel(top);
        const ranked = GAMES.filter(g => g.rank > 0 && g.rank <= top);
        counter.textContent = `${ranked.length} / ${GAMES.length} JEUX AFFICHÉS`;
      }
    });
  });
}

/* ════════════════════════════════════════════
   RAWG COVER LOADING
   One precise API call per slug, full resolution
════════════════════════════════════════════ */
async function fetchImages() {
  const imgs  = Array.from(document.querySelectorAll('img[data-slug]'));
  const bar   = document.getElementById('img-progress');
  const total = imgs.length;
  let loaded  = 0;

  // Construire un index slug → img depuis GAMES
  const imgIndex = {};
  GAMES.forEach(g => { if (g.img) imgIndex[g.slug] = g.img; });

  const CONCURRENCY = 3;
  let index = 0;

  function onLoaded(img) {
    img.classList.add('loaded');
    img.previousElementSibling?.classList.add('hidden');
    loaded++;
    bar.style.width = Math.round((loaded / total) * 100) + '%';
    if (loaded >= total) setTimeout(() => { bar.style.opacity = '0'; }, 900);
  }

  function onFailed() {
    loaded++;
    bar.style.width = Math.round((loaded / total) * 100) + '%';
  }

  async function loadFromUrl(img, url) {
    img.src = url;
    await new Promise((resolve) => {
      img.onload  = () => { onLoaded(img); resolve(); };
      img.onerror = async () => {
        // URL stockée invalide → fallback API
        console.info(`URL expirée pour "${img.dataset.slug}", fallback API...`);
        await loadFromApi(img);
        resolve();
      };
    });
  }

  async function loadFromApi(img) {
    const slug = img.dataset.slug;
    try {
      const res  = await fetch(`https://api.rawg.io/api/games/${encodeURIComponent(slug)}?key=${RAWG_KEY}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const src  = data.background_image || data.background_image_additional;
      if (!src) { onFailed(); return; }
      const fullSrc = src.replace(/\/resize\/\d+\/-\//, '/');
      img.src = fullSrc;
      img.onload  = () => onLoaded(img);
      img.onerror = () => onFailed();
    } catch(e) {
      console.warn(`API fallback échouée pour "${slug}":`, e.message);
      onFailed();
    }
  }

  async function fetchNext() {
    while (index < imgs.length) {
      const img  = imgs[index++];
      const slug = img.dataset.slug;
      const storedUrl = imgIndex[slug];

      if (storedUrl) {
        await loadFromUrl(img, storedUrl);
      } else {
        // Pas d'URL stockée → appel API direct
        await loadFromApi(img);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, fetchNext));
}

/* ════════════════════════════════════════════
   CAROUSEL
════════════════════════════════════════════ */
let carouselGames  = [];
let carouselIndex  = 0;
let carouselColor  = 0;
const NEON_COLORS  = [
  'var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-green)',
  'var(--neon-purple)', 'var(--neon-yellow)'
];

function renderCarousel(games) {
  carouselGames = [...games].sort((a, b) => a.year - b.year);
  carouselIndex = 0;

  const wrap = document.getElementById('carousel-view');
  wrap.innerHTML = '';

  // Build all slides
  const slidesWrap = document.createElement('div');
  slidesWrap.id = 'carousel-slides';

  carouselGames.forEach((g, i) => {
    const alts = ALTS[g.slug] || [];
    const color = NEON_COLORS[i % NEON_COLORS.length];
    const altsHtml = alts.length
      ? `<div class="carousel-alts">
           <span class="alts-label">Voir aussi</span>
           ${alts.map(a => `<span class="alt-pill">${a}</span>`).join('')}
         </div>`
      : '';
    const opinionHtml = g.opinion
      ? `<div class="carousel-opinion-wrap" style="color:${color}">
           <div class="carousel-opinion-label">Mon avis</div>
           <div class="carousel-opinion-text">${g.opinion}</div>
         </div>`
      : `<div class="carousel-opinion-wrap" style="color:${color}">
           <div class="carousel-opinion-label">Mon avis</div>
           <div class="carousel-opinion-text carousel-opinion-empty">— à rédiger —</div>
         </div>`;

    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    slide.style.color = color;
    slide.innerHTML = `
      <div class="carousel-img-wrap">
        <div class="img-placeholder">
          <span class="ph-emoji">${g.emoji}</span>
          <span class="ph-text">chargement…</span>
        </div>
        <img data-slug="${g.slug}" alt="${g.title}" />
        <div class="carousel-img-badges">
          <span class="carousel-year-badge">${g.year}</span>
          <span class="carousel-tag">${g.genre}</span>
        </div>
      </div>
      <div class="carousel-body">
        <div class="carousel-title">${g.title}</div>
        <div class="carousel-platform">${g.platform} &nbsp;·&nbsp; ${g.publisher}</div>
        <div class="carousel-desc">${g.desc}</div>
        ${opinionHtml}
        ${altsHtml}
      </div>`;
    slidesWrap.appendChild(slide);
  });

  // Navigation
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  nav.innerHTML = `
    <button class="carousel-btn" id="c-prev">◀ PRÉC</button>
    <span class="carousel-counter">
      <strong id="c-cur">1</strong> / ${carouselGames.length}
    </span>
    <button class="carousel-btn" id="c-next">SUIV ▶</button>`;

  // Dots
  const dots = document.createElement('div');
  dots.className = 'carousel-dots';
  carouselGames.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.style.color = NEON_COLORS[i % NEON_COLORS.length];
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  const hint = document.createElement('div');
  hint.className = 'carousel-hint';
  hint.textContent = '← → TOUCHES DIRECTIONNELLES';

  wrap.appendChild(slidesWrap);
  wrap.appendChild(nav);
  wrap.appendChild(dots);
  wrap.appendChild(hint);

  // Fetch images for carousel slides
  wrap.querySelectorAll('img[data-slug]').forEach(img => {
    const slug = img.dataset.slug;
    const url  = `https://api.rawg.io/api/games/${encodeURIComponent(slug)}?key=${RAWG_KEY}`;
    fetch(url)
      .then(r => r.json())
      .then(data => {
        const src = data.background_image || data.background_image_additional;
        if (!src) return;
        img.src = src.replace(/\/resize\/\d+\/-\//, '/');
        img.onload = () => {
          img.classList.add('loaded');
          img.previousElementSibling?.classList.add('hidden');
        };
      })
      .catch(() => {});
  });

  // Click image → modal
  wrap.querySelectorAll('.carousel-img-wrap').forEach(imgWrap => {
    imgWrap.addEventListener('click', () => {
      const img = imgWrap.querySelector('img.loaded');
      if (!img) return;
      const slide = imgWrap.closest('.carousel-slide');
      const title = slide.querySelector('.carousel-title').textContent;
      const year  = slide.querySelector('.carousel-year-badge').textContent;
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-year').textContent  = year;
      document.getElementById('modal-img').src = img.src;
      document.getElementById('modal').classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  document.getElementById('c-prev').addEventListener('click', () => goTo(carouselIndex - 1));
  document.getElementById('c-next').addEventListener('click', () => goTo(carouselIndex + 1));

  updateCarousel();
}

function goTo(i) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dotEls = document.querySelectorAll('.carousel-dot');
  slides[carouselIndex].classList.remove('active');
  dotEls[carouselIndex].classList.remove('active');
  carouselIndex = Math.max(0, Math.min(i, carouselGames.length - 1));
  slides[carouselIndex].classList.add('active');
  dotEls[carouselIndex].classList.add('active');
  updateCarousel();
}

function updateCarousel() {
  document.getElementById('c-cur').textContent = carouselIndex + 1;
  document.getElementById('c-prev').disabled = carouselIndex === 0;
  document.getElementById('c-next').disabled = carouselIndex === carouselGames.length - 1;
}

function initCarouselKeys() {
  document.addEventListener('keydown', e => {
    const carouselVisible = document.getElementById('carousel-view').style.display !== 'none';
    if (!carouselVisible) return;
    if (e.key === 'ArrowLeft')  goTo(carouselIndex - 1);
    if (e.key === 'ArrowRight') goTo(carouselIndex + 1);
  });
}


/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  render();
  initObserver();
  initModal();
  initFilter();
  initCarouselKeys();
  document.getElementById('game-count').textContent = `${GAMES.length} JEUX SÉLECTIONNÉS`;
  fetchImages();
});
