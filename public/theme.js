document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
      darkIcon.style.display = "none";
      lightIcon.style.display = "block";
      toggleBtn.setAttribute("aria-label", "Change to light theme");
    } else {
      lightIcon.style.display = "none";
      darkIcon.style.display = "block";
      toggleBtn.setAttribute("aria-label", "Change to dark theme");
    }
  }

  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
