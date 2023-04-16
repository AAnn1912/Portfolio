const user = "admin123";
const pass = "admin123";

//Sign in

document.querySelector(".btn-sign-in").onclick = function () {
  let userValue = document.querySelector(".user").value;
  let passValue = document.querySelector(".pass").value;
  if (userValue === user && passValue === pass) {
    window.location.href = "../Home.html";
  } else {
    alert("User hoặc Password không đúng");
  }
};
