// Your web app's Firebase configuration
const firebaseConfig = {
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
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const db = firebase.firestore();
  const usersCollection = db.collection('user');

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      var user = firebase.auth().currentUser;
    }
    if (user != null) {
      localStorage.uid = user.uid;
      var email_id = user.email;
      usersCollection.doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          var data = doc.data()
          document.getElementById("user_Emri").innerHTML = "Emri:" + data.emri;
          document.getElementById("user_Mbiemri").innerHTML = "Mbiemri:" + data.mbiemri;
          document.getElementById("user_NrTel").innerHTML = "NrTel:" + data.nrtel;
          var his = data.his
          console.log(his.indexOf[1])
          
          
          function CardCreate() {
            for (i = 0; i < his.length; i++) {
              let cardId = i
              var div_card = document.createElement('div')
              div_card.classList.add('card')
              div_card.classList.add('text-dark')
              div_card.classList.add('bg-light')
              div_card.classList.add('mb-3')
              div_card.style.width = 'max-width: 18rem'
              document.getElementById('card').appendChild(div_card)
              var div_header = document.createElement('div')
              div_header.classList.add('card-header')
              div_header.innerHTML =i+" " +his[i].txtnameofrecp
              div_card.appendChild(div_header)
              var div_body = document.createElement('div')
              div_body.classList.add('card-body')
              div_card.appendChild(div_body)
              var h5_title = document.createElement('h5')
              h5_title.innerHTML = his[i].txtdecofrecp
              h5_title.classList.add('card-title')
              div_body.appendChild(h5_title)
              var btn_delete = document.createElement('button')
              btn_delete.classList.add('btn')
              btn_delete.classList.add('btn-info')
              btn_delete.style.background="#FF0000"
              btn_delete.innerHTML = 'Delete'
              btn_delete.addEventListener('click', function () {
                usersCollection.doc(user.uid).update({
                  his: firebase.firestore.FieldValue.arrayRemove(his[cardId])
                }).catch((error) => {
                  console.log(error);
                });  })
              div_body.appendChild(btn_delete)
            }
          }
          CardCreate()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id + " " + user.uid;
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });
  // create card
  var uid = localStorage.getItem("uid");
  function createRecp() {
    const txtnameofrecp = document.getElementById("nameofrecp").value;
    const txtdecofrecp = document.getElementById("decofrecp").value;
    let txtrecp = { txtnameofrecp, txtdecofrecp }
    console.log(txtrecp)
    usersCollection.doc(uid).update({
      his: firebase.firestore.FieldValue.arrayUnion(txtrecp)
    }).then(()=>{location.reload();
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
        his: [],
        user_id: res.user.uid
      }).then(user_profile => {
        console.log("new user...:", res)
        location.reload();
      })
    })
  }


  function login() {
      var userEmail = document.getElementById("logEmail").value;
      var userPass = document.getElementById("logPassword").value;
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
        // ...
      });
    }
    function logout() {
      firebase.auth().signOut();
      localStorage.clear();
      location.reload();
  alert('ss')
  }


