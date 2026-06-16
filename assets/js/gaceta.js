// Configuración por defecto
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

// ===== DATOS DE LAS PUBLICACIONES  =====
const ultimasPublicaciones = [ 
  {
    "id": 1,
    "titulo": "Pararse en la dignidad: las madres de Ituzaingó Anexo y su impronta en la génesis de la ciencia digna",
    "seccion": "Nota",
    "categoria": "notas",
    "excerpt": "Un recorrido por la lucha de las madres de Ituzaingó Anexo contra los agrotóxicos y el rol fundamental del científico Andrés Carrasco, que con su investigación marcó un hito en la ciencia comprometida con los pueblos.",
    "fecha": "16 Junio 2026",
    "enlace": "./articulos/ciencia_digna_ed_3_2026.html",
    "imagen": "../assets/img/notas_img/ituzaingo.jpg"
  },
  {
    id: 2,
    titulo: "Asambleas de Chapadmalal",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "La experiencia de 'Luna Roja' y 'Bienes Comunes de Chapadmalal' muestra las potencialidades y tensiones de la contrademocracia en la defensa del territorio.",
    fecha: "22 Mayo 2026",
    enlace: "./articulos/asambleas_ciudadanas_ed_2_2026.html",
    imagen: "../assets/img/notas_img/Asamblea_chapadmalal_1.png"
  },
  {
    id: 3,
    titulo: "¿Fragmentación sectorial como estrategia política?",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "Guillermo Folguera analiza los límites de la fragmentación como táctica política dominante y propone construir puentes desde los territorios.",
    fecha: "18 Mayo 2026",
    enlace: "./articulos/territorio_estrategia_politica_ed_2_2026.html",
    imagen: "../assets/img/notas_img/territorios_estrategia_politica_2.png"
  },
  {
    id: 4,
    titulo: "¿Con la IVE cómo andamos?",
    seccion: "Nota",
    categoria: "Nota",
    excerpt: "Desde la asunción de Javier Milei, el Ministerio de Salud dejó de producir información sobre el acceso a la interrupción voluntaria del embarazo. A pesar del desfinanciamiento, la ley sigue vigente y los equipos de salud la sostienen.",
    fecha: "3 de abril de 2026",
    enlace: "../articulos/articulo_IVE_ed_1_2026.html",
    imagen: "../assets/img/notas_img/8M_CABA.png"
  },
  {
    id: 5,
    titulo: "Defender los glaciares en Argentina: cuestión de 'vida' o 'muerte'",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "Argentina tiene más de 16.000 glaciares, reservas estratégicas de agua dulce. La modificación de la Ley de Glaciares pone en riesgo la vida en territorios áridos y la justicia ambiental. Casi 1 millón de firmas acompañan un amparo judicial para frenarlo.",
    fecha: "27 de abril de 2026",
    enlace: "../articulos/glaciares_ed_1_2026.html",
    imagen: "../assets/img/notas_img/glaciares.png"
  },
  {
    id: 6,
    titulo: "La ideología de género: la hidra del gobierno libertario",
    seccion: "Artículo",
    categoria: "articulo",
    excerpt: "El discurso de Javier Milei en Davos 2025 construye la 'ideología de género' como un monstruo de múltiples cabezas: una amenaza latente, un virus mental, un cáncer a extirpar. A través de operaciones retóricas de condensación, patologización y criminalización, el presidente configura a feminismos y diversidades como un enemigo interno, legitimando respuestas violentas. Los crímenes de odio aumentaron un 62% entre 2024 y 2025. Contra la ofensiva patriarcal, organización feminista.",
    fecha: "28 de abril de 2026",
    enlace: "../articulos/ideologia_de_genero_ed_1_2026.html",
    imagen: "../assets/img/notas_img/genero_banner.png"
  },
  {
    id: 7,
    titulo: "Fundamentos Filosóficos Contra El Constructivismo Social",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "Una crítica al uso político del conocimiento que niega la episteme para imponer la doxa en el mundo académico y social actual.",
    fecha: "28 Mayo 2026",
    enlace: "./articulos/constructivismo_social_ed_2_2026.html",
    imagen: "../assets/img/notas_img/constructivismo_social.jpeg"
  },
  {
    id: 8,
    titulo: "Arauco avanza, la selva resiste: entrevista",
    seccion: "Entrevista",
    categoria: "entrevistas",
    excerpt: "Desde la Gaceta Clara Zetkin dialogamos con Clarisa Neztor, activista socioambiental e integrante de Extinction Rebellion Misiones, y Santiago Ramos, mboruvixa (cacique) de la comunidad Mbya Guaraní de Puente Quemado II, en Garuhapé, Misiones. Denuncian el hostigamiento policial, las detenciones arbitrarias y el avance de la transnacional chilena Arauco, cuyos monocultivos de pino ya asfixian el 80% de su territorio ancestral. <strong> Una conversación sobre ecocidio, criminalización de la resistencia, el rol de la ciencia comprometida y las estrategias concretas de lucha.",
    fecha: "28 Mayo 2026",
    enlace: "./articulos/arauco_avanza_el_monte_resiste_ed_2_2026.html",
    imagen: "../assets/img/notas_img/fuera_arauco_banner.png"
  },

];

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

// ===== FUNCIÓN PARA GENERAR TARJETAS DE PREVISUALIZACIÓN =====
function generarTarjetasPrevisualizacion() {
  const container = document.getElementById('preview-cards-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  ultimasPublicaciones.forEach((pub, index) => {
    const card = document.createElement('article');
    card.className = 'preview-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="preview-card-image">
        <img src="${pub.imagen}" alt="${pub.seccion}">
        <span class="preview-card-category">${pub.seccion}</span>
      </div>
      <div class="preview-card-content">
        <h3 class="preview-card-title">${pub.titulo}</h3>
        <p class="preview-card-excerpt">${pub.excerpt}</p>
        <div class="preview-card-meta">
          <span class="preview-card-date">
            <i data-lucide="calendar" style="width: 12px; height: 12px;"></i>
            ${pub.fecha}
          </span>
          <a href="${pub.enlace}" class="preview-card-link">
            Leer más <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
          </a>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ===== FUNCIONES DEL SDK =====

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
  generarTarjetasPrevisualizacion();  // Generar las tarjetas de previsualización
});

// Filtro para notas (prensa)
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const notas = document.querySelectorAll('.nota-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      notas.forEach(nota => {
        if (filterValue === 'all' || nota.getAttribute('data-category') === filterValue) {
          nota.style.display = 'flex';
          setTimeout(() => nota.classList.add('visible'), 10);
        } else {
          nota.style.display = 'none';
          nota.classList.remove('visible');
        }
      });
    });
  });
});

window.gaceta = {
  init: initGaceta,
  applyConfig,
  defaultConfig,
  generarTarjetasPrevisualizacion
};