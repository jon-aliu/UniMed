let LoginBtn = document.getElementById('Login-nav');
let LoginBtn1 = document.getElementById('Login-Signup');
let LoginModal = document.querySelector('.LoginBox');

let SignupBtn = document.getElementById('Signup-nav');
let SignupBtn1 = document.getElementById('Signup-login');
let SignupModal = document.querySelector('.SignupBox');

let Exit = document.getElementById('exit-login');
let Exit1 = document.getElementById('exit-signup');

let BurgerNav = document.querySelector('.burger-nav') 
let Menu = document.querySelector('.Menu')
let Nav = document.querySelector('Nav')
LoginBtn.addEventListener("click", () => {
  LoginModal.classList.remove("hidden")
}); 
LoginBtn1.addEventListener("click", () => {
  LoginModal.classList.remove("hidden")
  SignupModal.classList.add("hidden")
  
}); 

SignupBtn.addEventListener("click", () => {
  SignupModal.classList.remove("hidden")
}); 
SignupBtn1.addEventListener("click", () => {
  SignupModal.classList.remove("hidden")
  LoginModal.classList.add("hidden")
}); 


Exit.addEventListener("click", () => {
  LoginModal.classList.add("hidden")
}); 

Exit1.addEventListener("click", () => {
  SignupModal.classList.add("hidden")
}); 



function myFunction(x) {
  x.classList.toggle("change");
}

BurgerNav.addEventListener("click", () => {
  Nav.classList.toggle("Menu");
});