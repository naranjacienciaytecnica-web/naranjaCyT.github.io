// Configuración por defecto (para el SDK)
const defaultConfig = {

  background_color: '#F5F5F5',
  surface_color: '#FFFFFF',
  text_color: '#202020',
  primary_action_color: '#F36F21',
  secondary_action_color: '#5a5a5a',

  font_family: 'Inter',
  font_size: 16,

  hero_title: 'Gaceta Clara Zetkin',
  hero_subtitle: 'Ciencia, crítica y lucha social — un espacio de divulgación y reflexión impulsado por trabajadorxs de la ciencia y la técnica',
  about_text: 'La revista es un espacio de divulgación y reflexión impulsado por trabajadores y trabajadoras de la ciencia y la técnica, activistas por diversos derechos y luchadores sociales. Su objetivo es difundir textos con espíritu crítico que promuevan el debate, el pensamiento transformador y la construcción colectiva del conocimiento.',
  section_narraciones: 'Relatos, cuentos cortos, crónicas y poesías',
  section_notas: '¿Ciencia para qué? Textos sobre política, cultura, ambiente y actualidad',
  section_entrevistas: 'Diálogos con protagonistas de la lucha social y científica',
  section_resenas: 'Recomendaciones y críticas de libros, películas y muestras culturales',
  cta_publish: 'Proponer Publicación',
  cta_subscribe: 'Recibir la Gaceta',
};

// ===== FUNCIONES PRINCIPALES =====


function initGaceta() {
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initLucideIcons();
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!mobileMenuBtn || !mobileMenu) return;
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
  
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}


function initActiveNav() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'inicio.html';
  
  document.querySelectorAll('nav a, .mobile-menu a, .footer-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'inicio.html')) {
      link.classList.add('active');
      if (link.classList.contains('footer-link')) {
        link.style.color = '#F36F21';
      }
    }
  });
}

function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ===== FUNCIONES DEL SDK  =====

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  const baseFont = c.font_family || defaultConfig.font_family;
  const bodyFontStack = `'${baseFont}', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;
  const baseSize = c.font_size || defaultConfig.font_size;

  document.querySelectorAll('body, p, span, a, h1, h2, h3, h4, h5, h6').forEach(el => {
    el.style.fontFamily = bodyFontStack;
  });

  const h1 = document.querySelector('#hero-title');
  if (h1) h1.style.fontSize = `${baseSize * 3}px`;

  document.querySelectorAll('h2').forEach(el => {
    el.style.fontSize = `${baseSize * 1.875}px`;
  });
  document.querySelectorAll('h3').forEach(el => {
    el.style.fontSize = `${baseSize * 1.125}px`;
  });
  document.querySelectorAll('p').forEach(el => {
    el.style.fontSize = `${baseSize}px`;
  });

  const appRoot = document.getElementById('app-root');
  if (appRoot) appRoot.style.background = c.background_color;

  document.querySelectorAll('#about, #ediciones, footer').forEach(el => {
    el.style.background = c.surface_color;
  });

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    const parts = (c.hero_title || defaultConfig.hero_title).split(' ');
    if (parts.length > 1) {
      heroTitle.innerHTML = `${parts[0]}<br><span style="color:${c.primary_action_color}">${parts.slice(1).join(' ')}</span>`;
    } else {
      heroTitle.innerHTML = `<span style="color:${c.primary_action_color}">${c.hero_title}</span>`;
    }
  }

  const heroSub = document.getElementById('hero-subtitle');
  if (heroSub) heroSub.textContent = c.hero_subtitle || defaultConfig.hero_subtitle;

  const aboutText = document.getElementById('about-text');
  if (aboutText) aboutText.textContent = c.about_text || defaultConfig.about_text;

  const narText = document.getElementById('section-narraciones-text');
  if (narText) narText.textContent = c.section_narraciones || defaultConfig.section_narraciones;

  const notasText = document.getElementById('section-notas-text');
  if (notasText) notasText.textContent = c.section_notas || defaultConfig.section_notas;

  const entText = document.getElementById('section-entrevistas-text');
  if (entText) entText.textContent = c.section_entrevistas || defaultConfig.section_entrevistas;

  const resText = document.getElementById('section-resenas-text');
  if (resText) resText.textContent = c.section_resenas || defaultConfig.section_resenas;

  const heroPublish = document.getElementById('hero-publish-text');
  if (heroPublish) heroPublish.textContent = c.cta_publish || defaultConfig.cta_publish;

  const ctaPublish = document.getElementById('cta-publish-text');
  if (ctaPublish) ctaPublish.textContent = c.cta_publish || defaultConfig.cta_publish;

  const ctaSubscribe = document.getElementById('cta-subscribe-text');
  if (ctaSubscribe) ctaSubscribe.textContent = c.cta_subscribe || defaultConfig.cta_subscribe;

  const navSubscribe = document.getElementById('nav-subscribe-text');
  if (navSubscribe) navSubscribe.textContent = c.cta_subscribe || defaultConfig.cta_subscribe;
}

function initSdk() {
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      async onConfigChange(config) {
        applyConfig(config);
      },
      mapToCapabilities(config) {
        return {
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
            },
            {
              get: () => config.primary_action_color || defaultConfig.primary_action_color,
              set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); }
            },
            {
              get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
              set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
          }
        };
      },
      mapToEditPanelValues(config) {
        return new Map([
          ['hero_title', config.hero_title || defaultConfig.hero_title],
          ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
          ['about_text', config.about_text || defaultConfig.about_text],
          ['section_narraciones', config.section_narraciones || defaultConfig.section_narraciones],
          ['section_notas', config.section_notas || defaultConfig.section_notas],
          ['section_entrevistas', config.section_entrevistas || defaultConfig.section_entrevistas],
          ['section_resenas', config.section_resenas || defaultConfig.section_resenas],
          ['cta_publish', config.cta_publish || defaultConfig.cta_publish],
          ['cta_subscribe', config.cta_subscribe || defaultConfig.cta_subscribe],
        ]);
      }
    });
  }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  initGaceta();
  initSdk();
});

window.gaceta = {
  init: initGaceta,
  applyConfig,
  defaultConfig
};