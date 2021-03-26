function windowSize(){
  if(window.innerWidth<768 || window.innerHeight<600){
    let BurgerNav = document.querySelector('.burger-nav');
    let Menu = document.querySelector('.Menu');
    let Nav = document.querySelector('Nav');
    let list = document.getElementById('list-nav')
    let opacity = document.querySelector('opacity');
    let height = document.querySelector('.height');
    let White = document.querySelector('White');
    document.getElementById('demo-canvas').style.display = 'none'
    list.style.display = 'none '
    document.getElementById('Logo-Burger').appendChild(document.getElementById('list2'))
    Nav.classList = 'Nav'    
    BurgerNav.classList = 'burger-nav'
  
    BurgerNav.addEventListener("click", () => {
      Nav.classList.toggle("Menu");
      if (list.style.display === "none") {
        list.style.display = "flex";
        // document.getElementById('list1').appendChild(document.getElementById('list2'))
      } else {
        list.style.display = "none";
      }
      
    });
  }
  else{
    document.getElementById('demo-canvas').style.display = 'block'
    let Nav = document.querySelector('Nav');
    let list = document.getElementById('list-nav')
    let BurgerNav = document.querySelector('.burger-nav') ;
    list.style.display = 'flex'
    list.appendChild(document.getElementById('list2'))
    BurgerNav.addEventListener("click", () => {
      Nav.classList.toggle("Menu");
      console.log('a')  
      if (list.style.display === "none") {
        list.style.display = "flex";
        // document.getElementById('list1').appendChild(document.getElementById('list2'))
      } else {
        list.style.display = "none";
      }
      
    });
  }

}
window.addEventListener('load',function(){
  window.addEventListener('resize', windowSize)
  // canvas.height = document.getElementById('Homepage').scrollHeight;

})

window.onload = windowSize()

function myFunction (x) {
  x.classList.toggle("change");
}


                
                //   let SignupBtn = document.getElementById("Signup-login");
                //   let LoginBtn = document.getElementById("Login-Signup");



                //  // Get the modal
                //  var modal = document.querySelector('.LoginBox');

                //  // Get the button that opens the modal
                //  var btn = document.getElementById("Login-nav");

                //  // Get the <span> element that closes the modal
                //  var span = document.getElementById("exit-login");

                //  // When the user clicks the button, open the modal 
                //  btn.onclick = function() {
                //    modal.style.display = "block";
                //  };

                //  // When the user clicks on <span> (x), close the modal
                //  span.onclick = function() {
                //    modal.style.display = "none";
                //  };

                //  //buttoni qe te dergon tek Sign up
                //  SignupBtn.onclick = function() {
                //   modal.style.display = "none";
                //   modal1.style.display = "block";
                // };
                  
                //  // When the user clicks anywhere outside of the modal, close it
                //  window.onclick = function(event) {
                //    if (event.target == modal) {
                //      modal.style.display = "none";
                //    }
                //  };



                                  // Sign up
                                  // Sign up
                                  // Sign up
                                  // Sign up
                                  // Sign up
               
               
               
                  // // Get the modal
                  // var modal1 = document.querySelector('.SignupBox');

                  // // Get the button that opens the modal
                  // var btn1 = document.getElementById("Signup-nav");

                  // // Get the <span> element that closes the modal
                  // var span1 = document.getElementById("exit-Signup");



                  // // When the user clicks the button, open the modal 
                  // btn1.onclick = function() {
                  //   modal1.style.display = "block";
                  // };

                  // // When the user clicks on <span> (x), close the modal
                  // span1.onclick = function() {
                  //   modal1.style.display = "none";
                  // };

                  // //buttoni qe te dergon tek Login
                  // LoginBtn.onclick = function() {
                  //   modal1.style.display = "none";
                  //   modal.style.display = "block";
                  // };


                  // // When the user clicks anywhere outside of the modal, close it
                  // window.onclick = function(event) {
                  //   if (event.target == modal1) {
                  //     modal1.style.display = "none";
                  //   }
                  // };