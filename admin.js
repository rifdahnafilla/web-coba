const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
s
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validationadmin() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value
  let email = document.getElementById('email').value


  if (username == "admin" && password == '1234' && email == "admin@gmail.com"){
      window.location = "admin1.html";
      alert("Login Anda Sukses")
      return false
  }else{
      alert ('Login Anda Gagal')
      return false
  }
}



function validationadmin() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value
  

  if (username == "admin" && password == '1234'){
      window.location = "admin1.html";
      alert("Login Anda Sukses")
      return false
  }else{
      alert ('Login Anda Gagal')
      return false
  }
}
