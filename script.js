// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const mt = document.getElementById('menuToggle');
const nm = document.getElementById('navMobile');
mt?.addEventListener('click', () => nm.classList.toggle('open'));
nm?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nm.classList.remove('open')));

// Services
const services = [
  { ico:'✨', img:'assets/service-cleaning.jpg', title:'Limpeza e Conservação Predial', desc:'Higienização profissional de ambientes corporativos, condomínios e áreas industriais com produtos certificados.' },
  { ico:'🧹', img:'assets/service-street.jpg', title:'Limpeza Urbana e de Ruas', desc:'Varrição, lavagem e conservação de vias públicas, praças e áreas comuns com equipes equipadas.' },
  { ico:'🛡️', img:'assets/service-access.jpg', title:'Portaria e Controle de Acesso', desc:'Portaria 24h, recepção, identificação de visitantes e controle de entrada e saída com tecnologia.' },
  { ico:'🛡️', img:'assets/service-event-security.jpg', title:'Segurança em Locais e Eventos', desc:'Equipes especializadas em segurança patrimonial, eventos corporativos, shows e ocasiões privadas.' },
  { ico:'📦', img:'assets/service-logistics.jpg', title:'Apoio Logístico e Operacional', desc:'Suporte logístico, manutenção predial leve e equipes operacionais para eventos de qualquer porte.' },
  { ico:'♻️', img:'assets/service-waste.jpg', title:'Gestão de Resíduos', desc:'Coleta seletiva, descarte adequado e consultoria em sustentabilidade para sua operação.' },
];
const grid = document.getElementById('servicesGrid');
grid.innerHTML = services.map(s => `
  <article class="service-card reveal">
    <div class="service-img">
      <img src="${s.img}" alt="${s.title}" loading="lazy" />
      <div class="service-ico">${s.ico}</div>
    </div>
    <div class="service-body">
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  </article>
`).join('');

// Reveal on scroll
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const t = document.getElementById('toast');
  t.classList.add('show');
  e.target.reset();
  setTimeout(() => t.classList.remove('show'), 4000);
});
