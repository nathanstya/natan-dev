// ── Anti-Flash (Dark Theme) ──────────────────────────────────────────────────
// Dijalankan via inline script di <head> karena harus sebelum render.
// Tidak perlu dipindah ke sini.

// ── Projects Data ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    category: "all",
    title: "Website Company Profile Vannes Jasmine Laundry",
    desc: "Mendesain dan mengembangkan konsep situs web company profile untuk UMKM .",
    fullDesc:
      "Saya merancang dan mengembangkan website company profile untuk Vanessa Jasmine Laundry dengan fokus pada pengalaman pengguna (UI/UX) yang sederhana, modern, dan responsif. Website ini bertujuan meningkatkan kepercayaan pelanggan serta mempermudah proses pemesanan melalui integrasi WhatsApp. Selain menampilkan informasi layanan dan harga, website juga dilengkapi dengan fitur layanan antar jemput, informasi lokasi, serta desain yang dioptimalkan untuk berbagai ukuran perangkat.",
    image: "/images/project1.png",
    techCount: 4,
    featureCount: 9,
    liveUrl: "https://nathanstya.github.io/vanessa-jasmine-laundry/",
    githubUrl: "https://github.com/nathanstya/vanessa-jasmine-laundry",
    technologies: ["Html", "Css", "Javascript", "Whatsapp Api"],
  },
  {
    id: 2,
    category: "all",
    title: "AI Recommendation Engine",
    desc: "Aplikasi web berbasis Artificial Intelligence yang dirancang untuk membantu pengguna.",
    fullDesc:
      "AI Recommendation Engine adalah aplikasi web berbasis Content-Based Filtering yang membantu pengguna menemukan alternatif model AI terbaik berdasarkan tingkat kemiripan atribut seperti intelligence score, biaya, kecepatan, latensi, dan response time. Sistem menyediakan visualisasi data interaktif, pengaturan bobot kriteria, upload dataset Excel, serta dukungan tema Dark, Light, dan AMOLED untuk meningkatkan pengalaman pengguna.",
    image: "/images/project2.png",
    techCount: 4,
    featureCount: 6,
    liveUrl: "https://nathanstya.github.io/AI-Recomend/",
    githubUrl: "https://github.com/nathanstya/AI-Recomend",
    technologies: ["HTML5", "CSS3", "Javascipt", "Chart.js"],
  },
  {
    id: 3,
    category: "all",
    title: "Website Company Profile Kedai Kopi KenanganSenja",
    desc: "Website company profile untuk kedai kopi lokal dengan desain modern dan elegan.",
    fullDesc:
      "Website company profile untuk kedai kopi lokal KenanganSenja. Menampilkan menu, lokasi, dan cerita brand dengan desain yang modern, gelap, dan elegan. Dioptimalkan untuk pengalaman mobile-first.",
    image: "",
    techCount: 3,
    featureCount: 7,
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    category: "design",
    title: "UI Design E-Commerce Fashion",
    desc: "Desain antarmuka toko online fashion dengan pendekatan minimalis dan modern.",
    fullDesc:
      "Desain antarmuka lengkap untuk platform e-commerce fashion, mencakup halaman produk, keranjang belanja, checkout, dan dashboard pengguna. Dibuat dengan pendekatan minimalis dan clean.",
    image: "",
    techCount: 2,
    featureCount: 8,
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Figma", "Canva"],
  },
  {
    id: 5,
    category: "design",
    title: "Brand Identity – Startup Tech",
    desc: "Pembuatan identitas brand lengkap untuk startup teknologi termasuk logo dan guidelines.",
    fullDesc:
      "Pembuatan identitas brand lengkap untuk startup teknologi, mencakup desain logo, color palette, typography, dan brand guidelines untuk keperluan digital dan cetak.",
    image: "",
    techCount: 2,
    featureCount: 6,
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Figma", "Canva"],
  },
  {
    id: 6,
    category: "editing",
    title: "Video Editing – Company Profile Video",
    desc: "Editing video company profile profesional untuk keperluan presentasi dan media sosial.",
    fullDesc:
      "Editing video company profile profesional untuk keperluan presentasi dan distribusi di media sosial. Mencakup color grading, motion graphics, dan sound design.",
    image: "",
    techCount: 2,
    featureCount: 5,
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["Canva", "Antigravity IDE"],
  },
];

