// Aidag-Chain App Logic

// Countdown function
function countdown(targetDate, elementId, callback) {
  const end = new Date(targetDate).getTime();
  const el = document.getElementById(elementId);

  function update() {
    const now = new Date().getTime();
    const diff = end - now;

    if (diff <= 0) {
      el.innerHTML = "Completed";
      if (callback) callback();
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    el.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  update();
  setInterval(update, 1000);
}

// Spiral animation (simple placeholder)
document.addEventListener("DOMContentLoaded", () => {
  const spiral = document.querySelector(".hero-spiral");
  if (spiral) {
    spiral.style.width = "100px";
    spiral.style.height = "100px";
    spiral.style.border = "2px solid #FFD700";
    spiral.style.borderRadius = "50%";
    spiral.style.margin = "20px auto";
    spiral.style.animation = "spin 6s linear infinite";
  }
});

// Simple CSS animation injection
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

