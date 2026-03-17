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

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const top = parseInt(btn.dataset.top);

      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.entry').forEach(entry => {
        const rank = parseInt(entry.dataset.rank || 0);
        const show = top === 0 || (rank > 0 && rank <= top);
        entry.style.display = show ? 'flex' : 'none';
      });

      // Hide empty decade separators
      document.querySelectorAll('.timeline').forEach(tl => {
        const hasVisible = [...tl.querySelectorAll('.entry')].some(e => e.style.display !== 'none');
        tl.previousElementSibling.style.display = hasVisible ? 'flex' : 'none';
        tl.style.display = hasVisible ? 'block' : 'none';
      });

      // Update counter
      const visible = [...document.querySelectorAll('.entry')].filter(e => e.style.display !== 'none').length;
      counter.textContent = top === 0
        ? `${GAMES.length} JEUX SÉLECTIONNÉS`
        : `${visible} / ${GAMES.length} JEUX AFFICHÉS`;
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

  const CONCURRENCY = 2;
  let index = 0;

  async function fetchNext() {
    while (index < imgs.length) {
      const img  = imgs[index++];
      const slug = img.dataset.slug;
      const url  = `https://api.rawg.io/api/games/${encodeURIComponent(slug)}?key=${RAWG_KEY}`;

      try {
        const res  = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const src  = data.background_image || data.background_image_additional;

        if (src) {
          img.src = src.replace(/\/resize\/\d+\/-\//, '/');
          img.onload = () => {
            img.classList.add('loaded');
            img.previousElementSibling?.classList.add('hidden');
            loaded++;
            bar.style.width = Math.round((loaded / total) * 100) + '%';
            if (loaded >= total) setTimeout(() => { bar.style.opacity = '0'; }, 900);
          };
          img.onerror = () => { loaded++; bar.style.width = Math.round((loaded / total) * 100) + '%'; };
        } else {
          loaded++;
          bar.style.width = Math.round((loaded / total) * 100) + '%';
        }
      } catch(e) {
        console.warn(`RAWG error for "${slug}":`, e.message);
        loaded++;
        bar.style.width = Math.round((loaded / total) * 100) + '%';
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, fetchNext));
}

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  render();
  initObserver();
  initModal();
  initFilter();
  document.getElementById('game-count').textContent = `${GAMES.length} JEUX SÉLECTIONNÉS`;
  fetchImages();
});
