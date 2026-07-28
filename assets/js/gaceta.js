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
    "titulo": "Territorio ancestral Mbya en resistencia",
    "seccion": "Nota",
    "categoria": "notas",
    "excerpt": "Una nueva ofensiva judicial mantiene bajo amenaza a la comunidad Mbya Guaraní Puente Quemado II, ubicada en el paraje Cañafístola, en Garuhapé, Misiones. La lucha de Puente Quemado II es por la permanencia en su territorio, por el futuro de la selva, del agua, acuíferos, de la biodiversidad.",
    "fecha": "26 Julio 2026",
    "enlace": "./articulos/territorio_en_resistencia_ed_5_2026.html",
    "imagen": "../assets/img/notas_img/puente_quemado_gallo_bn.jpeg"
  },
  {
    "id": 2,
    "titulo": "La tierra que supimos conseguir",
    "seccion": "Nota",
    "categoria": "notas",
    "excerpt": "Quién es el dueño de Argentina? La histórica pregunta volvió a ocupar el centro de la escena a partir del proyecto de Ley de Inviolabilidad de la Propiedad Privada impulsado por el gobierno actual de Javier Milei. Presentada como una 'herramienta destinada a fortalecer la seguridad jurídica y estimular las inversiones', la iniciativa viene a reabrir una discusión mucho más profunda que la mera protección del derecho de propiedad.",
    "fecha": "26 Julio 2026",
    "enlace": "./articulos/la_tierra_que_supimos_conseguir_ed_4_2026.html",
    "imagen": "../assets/img/notas_img/propiedad_privada.png"
  },
  {
    id: 3,
    titulo: "¿La muerte como horizonte? Cartografiando un porvenir posible",
    seccion: "Artículo",
    categoria: "articulo",
    excerpt: "Las lógicas del mercado dejan a los pueblos cada vez más pobres, a los ricos cada vez más cínicos. En este terreno sombrío, la cultura nos presta sus narrativas apocalípticas, y la tarea clínica hoy se vuelve imaginativa y colectiva. A las guardias de los hospitales llegan las explosiones de los padeceres, pero el horizonte no está cerrado; está en disputa.",
    fecha: "26 Julio 2026",
    enlace: "./articulos/catografiando_un_futuro_posible_ed_4_2026.html",
    imagen: "../assets/img/notas_img/cartografeando_futuros_banner.png"
  },
  ,
  {
    id: 4,
    titulo: "Sweet Tooth: los espejismos del pasado y otros mundos posibles",
    seccion: "RESEÑA",
    categoria: "resenia",
    excerpt: "¿Se acuerdan cuando pensamos que la pandemia nos iba a hacer mejores? Sweet Tooth nos habla de ese mismo espejismo. Esta bella historia nos propone la organización y la comunidad, aprender a vivir con nuestras heridas, a cuidarnos mutuamente desde nuestras miradas parciales y finitas.",
    fecha: "29 Julio 2026",
    enlace: "./articulos/resenia_sweet_tooth_ed_4_2026.html",
    imagen: "../assets/img/notas_img/sweet_tooth_gus_banner.png"
  },
  {
    id: 5,
    titulo: "LA FOTOGRAFÍA 51: Retratos de la invisibilización de ayer y de hoy",
    seccion: "Artículo",
    categoria: "articulo",
    excerpt: "En 1952, Rosalind Franklin capturó la imagen que descifraría el secreto de la vida. Pero su nombre quedó fuera de la historia. La Fotografía 51 es hoy el símbolo del avance de la ciencia y la persistencia de un sistema que sigue relegando a las mujeres al pie de página de sus propios descubrimientos.",
    fecha: "28 de Julio de 2026",
    enlace: "../articulos/foto_51_ed_4_2026.html",
    imagen: "../assets/img/notas_img/foto_51_rosalind.png"
  },
  {
    id: 6,
    titulo: "Defender los glaciares en Argentina: cuestión de 'vida' o 'muerte'",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "Argentina tiene más de 16.000 glaciares, reservas estratégicas de agua dulce. La modificación de la Ley de Glaciares pone en riesgo la vida en territorios áridos y la justicia ambiental. Casi 1 millón de firmas acompañan un amparo judicial para frenarlo.",
    fecha: "27 de abril de 2026",
    enlace: "../articulos/glaciares_ed_1_2026.html",
    imagen: "../assets/img/notas_img/glaciares.png"
  },
  {
    id: 7,
    titulo: "La ideología de género: la hidra del gobierno libertario",
    seccion: "Artículo",
    categoria: "articulo",
    excerpt: "El discurso de Javier Milei en Davos 2025 construye la 'ideología de género' como un monstruo de múltiples cabezas: una amenaza latente, un virus mental, un cáncer a extirpar. El presidente configura a feminismos y diversidades como un enemigo interno, legitimando respuestas violentas.",
    fecha: "28 de abril de 2026",
    enlace: "../articulos/ideologia_de_genero_ed_1_2026.html",
    imagen: "../assets/img/notas_img/genero_banner.png"
  },
  {
    id: 8,
    titulo: "Iglesia Católica y Educación: de la Ley 1420 a la Ley de Educación Nacional",
    seccion: "Artículo",
    categoria: "articulo",
    excerpt: "Una crítica al uso político del conocimiento que niega la episteme para imponer la doxa en el mundo académico y social actual.",
    fecha: "28 Mayo 2026",
    enlace: "./articulos/iglesia_y_escuela_ed_4_2026.html",
    imagen: "../assets/img/notas_img/laica_libre.png"
  },
  {
    id: 9,
    titulo: "Arauco avanza, la selva resiste: entrevista",
    seccion: "Entrevista",
    categoria: "entrevistas",
    excerpt: "Entrevistamos a Santiago Ramos, mboruvixa (cacique) de la comunidad Mbya Guaraní de Puente Quemado II, en Garuhapé, Misiones. <strong> Una conversación sobre ecocidio, criminalización de la resistencia, el rol de la ciencia comprometida y las estrategias concretas de lucha.",
    fecha: "28 Mayo 2026",
    enlace: "./articulos/arauco_avanza_el_monte_resiste_ed_2_2026.html",
    imagen: "../assets/img/notas_img/fuera_arauco_banner.png"
  },
  {
    id: 10,
    titulo: "Asambleas de Chapadmalal",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "La experiencia de 'Luna Roja' y 'Bienes Comunes de Chapadmalal' muestra las potencialidades y tensiones de la contrademocracia en la defensa del territorio.",
    fecha: "22 Mayo 2026",
    enlace: "./articulos/asambleas_ciudadanas_ed_2_2026.html",
    imagen: "../assets/img/notas_img/Asamblea_chapadmalal_1.png"
  },
  {
    id: 11,
    titulo: "¿Con la IVE cómo andamos?",
    seccion: "Nota",
    categoria: "Nota",
    excerpt: "Desde la asunción de Javier Milei, el Ministerio de Salud dejó de producir información sobre el acceso a la interrupción voluntaria del embarazo. A pesar del desfinanciamiento, la ley sigue vigente y los equipos de salud la sostienen.",
    fecha: "3 de abril de 2026",
    enlace: "../articulos/articulo_IVE_ed_1_2026.html",
    imagen: "../assets/img/notas_img/8M_CABA.png"
  },
    {
    "id": 12,
    "titulo": "Pararse en la dignidad: las madres de Ituzaingó Anexo y su impronta en la génesis de la ciencia digna",
    "seccion": "Nota",
    "categoria": "notas",
    "excerpt": "Un recorrido por la lucha de las madres de Ituzaingó Anexo contra los agrotóxicos, una gesta que interpeló al sistema academico y abrió el camino para la construcción de la Ciencia Digna.",
    "fecha": "16 Junio 2026",
    "enlace": "./articulos/ciencia_digna_ed_3_2026.html",
    "imagen": "../assets/img/notas_img/ituzaingo.jpg"
  },
  {
    id: 13,
    titulo: "Fundamentos Filosóficos Contra El Constructivismo Social",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "Una crítica al uso político del conocimiento que niega la episteme para imponer la doxa en el mundo académico y social actual.",
    fecha: "28 Mayo 2026",
    enlace: "./articulos/constructivismo_social_ed_2_2026.html",
    imagen: "../assets/img/notas_img/constructivismo_social.jpeg"
  },
  {
    id: 14,
    titulo: "Construir un nosotros frente al capital",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "Cuando varios trabajadores funcionan juntos hacia un objetivo común en el mismo proceso de producción o en procesos distintos, pero conexos, su trabajo adopta la forma cooperativa. No se trata únicamente de aumentar las fuerzas productivas individuales, sino de crear por medio de la cooperación, una nueva fuerza, que funcione como fuerza colectiva. Los desafíos de la identidad cooperativa en la realidad.",
    fecha: "29 Junio 2026",
    enlace: "./articulos/nosotros_frente_al_capital_ed_3_2026.html",
    imagen: "../assets/img/notas_img/canto_al_trabajo.jpg"
  },  
  {
    id: 16,
    titulo: "¿Fragmentación sectorial como estrategia política?",
    seccion: "Artículo",
    categoria: "notas",
    excerpt: "Guillermo Folguera analiza los límites de la fragmentación como táctica política dominante y propone construir puentes desde los territorios.",
    fecha: "18 Mayo 2026",
    enlace: "./articulos/territorio_estrategia_politica_ed_2_2026.html",
    imagen: "../assets/img/notas_img/territorios_estrategia_politica_2.png"
  },
  {
    id: 17,
    titulo: "Atención por alienación: La economía política de las tecnologías de la información",
    seccion: "RESEÑA",
    categoria: "resenia",
    excerpt: "Una lectura del libro de Aarushi Bhandari (2025) Attention and alienation. La tesis de Bhandari afirma que la economía de la Web 2.0 crea las condiciones para un intercambio desigual: las corporaciones de plataformas capturan atención y devuelven alienación. Un análisis sobre economía política de la atención que también es una autobiografía: desde su etapa como entusiasta ciberoptimista en 2002 hasta una crítica radical sin perder las esperanzas de transformación.",
    fecha: "29 Junio 2026",
    enlace: "./articulos/resenia_atencion_por_alienacion_ed_3_2026.html",
    imagen: "../assets/img/notas_img/Atencion_3.png"
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