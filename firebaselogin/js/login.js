// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAH49xU3lEqLgW-4_S4683CM8gL05GafBc",
  authDomain: "login-test-8d171.firebaseapp.com",
  projectId: "login-test-8d171",
  storageBucket: "login-test-8d171.appspot.com",
  messagingSenderId: "686391204335",
  appId: "1:686391204335:web:b6b6e08df8e5012bc07e1a",
  measurementId: "G-BW8EEMJ6GX"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const usersCollection = db.collection('user');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById('loggedOutContent').style.display = 'none'
    document.getElementById('loggedInContent').style.display = 'block'
    document.getElementById('LoginBtn__').innerHTML = 'Profile'
    document.getElementById('Login-nav').dataset.for = '_js_basic-popup'
    document.getElementById('Signup-nav').style.display = 'none'
    var user = firebase.auth().currentUser;
  }
  if (user != null) {

    localStorage.uid = user.uid;
    var email_id = user.email;
    var cardId = 0
    
    usersCollection.doc(user.uid).get().then((doc) => {
      if (doc.exists) {

        var data = doc.data()
        console.log(data)
        document.getElementById("profile_emri").innerHTML =  data.emri +"  "+ data.mbiemri; 
        document.getElementById("profile_email").innerHTML =  data.email;
        document.getElementById("profile_number").innerHTML = data.nrtel;
        var his = data.his
        console.log(his.indexOf[1])
        console.log(his)
        showCard()

        function showCard() {
          for (i = 0; i < his.length; i++) {
            let cardinfo = his[i]
            let col33 = document.createElement('div')
            col33.classList = 'col-33'
            // alert('a')
            let card = document.createElement('div')
            let face1 = document.createElement('div')
            let face1content = document.createElement('div')
            let icon = document.createElement('div')
            let closeBtn = document.createElement('button')
            let cardTitle = document.createElement('h1')
            let face2 = document.createElement('div')
            let face2content = document.createElement('div')
            let dateP = document.createElement('p')
            let trajtimiP = document.createElement('p')
            let in_ = document.createElement('div')
            let out = document.createElement('div')
            // let closebtn1 = document.createElement('div')
            // let closebtn2 = document.createElement('div')
            // let closebtn3 = document.createElement('div')
            // let closebtn4 = document.createElement('div')
            card.classList = 'card'
            card.id = cardId
            face1.classList = 'face face1'
            face1content.classList = 'content'
            icon.classList = 'icon'
            closeBtn.classList = 'closeButton'
            face2.classList = 'face face2'
            face2content.classList = 'content'
            cardTitle.innerHTML = cardinfo.diagnoza
            dateP.innerHTML = cardinfo.data
            trajtimiP.innerHTML = cardinfo.trajtimi
            in_.classList = 'in'
            out.classList = 'out'
            icon.appendChild(closeBtn)
            closeBtn.appendChild(in_)
            closeBtn.appendChild(out)
            // in_.appendChild(closebtn1)
            // in_.appendChild(closebtn2)
            // out.appendChild(closebtn3)
            // out.appendChild(closebtn4)
            icon.appendChild(cardTitle)
            face1content.appendChild(icon)
            face1.appendChild(face1content)
            face2content.appendChild(dateP)
            face2content.appendChild(trajtimiP)
            face2.appendChild(face2content)
            card.appendChild(face1)
            card.appendChild(face2)
            col33.appendChild(card)
            document.getElementById('loggedInContent').appendChild(col33)
            closeBtn.addEventListener('click', function () {
              let cardI = i
              // console.log('bllablla')
              usersCollection.doc(user.uid).update({
                his: firebase.firestore.FieldValue.arrayRemove(his[cardI])

              }).then(() => {
                location.reload();
              }).catch((error) => {
                console.log(error);
              });
            })
            div_body.appendChild(btn_delete)



            cardId++
          }

        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }


  else {
    document.getElementById('loggedOutContent').style.display = 'block'
    document.getElementById('loggedInContent').style.display = 'none'
    document.getElementById('LoginBtn__').innerHTML = 'Log In'
    document.getElementById('Signup-nav').style.display = 'flex'
    document.getElementById('Login-nav').dataset.for = 'js_basic-popup'
  }
})



var uid = localStorage.getItem("uid");

function createCard() {
  const diagnoza = document.getElementById("diagnoza1").value;
  const trajtimi = document.getElementById("trajtimi1").value;
  const data = document.getElementById('data1').value

  let txtrecp = { diagnoza, trajtimi, data }


  // alert(diagnoza)
  usersCollection.doc(uid).update({
    his: firebase.firestore.FieldValue.arrayUnion(txtrecp)
  }).then(() => {
    location.reload();
  })

}
//Get Elements
const txtEmri = document.getElementById("txtEmri");
const txtMbiemri = document.getElementById("txtMbiemri");
const txtNrtel = document.getElementById("txtNrtel");
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");


//Add Signup Event
function signup() {

  //get email and password

  const emri = txtEmri.value;
  const mbiemri = txtMbiemri.value;
  const nrtel = txtNrtel.value;
  const email = txtEmail.value;
  const password = txtPassword.value;



  const auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email, password).then(res => {

    console.log(auth)
    const ID = usersCollection.doc(res.user.uid).set({
      emri: emri,
      mbiemri: mbiemri,
      nrtel: Number(nrtel),
      email:email,
      his: [],

      user_id: res.user.uid
    }).then(user_profile => {
      console.log("new user...:", res)
      location.reload();
    })
  })

}

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(loggedUser => {
    
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    loggedIn = true
    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout() {
  firebase.auth().signOut();

  localStorage.clear();
  location.reload();
}





function showCard_(card_) {
  let col33 = document.createElement('div')
  col33.classList = 'col-33'

  // alert('a')
  let card = document.createElement('div')
  let face1 = document.createElement('div')
  let face1content = document.createElement('div')
  let icon = document.createElement('div')
  let closeBtn = document.createElement('button')
  let cardTitle = document.createElement('h1')
  let face2 = document.createElement('div')
  let face2content = document.createElement('div')
  let dateP = document.createElement('p')
  let trajtimiP = document.createElement('p')
  let in_ = document.createElement('div')
  let out = document.createElement('div')
  let closebtn1 = document.createElement('div')
  let closebtn2 = document.createElement('div')
  let closebtn3 = document.createElement('div')
  let closebtn4 = document.createElement('div')
  card.classList = 'card'
  card.id = cardId
  face1.classList = 'face face1'
  face1content.classList = 'content'
  icon.classList = 'icon'
  closeBtn.classList = 'closeButton'
  face2.classList = 'face face2'
  face2content.classList = 'content'
  cardTitle.innerHTML = 'Covid-19'
  dateP.innerHTML = 'Data: 01/01/2021'
  trajtimiP.innerHTML = 'Trajtimi: zoti lasht shnosh'
  in_.classList = 'in'
  out.classList = 'out'
  icon.appendChild(closeBtn)
  closeBtn.appendChild(in_)
  closeBtn.appendChild(out)
  in_.appendChild(closebtn1)
  in_.appendChild(closebtn2)
  out.appendChild(closebtn3)
  out.appendChild(closebtn4)
  icon.appendChild(cardTitle)
  face1content.appendChild(icon)
  face1.appendChild(face1content)
  face2content.appendChild(dateP)
  face2content.appendChild(trajtimiP)
  face2.appendChild(face2content)
  card.appendChild(face1)
  card.appendChild(face2)
  col33.appendChild(card)
  document.getElementById('loggedInContent').appendChild(col33)
  closeBtn.onclick = deleteCard(cardId)


}


function deleteCard(cardId) {

}