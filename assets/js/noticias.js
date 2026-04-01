const newsData = [
  {
    id: 1,
    title: "La presión de los trabajadores arrancó la renovación de los contratos y profundiza el estado de alerta",
    description: "Desde la Naranja Ciencia y Técnica exigimos la renovación de todos los contratos. ¡Ningún despido, fin de la precarización laboral! En el día jueves 27 de marzo, alrededor de un centenar de trabajadores de la Comisión Nacional de Energía Atómica (CNEA) se congregó en la sede central del organismo para llevar adelante una masiva asamblea, en un clima atravesado por la preocupación, la bronca y la incertidumbre frente al vencimiento de cientos de contratos previsto para el próximo 31 de marzo.",
    tag: "CNEA",
    date: "2026-03-27",
    dateDisplay: "27 mar 2026",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 2,
    title: "CNEA: Alertan por despidos en la CNEA y se intensifica la lucha",
    description: "Desde la Naranja Ciencia y Técnica exigimos la renovación de todos los contratos, aumento salarial de emergencia y no a la minería de uranio sin licencia social. Frente a la incertidumbre que azota al sector científico-tecnológico y energético nacional, los trabajadores y trabajadoras de la Comisión Nacional de Energía Atómica (CNEA) nos declaramos en estado de alerta. El 31 de Marzo vencen los contratos de más de 330 compañeros y compañeras. Piezas fundamentales para el funcionamiento y los proyectos estratégicos del organismo.",
    tag: "CNEA",
    date: "2026-03-19",
    dateDisplay: "19 mar 2026",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 3,
    title: "Ofensiva privatizadora sobre Nucleoeléctrica Argentina S.A.",
    description: "El gobierno nacional avanza con un plan de privatización de Nucleoeléctrica Argentina S.A. (NASA), la empresa estatal que opera las tres centrales nucleares de potencia del país: Atucha I, Atucha II y Embalse. No se trata de una medida técnica ni aislada, sino de un nuevo capítulo en el desguace del sector energético nacional, continuidad directa del modelo neoliberal inaugurado en los años noventa.",
    tag: "CNEA",
    date: "2025-08-14",
    dateDisplay: "14 ago 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 4,
    title: "CNEA: trabajadores rechazan privatización de Atucha",
    description: "Los trabajadores de la Comisión Nacional de Energía Atómica se manifiestan en contra del proyecto de privatización de las centrales nucleares.",
    tag: "CNEA",
    date: "2025-09-25",
    dateDisplay: "25 sep 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 5,
    title: "Ajuste salarial y fuga de cerebros en la ciencia bonaerense",
    description: "El gobierno de Axel Kicillof, con la complicidad imprescindible de la dirección de ATE PBA, consumó el ajuste salarial contra lxs trabajadorxs estatales. La propuesta se disfrazó de 'aumento': un 1% retroactivo y un 2% para enero, un incremento irrisorio pulverizado por la inflación que deja los salarios más pobres que nunca. Dentro de este esquema de pauperización, lxs trabajadorxs de la Comisión de Investigaciones Científicas (CIC) sufren un ataque específico. El presidente de la CIC Roberto Salvarezza ya había excluído deliberadamente de una bonificación del 125% del sueldo básico que sí recibieron otras áreas. No es un error: es una decisión política que acelera la fuga de cerebros hacia el sistema nacional y el sector privado, donde los salarios duplican los de la provincia.",
    tag: "CIC PBA",
    date: "2026-01-21",
    dateDisplay: "21 ene 2026",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 6,
    title: "CONICET: Feliz Navidad y Próspero Ajuste",
    description: "El proyecto oficial consolida un recorte sin precedentes: la inversión en CyT cae a un mínimo histórico del 0.149% del PBI y el financiamiento universitario retrocede a niveles de 2007, según un análisis detallado del Grupo EPC. Mientras aún se discute en el Congreso el Presupuesto 2026, que ya proyecta recortes severos para ciencia y universidades, el Gobierno nacional avanza con un nuevo plan de achique estructural del Estado. Según información oficial, se prepara una reducción de personal que podría alcanzar 'otro 10%' de la planta total de empleados públicos nacionales, lo que equivale a unas 28.500 personas tomando como base los datos actuales del INDEC.",
    tag: "CONICET",
    date: "2025-12-02",
    dateDisplay: "02 dic 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 7,
    title: "Nuevos Lineamientos Estratégicos en Innovación, Ciencia y Tecnología 2025–2027",
    description: "un proyecto político de subordinación de la ciencia pública argentina a los intereses del capital concentrado, bajo el lenguaje de la eficiencia, la competitividad y la innovación.",
    tag: "CONICET",
    date: "2025-09-30",
    dateDisplay: "30 sep 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 8,
    title: "Nueva convocatoria para proyectos de investigación con impacto social",
    description: "El CONICET lanza una nueva línea de financiamiento para proyectos que aborden problemáticas sociales desde una perspectiva comunitaria y participativa.",
    tag: "CONICET",
    date: "2025-11-05",
    dateDisplay: "05 nov 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },

  {
    id: 9,
    title: "Avanzada represiva en INTI",
    description: "desde la intervención del gobierno en el INTI lxs trabajadorxs denuncian múltiples mecanismos persecutorios y represivos tales como: la instalación de cámaras, con micrófono y con reconocimiento facial, en todo el PTM; desembarco de gendarmería y policía federal para la vigilancia de entrada y salida de trabajadorxs del predio.",
    tag: "INTI",
    date: "2025-10-12",
    dateDisplay: "12 oct 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 10,
    title: "Jornada de debate sobre soberanía tecnológica en el INTI",
    description: "Trabajadores y trabajadoras del INTI organizan una jornada para discutir el rol de la tecnología en el desarrollo nacional y la defensa de los recursos estratégicos.",
    tag: "INTI",
    date: "2025-11-20",
    dateDisplay: "20 nov 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 15,
    title: "Universidades públicas en alerta por veto presupuestario",
    description: "Docentes, investigadores y estudiantes de universidades nacionales se movilizan frente al Congreso en defensa de la educación y la ciencia pública.",
    tag: "UNIVERSIDAD",
    date: "2025-11-10",
    dateDisplay: "10 nov 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  },
  {
    id: 16,
    title: "Universidad de Buenos Aires: paro en defensa del presupuesto",
    description: "Trabajadores docentes y no docentes de la UBA realizan un paro en reclamo de mejoras salariales y presupuesto para la universidad pública.",
    tag: "UNIVERSIDAD",
    date: "2025-10-05",
    dateDisplay: "05 oct 2025",
    image: "./assets/img/logo_largo_ncyt_lineas_small.png",
    link: "https://www.instagram.com/naranja.cyt"
  }
];

// Render News Summary Cards
newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

let currentFilters = {
  tag: 'all',
  dateFrom: '',
  dateTo: ''
};

function renderNews() {
  const newsGrid = document.getElementById('newsGrid');
  const visibleCountSpan = document.getElementById('visibleCount');
  const totalCountSpan = document.getElementById('totalCount');
  
  let filteredNews = [...newsData];
  
  if (currentFilters.tag !== 'all') {
    filteredNews = filteredNews.filter(news => news.tag === currentFilters.tag);
  }
  
  if (currentFilters.dateFrom) {
    filteredNews = filteredNews.filter(news => news.date >= currentFilters.dateFrom);
  }
  
  if (currentFilters.dateTo) {
    filteredNews = filteredNews.filter(news => news.date <= currentFilters.dateTo);
  }
  
  visibleCountSpan.textContent = filteredNews.length;
  totalCountSpan.textContent = newsData.length;
  
  if (filteredNews.length === 0) {
    newsGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-newspaper"></i>
        <h3>No se encontraron noticias</h3>
        <p>Intentá con otros filtros o revisá más tarde</p>
      </div>
    `;
    return;
  }
  
  newsGrid.innerHTML = filteredNews.map(news => `
    <article class="news-card" role="listitem" aria-labelledby="n${news.id}">
      <div class="news-thumb">
        <span class="tag" style="position: absolute; top: 12px; left: 12px; z-index: 2;">${news.tag}</span>
        <img src="${news.image}" alt="${news.title}">
      </div>
      <div class="news-body">
        <h4 id="n${news.id}">${news.title}</h4>
        <p class="muted">${news.description}</p>
      </div>
      <div class="news-footer">
        <small class="muted">${news.dateDisplay}</small>
        <a class="btn btn-secondary" href="${news.link}" target="_blank">Leer</a>
      </div>
    </article>
  `).join('');
}

function filterNews() {
  const tagSelect = document.getElementById('tagSelect');
  const dateFrom = document.getElementById('dateFrom');
  const dateTo = document.getElementById('dateTo');
  
  currentFilters.tag = tagSelect.value;
  currentFilters.dateFrom = dateFrom.value;
  currentFilters.dateTo = dateTo.value;
  
  renderNews();
  updateActiveTagFilters();
}

function resetFilters() {
  document.getElementById('tagSelect').value = 'all';
  document.getElementById('dateFrom').value = '';
  document.getElementById('dateTo').value = '';
  
  currentFilters = {
    tag: 'all',
    dateFrom: '',
    dateTo: ''
  };
  
  renderNews();
  updateActiveTagFilters();
}

function quickFilter(tag) {
  document.getElementById('tagSelect').value = tag;
  currentFilters.tag = tag;
  renderNews();
  updateActiveTagFilters();
}

function updateActiveTagFilters() {
  const tagFilters = document.querySelectorAll('.tag-filter');
  tagFilters.forEach(filter => {
    const tagValue = filter.getAttribute('data-tag');
    if (tagValue === currentFilters.tag) {
      filter.classList.add('active');
    } else {
      filter.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews();

  const dateFrom = document.getElementById('dateFrom');
  const dateTo = document.getElementById('dateTo');
  
  if (dateFrom) {
    dateFrom.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') filterNews();
    });
  }
  
  if (dateTo) {
    dateTo.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') filterNews();
    });
  }
});