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
    link: "declaraciones.html"  
  },
  {
    id: 4,
    title: "Censura en CONICET y el avance del lobby minero",
    description: "Denunciamos las presiones que llevaron a reemplazar un informe del CONICET sobre riesgos ambientales del Proyecto Minero San Jorge por un comunicado alineado al gobierno y las mineras.",
    tag: "CONICET",
    date: "2025-11-26",
    dateDisplay: "26 nov 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "declaraciones.html"  
  },
  {
    id: 5,
    title: "La lucha de lxs trabajadorxs de CyT debe radicalizarse",
    description: "CONICET recortó de 845 a solo 400 ingresos a la carrera de investigador. 2000 trabajadorxs menos desde 2023, pérdida del 35% salarial y convocatorias paralizadas.",
    tag: "CONICET",
    date: "2025-10-28",
    dateDisplay: "28 oct 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "declaraciones.html"  
  },
  {
    id: 6,
    title: "Presupuesto 2026: ajuste estructural para el sistema científico",
    description: "El proyecto de Presupuesto 2026 deroga la ley que garantizaba financiamiento progresivo para CyT, dejando al sistema público sin piso de inversión mínima.",
    tag: "CONICET",
    date: "2025-12-22",
    dateDisplay: "22 dic 2025",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "declaraciones.html"  
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
    link: "declaraciones.html"  
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
  },
  {
    id: 13,
    title: "Vacío institucional: becarios posdoctorales del CONICET al borde de la expulsión",
    description: "Una vez más, lxs becarixs del CONICET se encuentran ante un escenario desesperante, expulsadxs del organismo por arbitrariedades y recortes de presupuesto.",
    tag: "CONICET",
    date: "2026-04-07",
    dateDisplay: "07 abr 2026",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/decla_prorroga_becas_abril_2026.html"  
  },
  {
    id: 14,
    title: "Repudio al cierre de servicios del INTI: 1000 servicios dados de baja y 700 puestos de trabajo amenazados",
    description: "Repudiamos la resolución RESFC-2026-42-APN-CD#INTI que elimina 1000 servicios del INTI y amenaza con 700 despidos. Exigimos su derogación inmediata, el cese de la amenaza de despidos, financiamiento público permanente y respeto a la autonomía de los consejos directivos. La ciencia no es una mercancía.",
    tag: "INTI",
    date: "2026-04-15",
    dateDisplay: "15 abr 2026",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/decla_INTI_15_abril_2026.html"  
  },
  {
    id: 15,
    title: "Becas Williams vs CONICET: Incompatibilidad absurda que condena a la precariedad",
    description: "Repudiamos la interpretación restrictiva del CONICET que declara incompatible con su reglamento la beca de la Fundación Williams para estadías de investigación dentro del país, mientras los estipendios de becarixs han perdido el 50% de su poder adquisitivo y se encuentran por debajo de la canasta básica. Exigimos al Directorio del CONICET que habilite urgentemente a lxs becarixs a presentarse sin restricciones. Lo verdaderamente incompatible con la ciencia es que quienes investigan tengan que manejar un Uber o endeudarse para sostenerse.",
    tag: "CONICET",
    date: "2026-04-17",
    dateDisplay: "17 abr 2026",
    image: "./assets/img/ncyt_icono_b_comb.png",
    link: "./notas/decla_Becas_Williams_CONICET.html"
  },
  {
  id: 16,
  title: "Contra el desguace universitario y científico: 12M movilización masiva",
  description: "Ante la caída del presupuesto universitario hasta el 45% y salarios de becarixs e investigadorxs que perdimos entre el 30% y el 40% de nuestro poder adquisitivo, desde la Agrupación Naranja Ciencia y Técnica convocamos a llenar las calles este 12 de mayo. Mientras el sector CyT acumula el 8,3% de los despidos totales del Estado, con organismos estratégicos como la CNEA, el INTI y AGENCIA I+D+i siendo completamente desmantelados, las burocracias sindicales de ATE y UPCN actúan como agentes de desorganización y complicidad con el ajuste. Por esta razón exigimos un paro en CyT para la fecha de la próxima marcha Universitaria Federal. Exijamos en las calles la aplicación inmediata de la ley de Financiamiento Universitario y construyamos una huelga general para derrotar a Milei.",
  tag: "UNIVERSIDAD",
  date: "2026-05-12",
  dateDisplay: "8 may 2026",
  image: "./assets/img/ncyt_icono_b_comb.png",
  link: "./notas/convocatoria_marcha_universitaria_12M.html"
  },
  {
  id: 17,
  title: "Declaración de la Naranja Ciencia y Técnica ante un nuevo Ajustazo",
  description: "La modificación del Presupuesto 2026, realizada a través de la Decisión Administrativa 20/2026 en su planilla anexa al Artículo 1º, es un capítulo más en la ejecución programada del desguace del sistema público de ciencia y tecnología argentino. Bajo el eufemismo contable de “contribuciones figurativas negativas”, el gobierno de Milei elimina partidas enteras de organismos estratégicos. Este 12 de mayo, convocamos a llenar las calles en defensa de las universidades y el sistema científico-tecnológico públicos. ¡La victoria de la lucha de la Universidad es clave para el sistema científico! Abajo el presupuesto de ajuste.",
  tag: "CONICET",
  date: "2026-05-12",
  dateDisplay: "12 may 2026",
  image: "./assets/img/ncyt_icono_b_comb.png",
  link: "./notas/decla_presupuesto_2026.html"
}, 
  {
  id: 18,
  title: "La marcha universitaria dejó planteada la profundización de la lucha para todos los trabajadores del Estado",
  description: "Las movilizaciones del 12 de mayo fueron masivas en todo el país. La marcha expresó el reclamo por educación, salud, ciencia y técnica, contra los despidos y el ajuste. Milei redobla la apuesta con más violencia presupuestaria. Las y los estatales somos víctimas centrales. Proponemos una asamblea general de estatales para unir la lucha por abajo, sin distinción de afiliación. Basta de despidos, aumento salarial de emergencia, defendamos al INTI, el SMN y todos los organismos amenazados.",
  tag: "UNIVERSIDAD",
  date: "2026-05-15",
  dateDisplay: "15 may 2026",
  image: "./assets/img/ncyt_icono_b_comb.png",
  link: "./notas/asamblea_general_estatales.html"
},
  {
  id: 19,
  title: "¡MEDICACIÓN PARA JOSEFINA YA!",
  description: "Desde la Agrupación Naranja Ciencia y Técnica expresamos nuestro más profundo apoyo y solidaridad con la compañera Josefina. Exigimos a Unión Personal y a UPCN el cumplimiento inmediato de la ley y de la medida cautelar correspondiente, garantizando la entrega urgente de toda la medicación y prestaciones indicadas por sus médicos tratantes. Llamamos a toda la comunidad de CONICET, organismos de ciencia y técnica y trabajadores estatales a rodear de solidaridad este reclamo y pronunciarnos colectivamente frente a un sistema que descarga el ajuste sobre la salud y la vida de los trabajadores.",
  tag: "CONICET",
  date: "2026-05-15",
  dateDisplay: "14 may 2026",
  image: "./assets/img/ncyt_icono_b_comb.png",
  link: "./notas/declaracion_sobre_josefina.html"
},
  {
  id: 20,
  title: "La organización colectiva arranca respuestas ¡Seguimos firmes por Josefina!",
  description: " En las últimas semanas, las denuncias impulsadas por compañeros y compañeras, junto con la difusión y el acompañamiento colectivo, comenzaron a arrancar respuestas que hasta hace poco parecían imposibles. A pesar de contar con una cautelar a favor, Unión Personal ha apelado el fallo judicial que intima a proveerle a Josefina el RIBOCICLIB (200 mg comp. x 63).  Por eso creemos que es fundamental continuar denunciando a Unión Personal y UPCN para que ¡cumplan todo el tratamiento de Josefina ya!",
  tag: "CONICET",
  date: "2026-05-15",
  dateDisplay: "20 may 2026",
  image: "./assets/img/ncyt_icono_b_comb.png",
  link: "./notas/declaracion_apelación_UP_contra_Josefina.html"
},
  {
  id: 21,
  title: "Baja masiva de becaries y la falsa elección impuesta por UP: Ni un paso atrás con la salud de les becaries: el ajuste no puede disfrazarse de 'opción'",
  description: "En las últimas horas se confirmó lo que veníamos advirtiendo: la Obra Social Unión Personal (UP) y las autoridades del CONICET han lanzado una maniobra brutal contra les becaries de todo el país. Bajo el ropaje de una supuesta “adecuación administrativa”, UP está notificando la baja masiva, sin fundamentos, de la cobertura de salud de decenas de compañeres becaries. Al mismo tiempo, les presentan una falsa opción: aceptar un ridículo bono de apenas 90 mil pesos, que no cubre ni una sola consulta médica, o “elegir” seguir en la obra social en crisis, en condiciones que se modifican unilateralmente, de manera discrecional y sin garantías. Esta maniobra vulnera el derecho a la salud de todo un sector de trabajadores de la ciencia, precarizados estructuralmente, que conquistaron esta obra social con más de una década de lucha ininterrumpida.",
  tag: "CONICET",
  date: "2026-03-06",
  dateDisplay: "3 jun 2026",
  image: "./assets/img/ncyt_icono_b_comb.png",
  link: "./notas/declaracion_baja_masiva_de_becaries_UP.html"
}
];

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