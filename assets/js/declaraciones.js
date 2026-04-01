// Declas database
const newsData = [
  {
    id: 1,
    title: "Alertan por despidos en la CNEA y se intensifica la lucha",
    description: "Exigimos la renovación de todos los contratos, aumento salarial de emergencia y no a la minería de uranio sin licencia social. Más de 330 contratos vencen el 31 de marzo sin confirmación de renovación.",
    tag: "CNEA",
    date: "2026-03-01",
    dateDisplay: "1 mar 2026",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "../notas/decla_CNEA_marzo_2026.html"  
  },
  {
    id: 2,
    title: "Crisis en la Obra Social UP: basta de ajuste sobre nuestra salud",
    description: "Lxs trabajadorxs del CONICET sufren recortes sistemáticos, cobros irregulares y negativas a coberturas esenciales. La justicia falló a favor pero UP se niega a acatar.",
    tag: "CONICET",
    date: "2025-11-25",
    dateDisplay: "25 nov 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/declaracion_CONICET_UP_nov_2025.html"  
  },
  {
    id: 3,
    title: "Por una ciencia al servicio del pueblo, no del capital",
    description: "Rechazamos los 'Lineamientos Estratégicos en Innovación, Ciencia y Tecnología 2025-2027' que subordinan la ciencia pública a los intereses del capital bajo el discurso de la eficiencia.",
    tag: "CONICET",
    date: "2025-12-05",
    dateDisplay: "5 dic 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./declaracion-conicet-lineamientos.html"  
  },
  {
    id: 4,
    title: "Censura en CONICET y el avance del lobby minero",
    description: "Denunciamos las presiones que llevaron a reemplazar un informe del CONICET sobre riesgos ambientales del Proyecto Minero San Jorge por un comunicado alineado al gobierno y las mineras.",
    tag: "CONICET",
    date: "2025-11-26",
    dateDisplay: "26 nov 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./declaracion-conicet-censura.html"  
  },
  {
    id: 5,
    title: "La lucha de lxs trabajadorxs de CyT debe radicalizarse",
    description: "CONICET recortó de 845 a solo 400 ingresos a la carrera de investigador. 2000 trabajadorxs menos desde 2023, pérdida del 35% salarial y convocatorias paralizadas.",
    tag: "CONICET",
    date: "2025-10-28",
    dateDisplay: "28 oct 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./declaracion-conicet-lucha.html"  
  },
  {
    id: 6,
    title: "Presupuesto 2026: ajuste estructural para el sistema científico",
    description: "El proyecto de Presupuesto 2026 deroga la ley que garantizaba financiamiento progresivo para CyT, dejando al sistema público sin piso de inversión mínima.",
    tag: "CONICET",
    date: "2025-12-22",
    dateDisplay: "22 dic 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./declaracion-conicet-presupuesto.html"  
  },
  {
    id: 7,
    title: "Nuevos financiamientos de AGENCIA I+D+i: ciencia al servicio del capital",
    description: "Denunciamos el desvío de fondos del BID destinados a CyT hacia empresas privadas, mientras las convocatorias PICT 2022 y 2023 quedaron en una farsa testimonial.",
    tag: "AGENCIA",
    date: "2025-12-08",
    dateDisplay: "8 dic 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/decla_AIC_AGENCIA.html"  
  },
  {
    id: 9,
    title: "IA en evaluaciones de CONICET: liquidar trabajadorxs con inteligencia artificial",
    description: "El uso de inteligencia artificial para evaluar becas vulnera derechos de lxs trabajadores, atenta contra la autonomía científica y es un retroceso en la democratización del organismo.",
    tag: "CONICET",
    date: "2025-09-09",
    dateDisplay: "9 sep 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/decla_AI_CONICET.html"
  },
  {
    id: 10,
    title: "Nuevo ataque a lxs trabajadorxs del CONICET: exigen informe de avance",
    description: "CONICET exige informe de avance a investigadorxs que esperan su efectivización hace más de dos años. Una excusa para profundizar la precarización de quienes ya fueron evaluados y admitidos.",
    tag: "CONICET",
    date: "2025-10-17",
    dateDisplay: "17 oct 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./declaracion-conicet-informe.html"  
  },
  {
    id: 11,
    title: "Persecución y censura en CyT: sumarios a trabajadorxs del CONICET",
    description: "Repudiamos los sumarios iniciados contra compañerxs del CENPAT que participaron de una protesta pacífica en 2024. Un acto de revanchismo y persecución ideológica contra quienes luchan por la ciencia pública.",
    tag: "CONICET",
    date: "2025-11-12",
    dateDisplay: "12 nov 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/decla_CENPAT_nov_2025.html"  
  },
  {
    id: 12,
    title: "La fuga de cerebros en la ciencia bonaerense: ajuste con apellido",
    description: "El gobierno de Kicillof excluyó a lxs trabajadorxs de la CIC de una bonificación del 125%, acelerando la fuga de cerebros hacia el sistema nacional donde los salarios duplican los de la provincia.",
    tag: "CIC PBA",
    date: "2026-01-21",
    dateDisplay: "21 ene 2026",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/decla_cic_PBA_enero_2026.html"  
  }
];

// Render Declas Summary Cards
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