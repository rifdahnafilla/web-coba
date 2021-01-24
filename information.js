const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

function validation() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
 
    if (username == "jasmine" && password == 'mine2'){
        window.location = "sukses.html";
        alert("Login Anda Sukses")
        return false
    }else{
        alert ('Login Anda Gagagl')
        return false
    }
}