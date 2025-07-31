const toggle = document.getElementById("darkModeToggle");

  function updateIcon() {
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateIcon();
  });

  window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
    updateIcon();
  });