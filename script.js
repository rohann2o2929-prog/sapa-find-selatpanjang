const $ = (id) => document.getElementById(id);

const app = $("app");
const startBtn = $("startBtn");
const backBtn = $("backBtn");
const helpBtn = $("helpBtn");
const helpModal = $("helpModal");
const closeModal = $("closeModal");
const modalStart = $("modalStart");
const searchInput = $("searchInput");
const cards = [...document.querySelectorAll(".service-card")];

function openApp() {
  app.classList.remove("hidden");
  app.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => searchInput.focus(), 450);
}

function closeApp() {
  app.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startBtn.addEventListener("click", openApp);
modalStart.addEventListener("click", () => {
  helpModal.classList.add("hidden");
  openApp();
});
backBtn.addEventListener("click", closeApp);

helpBtn.addEventListener("click", () => helpModal.classList.remove("hidden"));
closeModal.addEventListener("click", () => helpModal.classList.add("hidden"));
helpModal.addEventListener("click", (e) => {
  if (e.target === helpModal) helpModal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") helpModal.classList.add("hidden");
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  cards.forEach(card => {
    const text = `${card.textContent} ${card.dataset.keywords}`.toLowerCase();
    card.style.display = !query || text.includes(query) ? "grid" : "none";
  });
});

cards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    alert(`Menu "${title}" dipilih.\n\nKonten layanan dapat diisi sesuai data resmi Kantor Imigrasi Selatpanjang.`);
  });
});
