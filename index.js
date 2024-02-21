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