const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener('click',() => {
  document.body.classList.toggle('light-color');
    document.body.classList.toggle('dark-color')
    toggleBtn.textContent = 
    document.body.classList.contains("dark-color") ? "🌙" : "🌞";
  
}
  )

// New area



