/* ── NAV SCROLL ──────────────────────────────────── */
window.addEventListener("scroll", () => {
  document
    .getElementById("nav")
    .classList.toggle("scrolled", window.scrollY > 20);
});

/* ── BACK TO TOP ─────────────────────────────────── */
window.addEventListener("scroll", () => {
  const btt = document.getElementById("btt");
  if (btt) btt.classList.toggle("show", window.scrollY > 300);
});

/* ── ACTIVE NAV LINK ─────────────────────────────── */
(function highlightNav() {
  const path = window.location.pathname;
  document.querySelectorAll(".nlink").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === "/" && path === "/") {
      a.classList.add("active");
      return;
    }
    if (href !== "/" && path.startsWith(href)) a.classList.add("active");
  });
})();

/* ── MOBILE MENU ─────────────────────────────────── */
let mopen = false;
function togMenu() {
  mopen = !mopen;
  document.getElementById("mm").classList.toggle("open", mopen);
  const s = document.querySelectorAll(".nburger span");
  s[0].style.transform = mopen ? "translateY(7px) rotate(45deg)" : "";
  s[1].style.opacity = mopen ? "0" : "";
  s[2].style.transform = mopen ? "translateY(-7px) rotate(-45deg)" : "";
}

/* ── REVEAL ON SCROLL ────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );
  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach((el) => obs.observe(el));
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const m = document.querySelector("main");
    if (m) m.classList.add("ready");
    initReveal();
  }, 80);
});

/* ── TOAST ───────────────────────────────────────── */
function toast(msg, type) {
  const e = document.querySelector(".toast");
  if (e) e.remove();
  const t = document.createElement("div");
  // type: "success" | "error" | "info" | undefined (default = success)
  const isError = type === "error" || msg.startsWith("❌");
  const isInfo  = type === "info"  || msg.startsWith("⏳");
  t.className = "toast" + (isError ? " toast-error" : isInfo ? " toast-info" : "");
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2700);
}

/* ── HERO CUSTOM CURSOR ──────────────────────────── */
function initHeroMouse() {
  if (
    window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth <= 768
  ) {
    return;
  }

  const cursor = document.getElementById("hCursor");
  const ring = document.getElementById("hCursorRing");
  if (!cursor || !ring) return;

  let cx = 0,
    cy = 0,
    rx = 0,
    ry = 0;

  document.addEventListener("mousemove", (e) => {
    cx = e.clientX;
    cy = e.clientY;
    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
    cursor.style.display = "block";
    ring.style.display = "block";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
    ring.style.display = "none";
  });

  /* Ring follows cursor with spring easing */
  let ringRafId;
  function runRing() {
    rx += (cx - rx) * 0.1;
    ry += (cy - ry) * 0.1;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    ringRafId = requestAnimationFrame(runRing);
  }
  ringRafId = requestAnimationFrame(runRing);

  document
    .querySelectorAll(
      "a, button, .fw-item, .wgi, .ncta, .nlink, .q-item, .q-circle, .qd-cover-img, .qd-back",
    )
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("is-hover");
        ring.classList.add("is-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-hover");
        ring.classList.remove("is-hover");
      });
    });

  /* Hero gradient trail */
  const section = document.getElementById("heroSection");
  const gradDiv = document.getElementById("heroCursorG");
  if (!section || !gradDiv) return;

  let trail = [],
    glowActive = false;
  const TRAIL_LIFE = 900;

  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();
    trail.push({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      time: Date.now(),
    });
    if (trail.length > 24) trail.shift();
    glowActive = true;
  });

  section.addEventListener("mouseleave", () => {
    glowActive = false;
    gradDiv.style.background = "";
    setTimeout(() => {
      if (!glowActive) trail = [];
    }, TRAIL_LIFE);
  });

  let glowRafId;
  function runGlow() {
    const now = Date.now();
    trail = trail.filter((p) => now - p.time < TRAIL_LIFE);
    if (glowActive || trail.length) {
      const t = (now % 3000) / 3000,
        mix = Math.sin(t * Math.PI * 2) * 0.5 + 0.5;
      const r = Math.round(106 + (134 - 106) * mix),
        g = Math.round(79 + (163 - 79) * mix),
        b = Math.round(122 + (110 - 122) * mix);
      const gradients = trail.map((p) => {
        const age = now - p.time,
          life = 1 - age / TRAIL_LIFE,
          size = 100 + life * 120;
        return `radial-gradient(circle ${size}px at ${p.x}% ${p.y}%, rgba(${r},${g},${b},${0.18 * life}) 0%, rgba(${r},${g},${b},${0.09 * life}) 42%, rgba(${r},${g},${b},${0.03 * life}) 64%, transparent 82%)`;
      });
      gradDiv.style.background = gradients.join(",");
    }
    glowRafId = requestAnimationFrame(runGlow);
  }
  glowRafId = requestAnimationFrame(runGlow);

  /* Pause RAF loops when tab is hidden to save CPU */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(ringRafId);
      cancelAnimationFrame(glowRafId);
    } else {
      ringRafId = requestAnimationFrame(runRing);
      glowRafId = requestAnimationFrame(runGlow);
    }
  });
}

/* ── FEATURED WORK CARD HTML ─────────────────────── */
function fwCardHTML(w, i) {
  const cv = w.cover
    ? `<img src="${w.cover}" alt="${w.title}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover">`
    : `<div class="fw-preview-inner" style="background:${w.color || "#f0eee9"}">${w.title.split("—")[0].trim().charAt(0)}</div>`;
  return `<div class="fw-item" onclick="location.href='/works/detail.html?id=${w.id}'">
    <div class="fw-row">
      <span class="fw-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="fw-main">
        <div class="fw-cat-row">
          <span class="fw-catbadge">${w.category}</span>
          <div class="fw-cat-dot"></div>
          <span class="fw-yr">${w.year}</span>
          <div class="fw-cat-dot"></div>
          ${w.tags
            .slice(0, 2)
            .map((t) => `<span class="tag">${t}</span>`)
            .join("")}
        </div>
        <div class="fw-title">${w.title}</div>
      </div>
      <div class="fw-arrow-wrap"><div class="fw-circle">↗</div></div>
    </div>
    <div class="fw-preview">${cv}</div>
  </div>`;
}

/* ── SLUGIFY ─────────────────────────────────────── */
function slugify(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

document.addEventListener("DOMContentLoaded", initHeroMouse);

/* ── SMOOTH SCROLL (Lenis) ───────────────────────── */
(function initLenis() {
  if (window.location.pathname.startsWith("/admin")) return;
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js";
  script.onload = () => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  };
  document.head.appendChild(script);
})();

/* ── LOADER ──────────────────────────────────────── */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) setTimeout(() => loader.classList.add("hidden"), 800);
});