// ── Projects Render ───────────────────────────────────────────────────────────
let activeFilter = "all";

function renderCards(filter) {
  const grid = document.getElementById("projects-grid");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  grid.innerHTML = filtered
    .map(
      (p) => `
      <div class="project-card" onclick="openModal(${p.id})">
        ${
          p.image
            ? `<img src="${p.image}" alt="${p.title}" class="project-card-img" />`
            : `<div class="project-card-img-placeholder">
              <span>PROJECT PORTFOLIO</span>
              <strong>${p.title.split(" ").slice(0, 2).join(" ").toUpperCase()}</strong>
             </div>`
        }
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-desc">${p.desc}</p>
          <div class="project-card-actions">
            <a href="${p.liveUrl}" class="project-card-btn" onclick="event.stopPropagation()">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> VIEW APP
            </a>
            <button class="project-card-btn" onclick="event.stopPropagation(); openModal(${p.id})">
              Details <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `,
    )
    .join("");
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function openModal(id) {
  const p = projects.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("modal-breadcrumb-title").textContent = p.title;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-desc").textContent = p.fullDesc;
  document.getElementById("modal-tech-count").textContent = p.techCount;
  document.getElementById("modal-feature-count").textContent = p.featureCount;
  document.getElementById("modal-live-link").href = p.liveUrl;
  document.getElementById("modal-github-link").href = p.githubUrl;
  document.getElementById("modal-tech-badges").innerHTML = p.technologies
    .map(
      (t) =>
        `<span class="modal-tech-badge"><i class="fa-solid fa-circle-dot"></i> ${t}</span>`,
    )
    .join("");
  const img = document.getElementById("modal-img");
  if (p.image) {
    img.src = p.image;
    img.style.display = "block";
  } else {
    img.style.display = "none";
    document.querySelector(".modal-img-frame").style.background =
      "linear-gradient(135deg, #1a1a2e, #2a1a2e)";
  }
  document.getElementById("modal-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ── Side Nav Toggle ───────────────────────────────────────────────────────────
function initSideNav() {
  const toggleBtn = document.getElementById("side-nav-toggle");
  const navItemsEl = document.getElementById("side-nav-items");
  const toggleIcon = document.getElementById("side-nav-toggle-icon");
  let navOpen = true;

  toggleBtn.addEventListener("click", () => {
    navOpen = !navOpen;
    navItemsEl.classList.toggle("collapsed", !navOpen);
    toggleIcon.style.transform = navOpen ? "rotate(0deg)" : "rotate(180deg)";
  });

  if (window.innerWidth <= 768) {
    navOpen = false;
    navItemsEl.classList.add("collapsed");
    toggleIcon.style.transform = "rotate(180deg)";
  }
}

// ── Side Nav Active State ─────────────────────────────────────────────────────
function initScrollSpy() {
  const sections = ["about", "techstack", "projects", "contact"];
  const sideNavLinks = document.querySelectorAll(".side-nav-item");

  function updateActive() {
    let current = "";
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) current = id;
    });
    sideNavLinks.forEach((item) => {
      item.classList.remove("active");
      const href = item.getAttribute("href").replace("#", "");
      if (current === href || (!current && href === ""))
        item.classList.add("active");
    });
  }

  window.addEventListener("scroll", updateActive);
  updateActive();
}

// ── Theme Toggle ──────────────────────────────────────────────────────────────
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = themeToggleBtn.querySelector("i");

  function updateToggleIcon(darkActive) {
    toggleIcon.className = darkActive ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  updateToggleIcon(document.documentElement.classList.contains("dark-theme"));

  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateToggleIcon(isDark);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Projects
  renderCards("all");

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderCards(activeFilter);
    });
  });

  // Modal close
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  });

  // Nav
  initSideNav();
  initScrollSpy();
  initThemeToggle();
});
