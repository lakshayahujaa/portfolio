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
 function sendemail(){
    Email.send({
        SecureToken: "f4026ab7-c61c-42ee-b02d-de2adeec3dc9",
        To : 'lakshayahuja210703@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name:" + document.getElementById("name").value
          +    "<br> Email: " + document.getElementById("email").value
          +    "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent Successfully")
    );
 }