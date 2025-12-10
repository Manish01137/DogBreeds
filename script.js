// ========== MOBILE NAV TOGGLE ==========
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile nav when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
  

// ========== SEARCH FILTER FOR BREEDS ==========
const searchInput = document.getElementById("breedSearch");
const breedCards = document.querySelectorAll(".breed-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  breedCards.forEach((card) => {
    const name = card.dataset.name;
    if (!query || name.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// ========== EXPLORE BUTTON SCROLL ==========
const exploreBtn = document.getElementById("exploreBtn");
const popularSection = document.getElementById("popular");

exploreBtn.addEventListener("click", () => {
  popularSection.scrollIntoView({ behavior: "smooth" });
});

// ========== RANDOM BREED HIGHLIGHT ==========
const randomBtn = document.getElementById("randomBtn");

randomBtn.addEventListener("click", () => {
  const visibleCards = Array.from(breedCards).filter(
    (card) => card.style.display !== "none"
  );

  if (visibleCards.length === 0) return;

  // pick random card
  const randomCard =
    visibleCards[Math.floor(Math.random() * visibleCards.length)];

  // scroll to it
  randomCard.scrollIntoView({ behavior: "smooth", block: "center" });

  // quick highlight animation
  randomCard.classList.add("highlight");
  setTimeout(() => {
    randomCard.classList.remove("highlight");
  }, 1000);
});

// ========== HEART FAVORITE TOGGLE ==========
document.querySelectorAll(".card-heart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // don't trigger card click
    btn.classList.toggle("active");
    const icon = btn.querySelector("i");
    if (btn.classList.contains("active")) {
      icon.classList.remove("ri-heart-line");
      icon.classList.add("ri-heart-3-fill");
    } else {
      icon.classList.remove("ri-heart-3-fill");
      icon.classList.add("ri-heart-line");
    }
  });
});

// ========== FOOTER YEAR ==========
document.getElementById("year").textContent = new Date().getFullYear();

// ========== CARD HIGHLIGHT CSS (dynamic) ==========
const style = document.createElement("style");
style.innerHTML = `
  .breed-card.highlight {
    box-shadow: 0 0 0 3px #f97316, 0 20px 50px rgba(15, 23, 42, 0.25);
    transform: translateY(-4px) scale(1.01);
    transition: box-shadow 0.18s ease, transform 0.18s ease;
  }
`;
document.head.appendChild(style);
