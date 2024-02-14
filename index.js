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
        Host : "smtp.elasticemail.com",
        Username : "lakshayahuja210703@gmail.com",
        Password : "D60B2CDE91A2654C01B143BB35664FEF7A2A",
        To : "lakshayahuja210703@gmail.com",
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name:" + document.getElementById("name").value
          +    "<br> Email: " + document.getElementById("email").value
          +    "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent Successfully")
    );
 }