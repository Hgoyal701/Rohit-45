
import "./src/style.css";
import { achievements, trophies, stats } from "./src/data.js";

const app = document.querySelector("#app");

app.innerHTML = `
<header class="nav">
  <a class="logo" href="#home">RS<span>.</span></a>
  <button class="menu" aria-label="Toggle navigation" aria-expanded="false">☰</button>
  <nav class="nav-links">
    <a href="#legacy">LEGACY</a>
    <a href="#trophies">TROPHIES</a>
    <a href="#journey">JOURNEY</a>
    <a href="#stats">STATS</a>
  </nav>
  <a class="nav-tag" href="#stats">THE HITMAN FILE ↗</a>
</header>

<main>
  <section class="hero" id="home">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <p class="eyebrow"><span class="dot"></span> INDIA • THE HITMAN • NO. 45</p>
      <h1>ROHIT<br><span>SHARMA</span><i>.</i></h1>
      <p class="hero-desc">Timing. Elegance. Explosive power.<br>A cricketing icon who turns the impossible into a highlight reel.</p>
      <div class="actions">
        <a class="btn btn-primary" href="#legacy">ENTER THE LEGACY ↘</a>
        <a class="btn btn-ghost" href="#trophies">EXPLORE ACHIEVEMENTS</a>
      </div>
      <div class="hero-bottom">
        <span>THE HITMAN</span><span class="line"></span><span>BUILT FOR BIG MOMENTS</span>
      </div>
    </div>
    <div class="hero-number">45</div>
    <div class="vertical-label">POWER / PRECISION / PASSION</div>
  </section>

  <section class="section" id="legacy">
    <div class="section-label">01 — THE LEGACY <span>MORE THAN NUMBERS</span></div>
    <div class="heading-row">
      <h2>THE ART OF<br><span>BIG HITTING.</span></h2>
      <p>From effortless timing to monumental innings, Rohit Sharma has built a reputation as one of the modern era's most destructive and graceful batters.</p>
    </div>
    <div class="feature-grid">
      <article class="feature"><span>01 / ODI RECORD</span><strong>264</strong><p>Highest individual score in men's ODI cricket</p></article>
      <article class="feature"><span>02 / WORLD CUP</span><strong>5</strong><p>Centuries at the 2019 men's ODI World Cup</p></article>
      <article class="feature"><span>03 / T20I</span><strong>5</strong><p>Men's T20I centuries during his international career</p></article>
      <article class="feature"><span>04 / LEADERSHIP</span><strong>2024</strong><p>Led India to the Men's T20 World Cup title</p></article>
    </div>
  </section>

  <section class="section dark" id="trophies">
    <div class="section-label">02 — THE TROPHY VAULT <span>MADE FOR HISTORY</span></div>
    <div class="heading-row">
      <h2>GOLDEN<br><span>MOMENTS.</span></h2>
      <p>Filter the silverware by international tournament and IPL success.</p>
    </div>
    <div class="filters">
      <button class="filter active" data-type="ALL">ALL</button>
      <button class="filter" data-type="WORLD">WORLD TITLES</button>
      <button class="filter" data-type="ASIA">ASIA CUP</button>
      <button class="filter" data-type="IPL">IPL</button>
    </div>
    <div class="trophy-grid" id="trophy-grid"></div>
  </section>

  <section class="section" id="journey">
    <div class="section-label">03 — THE JOURNEY <span>CHAPTERS OF A CAREER</span></div>
    <div class="heading-row">
      <h2>FROM PROMISE<br><span>TO GREATNESS.</span></h2>
      <p>A timeline of the milestones that shaped Rohit's international career.</p>
    </div>
    <div class="timeline" id="timeline"></div>
  </section>

  <section class="section dark" id="stats">
    <div class="section-label">04 — THE STATS LAB <span>CAREER DATA</span></div>
    <div class="heading-row">
      <h2>LET THE<br><span>NUMBERS TALK.</span></h2>
      <p>Choose a format to explore batting figures. Career totals are static reference data, not a live feed.</p>
    </div>
    <div class="stat-controls" role="tablist" aria-label="Cricket format">
      <button class="stat-tab active" data-format="ODI" role="tab" aria-selected="true">ODI</button>
      <button class="stat-tab" data-format="Test" role="tab" aria-selected="false">TEST</button>
      <button class="stat-tab" data-format="T20I" role="tab" aria-selected="false">T20I</button>
      <button class="stat-tab" data-format="IPL" role="tab" aria-selected="false">IPL</button>
    </div>
    <div class="stat-panel" id="stat-panel"></div>
    <p class="disclaimer">Verify statistics against current official records before publication. The website is an independent fan tribute and is not affiliated with Rohit Sharma, BCCI, ICC or Mumbai Indians.</p>
  </section>

  <section class="finale">
    <p class="eyebrow">THE HITMAN MINDSET</p>
    <h2>SEE THE BALL.<br><span>HIT THE BALL.</span></h2>
    <p>Some players make runs. Some create memories.</p>
    <a class="btn btn-primary" href="#home">BACK TO THE TOP ↑</a>
    <div class="finale-number">45</div>
  </section>
</main>

<footer>
  <a class="logo" href="#home">RS<span>.</span></a>
  <p>Independent fan-made tribute · Not an official website</p>
  <div><a href="https://www.icc-cricket.com/" target="_blank" rel="noreferrer">ICC ↗</a><a href="https://www.espncricinfo.com/" target="_blank" rel="noreferrer">ESPNcricinfo ↗</a></div>
</footer>
`;

const trophyGrid = document.querySelector("#trophy-grid");

function renderTrophies(type = "ALL") {
  trophyGrid.innerHTML = trophies
    .filter(t => type === "ALL" || t.type === type)
    .map((t, i) => `
      <article class="trophy-card">
        <div class="trophy-top"><span>HONOUR / ${String(i + 1).padStart(2, "0")}</span><span>✳</span></div>
        <p class="trophy-year">${t.year}</p>
        <h3>${t.title}</h3>
        <p>${t.text}</p>
        <span class="watermark">RS</span>
      </article>
    `).join("");
}

renderTrophies();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === button));
    renderTrophies(button.dataset.type);
  });
});

document.querySelector("#timeline").innerHTML = achievements.map((a, i) => `
  <article class="timeline-item">
    <div class="timeline-year">${a.year}</div>
    <div class="timeline-marker"></div>
    <div><span class="timeline-index">MILESTONE / ${String(i + 1).padStart(2, "0")}</span>
      <h3>${a.title}</h3><p>${a.text}</p>
    </div>
  </article>
`).join("");

function renderStats(format) {
  const s = stats[format];
  document.querySelector("#stat-panel").innerHTML = `
    <div class="stat-intro"><span>${s.label}</span><p>${s.note}</p></div>
    <div class="stat-big"><span>MATCHES</span><strong>${s.matches}</strong></div>
    <div class="stat-big"><span>RUNS</span><strong>${s.runs}</strong></div>
    <div class="stat-big"><span>AVERAGE</span><strong>${s.average}</strong></div>
    <div class="stat-small"><span>100s</span><strong>${s.hundreds}</strong></div>
    <div class="stat-small"><span>50s</span><strong>${s.fifties}</strong></div>
    <div class="stat-small"><span>HIGH SCORE</span><strong>${s.highest}</strong></div>
  `;
}

renderStats("ODI");

document.querySelectorAll(".stat-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".stat-tab").forEach(b => {
      const active = b === button;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", String(active));
    });
    renderStats(button.dataset.format);
  });
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".feature, .trophy-card, .timeline-item").forEach(el => {
  revealObserver.observe(el);
});
