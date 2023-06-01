

let admin=0;

function check_mail_user() {
    let User_mail = document.getElementById("mail");

    if (User_mail.value.indexOf('@') == -1 || User_mail.value.indexOf('.') == -1) {
        document.getElementById("mail").style.border = "1px solid #DC143C";
         var valid_mail= document.getElementById("valid-mail");
         valid_mail.classList.add("unverified");
         document.getElementById("valid-mail").innerHTML="E-mail unvalid!";
    }
    else {
        User_mail.style.border = "1px solid #7CFC00";
        var valid_mail= document.getElementById("valid-mail");
        valid_mail.classList.add("verified");
        valid_mail.classList.remove("unverified");
        document.getElementById("valid-mail").innerHTML="E-mail valide";
    }
   
    
    
}
function check_pass_user() {
    let User_pass = document.getElementById("password");
    if (User_pass.value.length < 8) {
        document.getElementById("password").style.border = "1px solid #DC143C";
       var valid_pass=document.getElementById("valid-pass");
       valid_pass.classList.add("unverified");
       document.getElementById("valid-pass").innerHTML="Unvalid Password!";
    }
    else {
        User_pass.style.border = "1px solid #7CFC00";
        var valid_pass=document.getElementById("valid-pass");
       valid_pass.classList.remove("unverified");
       valid_pass.classList.add("verified");
       document.getElementById("valid-pass").innerHTML="Valid Password!";
        
    }
}
function Validate_form() {
    let User_mail = document.getElementById("mail");
    let User_pass = document.getElementById("password");
  
    if (User_mail.value == "akramzaabi@gmail.com" && User_pass.value == "bizerteti12") {
      alert("successfully logged in!! Welcome");
      window.location.href="index.html";
      console.log("true");
      return true;
    } else {
      alert("Votre motpass et mail ne sont pas compatibles");
      return false;
    }
  }


  function redirectToHomePage() {
    if(Validate_form()){
    window.location.href ="index.html";
  }
}
  