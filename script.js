// const toggleBtn = document.getElementById("themeToggle");
// toggleBtn.addEventListener('click',() => {
//   document.body.classList.toggle('light-color');
//     document.body.classList.toggle('dark-color')
//     toggleBtn.textContent = 
//     document.body.classList.contains("dark-color") ? "🌙" : "🌞";
//     // document.body.classList.contains("dark-color") ? "🌞" : "🌙";
// }
//   )

// New area

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleContainer = document.querySelector(".toggleContainer");
  const slider = document.querySelector(".slider");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark-mode") {
    body.classList.add("dark-mode");
    slider.innerText = "🌜";
  } else {
    body.classList.remove("dark-mode");
    slider.innerText = "🌞";
  }

  toggleContainer.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      slider.innerText = "🌜";
      localStorage.setItem("theme", "dark-mode");
    } else {
      slider.innerText = "🌞";
      localStorage.setItem("theme", "light-mode");
    }
  });
});
