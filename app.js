const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});s
s
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validation() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value
  let email = document.getElementById('email').value


  if (username == "kelompok7" && password == '1234' && email == "kelompok7@gmail.com"){
      window.location = "landpage.html";
      alert("Login Anda Sukses")
      return false
  }else{
      alert ('Login Anda Gagal')
      return false
  }
}



function validation() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value
  

  if (username == "kelompok7" && password == '1234'){
      window.location = "landpage.html";
      alert("Login Anda Sukses")
      return false
  }else{
      alert ('Login Anda Gagal')
      return false
  }
}
