/*****************************************       Sign in Page       *************************************************** */
var clients;
if (localStorage.getItem("clients") != null) {
  clients = JSON.parse(localStorage.getItem("clients"));
} else {
  clients = [];
}

var loginEmail = document.getElementById("clientEmailLogin");
var loginPassword = document.getElementById("clientPasswordLogin");
var login_btn = document.querySelector(".btn-login"); 
var Required_Message = document.querySelector(".Required-Message"); 
var message_welcome = document.querySelector(".message-welcome h2");
var clientFound = false ;



if(login_btn!=null){
  login_btn.addEventListener("click",loginClient);
}
function clearDataSignIn() {
  loginEmail.value = "";
  loginPassword.value = "";
}
clearDataSignIn();

function loginClient(e) {
  e.preventDefault();
  
  if (loginEmail.value == "" || loginPassword.value == "") {
    Required_Message.innerText = "All inputs is required";
    Required_Message.classList.remove("d-none");
    Required_Message.classList.add("d-block");
  }
  else{
     
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].client_email == loginEmail.value && clients[i].client_password == loginPassword.value) {
        clientFound = true;
        localStorage.setItem("loggedClient", clients[i].client_name);
        break;
      }
      
    }
    if(clientFound){
      window.location.href = "homePage.html";
      message_welcome.innerText = "Welcome " + localStorage.getItem("loggedClient");
      clearDataSignIn();

    }
    else if(!clientFound){
      Required_Message.innerText = "Invalid email or password";
      Required_Message.classList.remove("d-none");
      Required_Message.classList.add("d-block");
    }
  }
}

