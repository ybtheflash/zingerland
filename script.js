document.addEventListener("DOMContentLoaded", function() {
    const stayTunedBtn = document.getElementById("stayTunedBtn");
    
    stayTunedBtn.addEventListener("click", function() {
      alert("Get ready for an epic gaming experience!");
    });
  
    const socialIcons = document.querySelectorAll(".social-icon");
  
    socialIcons.forEach(icon => {
      icon.addEventListener("mouseenter", function() {
        this.style.opacity = "1";
      });
  
      icon.addEventListener("mouseleave", function() {
        this.style.opacity = "0.7";
      });
    });
  
    const darkModeBtn = document.getElementById("darkModeBtn");
    const darkModeIcon = darkModeBtn.querySelector(".dark-mode-icon");
    const body = document.body;
  
    let darkMode = true; // Set default mode to dark mode
  
    toggleTheme(); // Apply the default theme
  
    darkModeBtn.addEventListener("click", function() {
      darkMode = !darkMode;
      body.classList.toggle("dark-mode");
      toggleTheme();
    });
  
    function toggleTheme() {
      if (darkMode) {
        body.style.backgroundColor = "#121212"; // Dark mode background color
        body.style.color = "#ffffff"; // Dark mode text color
        darkModeIcon.src = "partials/dark-mode.gif";
      } else {
        body.style.backgroundColor = "#ffffff"; // Light mode background color
        body.style.color = "#000000"; // Light mode text color
        darkModeIcon.src = "partials/light-mode.gif";
      }
    }
  });
  