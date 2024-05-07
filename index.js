var typeData = new Typed(".role", {
    strings: [
      "Frontend Developer",
      "Web Developer",
      "UI-UX Designer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

var project = document.getElementsByClassName('nav-projects');
var skills = document.getElementsByClassName('nav-skills');
var contact = document.getElementsByClassName('nav-contact');

function toProject(){
  window.location.href = "https://lakshayahujaa.github.io/portfolio/#projects";
  console.log("button clicked");
}

project.onclick = toProject;

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  // Update button text based on theme
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (body.classList.contains('dark-theme')) {
      themeBtn.textContent = 'Light Mode';
  } else {
      themeBtn.textContent = 'Dark Mode';
  }
}

// Check for user's preferred theme on page load
window.onload = function() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const body = document.body;
  

  // Apply dark mode if user's preferred theme is dark
  if (prefersDarkMode) {
      body.classList.add('dark-theme');
      document.getElementById('theme-toggle-btn').textContent = 'Light Mode';
  }
};