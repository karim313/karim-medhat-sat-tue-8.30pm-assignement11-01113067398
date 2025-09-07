/*****************************************       Sign Up Page       *************************************************** */

var clientName = document.getElementById("clientName");
var clientEmail = document.getElementById("clientEmail");
var clientPassword = document.getElementById("clientPassword");
var sign_up_btn = document.getElementById("sign-up-btn");
var Required_Message = document.querySelector(".Required-Message");
var success_Message = document.querySelector(".success-Message");

var clients;
if (localStorage.getItem("clients") != null) {
  clients = JSON.parse(localStorage.getItem("clients"));
} else {
  clients = [];
}
if(sign_up_btn!=null){
  sign_up_btn.addEventListener("click", function (e) {
  e.preventDefault();
  addClient();
});
}

function addClient() {
  if (clientName.value == "" || clientEmail.value == "" || clientPassword.value == "") {
    Required_Message.innerText = "Please fill in all fields"; 
    Required_Message.classList.remove("d-none");
    Required_Message.classList.add("d-block");
  } 
  else if (!validation()) {
    Required_Message.classList.remove("d-none");
    Required_Message.classList.add("d-block");
  }
  else if (checkEmailExist(clientEmail.value)) {
    Required_Message.innerText = "Email already exists, please use a different email";
    Required_Message.classList.remove("d-none");
    Required_Message.classList.add("d-block");
  }
  else {
    var client = {
      client_name: clientName.value,
      client_email: clientEmail.value,
      client_password: clientPassword.value,
    };
    clients.push(client);
    localStorage.setItem("clients", JSON.stringify(clients));
    clearData();
    Required_Message.classList.add("d-none");
    success_Message.classList.remove("d-none");
    success_Message.classList.add("d-block");
  
    return clients;
  }
}

function checkEmailExist(newEmail) {
  let found = clients.findIndex(c => c.client_email === newEmail);
  return found !== -1;  // true لو لقى، false لو مش لقى
}

function clearData() {
  clientName.value = "";
  clientEmail.value = "";
  clientPassword.value = "";
}

function validation(){
    // CORRECT regex literals (single backslashes)
    var regexName = /^[A-Za-z]{3,8}(\s*?[A-Za-z]{2,8})?$/; // e.g. Kareem
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var regexPassword = /(\w){8,}$/;

  if (!regexName.test(clientName.value)) {
    Required_Message.innerText = "Invalid input, please enter a valid name";
  }
  else if (!regexEmail.test(clientEmail.value)) {
    Required_Message.innerText = "Invalid input, please enter a valid email";
  }
  else if (!regexPassword.test(clientPassword.value)) {
    Required_Message.innerText = "Invalid input, password must be at least 8 characters";
  }
    return regexPassword.test(clientPassword.value)&& regexEmail.test(clientEmail.value) && regexPassword.test(clientPassword.value);
  }


