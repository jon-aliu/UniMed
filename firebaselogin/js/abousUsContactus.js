
// let loggedIn = false


function aboutUs(){
document.getElementById('aboutUs').style.display = 'block'
document.getElementById('loggedInContent').style.display = 'none'
document.getElementById('contactUs').style.display = 'none'
document.getElementById('loggedOutContent').style.display = 'none'

}

function contactUs(){
    document.getElementById('contactUs').style.display = 'block'
    document.getElementById('loggedInContent').style.display = 'none'
    document.getElementById('aboutUs').style.display = 'none'
    document.getElementById('loggedOutContent').style.display = 'none'
}

function homepage(){
  location.reload();

    // document.getElementById('aboutUs').style.display = 'none'
    // document.getElementById('contactUs').style.display = 'none'
    // checkLog()
}


// function checkLog(){
//   if (loggedIn == false) {
//     document.getElementById('loggedOutContent').style.display = 'block'
//     document.getElementById('loggedInContent').style.display = 'none'
//     document.getElementById('LoginBtn__').innerHTML = 'Log In'
//     document.getElementById('Signup-nav').style.display = 'flex'
//     document.getElementById('Login-nav').dataset.for = 'js_basic-popup'
//   }
//   else if(loggedIn == true){
//     document.getElementById('loggedOutContent').style.display = 'none'
//     document.getElementById('loggedInContent').style.display = 'block'
//     document.getElementById('LoginBtn__').innerHTML = 'Profile'
//     document.getElementById('Login-nav').dataset.for = '_js_basic-popup'
//     document.getElementById('Signup-nav').style.display = 'none'
//   }
// }
// function login(){
//   loggedIn = true
//   checkLog()
// }
// function logout(){
//   loggedIn = false
//   checkLog()
// }
// function Signup(){
  
// }

// window.onload = checkLog()
