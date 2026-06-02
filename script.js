/* ═══════════════════════════════════════════════════
   ALICIA BOZA GRANDA — SCRIPT.JS — V4
   1. Loader      5. Galerías expandibles
   2. Cursor      6. Modales (video + imagen)
   3. Nav         7. Skills (barras)
   4. Reveal      8. Formulario + Scroll
═══════════════════════════════════════════════════ */
'use strict';

/* ── 1. LOADER ── */
(function() {
  const l = document.getElementById('loader');
  if (!l) return;
  document.body.style.overflow = 'hidden';
  window.addEventListener('load', () => {
    setTimeout(() => { l.classList.add('out'); document.body.style.overflow = ''; }, 1900);
  });
})();

/* ── 2. CURSOR ── */
function initCursor() {
  const dot  = document.getElementById('c-dot');
  const ring = document.getElementById('c-ring');
  if (!dot || !ring || !window.matchMedia('(hover:hover)').matches) return;
  let rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    dot.style.left  = e.clientX + 'px';
    dot.style.top   = e.clientY + 'px';
    rx += (e.clientX - rx) * 0.11;
    ry += (e.clientY - ry) * 0.11;
  }, { passive: true });
  (function loop() { ring.style.left = rx+'px'; ring.style.top = ry+'px'; requestAnimationFrame(loop); })();
  document.querySelectorAll('a,button,.tr-fila-inner,.fb,.gal-item,.sk-icono,.sa-item,.sd-link,.ct-link,.behance-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-big'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-big'));
  });
}

/* ── 3. NAV ── */
function initNav() {
  const nav   = document.getElementById('nav');
  const btn   = document.getElementById('nav-btn');
  const menu  = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nl');
  const sects = document.querySelectorAll('section[id]');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.pageYOffset > 60), { passive: true });
  btn?.addEventListener('click', () => { btn.classList.toggle('open'); menu?.classList.toggle('open'); });
  links.forEach(l => l.addEventListener('click', () => { btn?.classList.remove('open'); menu?.classList.remove('open'); }));
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset + 130;
    sects.forEach(s => {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + s.id));
    });
  }, { passive: true });
}

/* ── 4. REVEAL ── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
}

/* ── 5. GALERÍAS EXPANDIBLES ── */
function initGalerias() {
  const filas = document.querySelectorAll('.tr-fila--expandible');

  filas.forEach(fila => {
    const inner  = fila.querySelector('.tr-fila-inner');
    const galeria = fila.querySelector('.tr-galeria');
    if (!inner || !galeria) return;

    inner.addEventListener('click', () => {
      const abierta = fila.classList.contains('abierta');

      // Cerrar todas las demás
      filas.forEach(f => {
        if (f !== fila) f.classList.remove('abierta');
      });

      // Toggle la actual
      fila.classList.toggle('abierta', !abierta);

      // Scroll suave hacia la galería si se abre
      if (!abierta) {
        setTimeout(() => {
          galeria.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    });
  });
}

/* ── 5b. FILTROS ── */
function initFiltros() {
  const botones = document.querySelectorAll('.fb');
  const filas   = document.querySelectorAll('.tr-fila');
  if (!botones.length) return;
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      botones.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.f;
      // Cerrar todas las galerías al filtrar
      filas.forEach(fila => fila.classList.remove('abierta'));
      filas.forEach((fila, i) => {
        const show = f === 'todo' || fila.dataset.cat === f;
        if (show) {
          fila.classList.remove('oculta');
          fila.style.opacity = '0';
          setTimeout(() => { fila.style.transition = 'opacity .4s'; fila.style.opacity = '1'; }, i * 45);
        } else {
          fila.style.transition = 'opacity .25s'; fila.style.opacity = '0';
          setTimeout(() => fila.classList.add('oculta'), 260);
        }
      });
    });
  });
}

/* ── 6. MODAL VIDEO ── */
function initModalVideo() {
  const modal  = document.getElementById('modal-video');
  const iframe = document.getElementById('mv-iframe');
  const cerrar = document.getElementById('mv-cerrar');
  const fondo  = document.getElementById('mv-bg');
  if (!modal) return;

  function abrir(ytId) {
    iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function cerrarModal() {
    modal.classList.remove('open');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  // Clic en thumbnails de YouTube
  document.querySelectorAll('.gal-yt').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const id = thumb.dataset.yt;
      if (id) abrir(id);
    });
  });

  cerrar?.addEventListener('click', cerrarModal);
  fondo?.addEventListener('click', cerrarModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });
}

/* ── 6b. MODAL IMAGEN ── */
function initModalImg() {
  const modal  = document.getElementById('modal-img');
  const img    = document.getElementById('mi-img');
  const cerrar = document.getElementById('mi-cerrar');
  const fondo  = document.getElementById('mi-bg');
  if (!modal) return;

  function abrir(src, alt) {
    img.src = src; img.alt = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function cerrarModal() {
    modal.classList.remove('open');
    img.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gal-img').forEach(item => {
    item.addEventListener('click', () => {
      const i = item.querySelector('img');
      if (i) abrir(i.src, i.alt);
    });
  });

  cerrar?.addEventListener('click', cerrarModal);
  fondo?.addEventListener('click', cerrarModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });
}

/* ── 7. BARRAS DE SKILLS ── */
function initSkills() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.width = e.target.dataset.lvl + '%'; }, 160);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.sk-relleno').forEach(b => io.observe(b));
}

/* ── 8. PARALLAX HERO GHOST ── */
function initParallax() {
  const ghost  = document.querySelector('.hero-ghost');
  const scroll = document.querySelector('.hero-scroll');
  const grad   = document.querySelector('.hero-gradiente > img');
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    if (ghost)  ghost.style.transform  = `translateY(${y * 0.14}px)`;
    if (scroll) scroll.style.opacity   = Math.max(0, 1 - y / 160);
  }, { passive: true });
}

/* ── 9. FORMULARIO ── */
function initFormulario() {
  const form = document.getElementById('formulario');
  const ok   = document.getElementById('f-ok');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = form.querySelector('#f-nombre').value.trim();
    const email  = form.querySelector('#f-email').value.trim();
    const msg    = form.querySelector('#f-msg').value.trim();
    const rx     = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valido = true;
    [['#f-nombre',nombre],['#f-email',email],['#f-msg',msg]].forEach(([sel,val]) => {
      if (!val || (sel==='#f-email' && !rx.test(val))) {
        const el = form.querySelector(sel);
        el.style.borderColor = '#B4A4FC';
        setTimeout(() => el.style.borderColor='',2000); valido=false;
      }
    });
    if (!valido) return;
    const btn = form.querySelector('.f-enviar');
    btn.querySelector('span').textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      btn.querySelector('span').textContent = 'Enviar mensaje';
      btn.disabled = false;
      ok?.classList.add('show');
      setTimeout(() => ok?.classList.remove('show'), 5000);
    }, 1400);
  });
  form.querySelectorAll('input,textarea').forEach(f => f.addEventListener('input', () => f.style.borderColor=''));
}

/* ── 10. SMOOTH SCROLL ── */
function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - 70, behavior: 'smooth' });
    });
  });
}

/* ── ARRANQUE ── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initReveal();
  initGalerias();
  initFiltros();
  initModalVideo();
  initModalImg();
  initSkills();
  initParallax();
  initFormulario();
  initScroll();
  console.log('%c Alicia Boza Granda · Realizadora Multidisciplinaria ', 'background:#1F40FC;color:#F3CAFB;padding:4px 14px;font-size:12px;');
});
if ('ontouchstart' in window) document.documentElement.classList.add('touch');
