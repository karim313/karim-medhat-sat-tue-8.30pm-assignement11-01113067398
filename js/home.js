

var message_welcome = document.querySelector(".message-welcome h2");
var logo = document.querySelector(".logo");
var logoutBtn = document.querySelector(".log-out a");



// اطبع رسالة الترحيب بس لو فيه مستخدم مسجل دخول
var loggedClient = localStorage.getItem("loggedClient");
if (loggedClient) {
  message_welcome.innerHTML = "Welcome " + loggedClient;
}

// لو زرار اللوج آوت موجود
if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    logoutClient();
  });
}

// لو اللوجو موجود
if (logo) {
  logo.addEventListener("click", function (e) {
    e.preventDefault();
    logoutClient();
  });
}

function logoutClient() {
  localStorage.removeItem("loggedClient");
  window.location.href = "index.html";
}
