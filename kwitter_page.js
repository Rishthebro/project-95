//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAQYCtEFAmpLq4XL7FEOY66HNIaTq3TrPw",
      authDomain: "social-website-640c1.firebaseapp.com",
      databaseURL: "https://social-website-640c1-default-rtdb.firebaseio.com",
      projectId: "social-website-640c1",
      storageBucket: "social-website-640c1.appspot.com",
      messagingSenderId: "656683494230",
      appId: "1:656683494230:web:54796594b209e47d7f44f7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value ;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0

          });
          document.getElementById("msg").value = "" ;
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html" ;
  }

//End code
      } });  }); }
getData();
