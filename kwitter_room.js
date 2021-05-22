username = localStorage.getItem("username");
document.getElementById("usernameDisplay").innerHTML = "Hi " + username;
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC3X2QsqzBpG61_YFFvTnJ5V1AQDKucXE0",
      authDomain: "kwitter-f6530.firebaseapp.com",
      projectId: "kwitter-f6530",
      storageBucket: "kwitter-f6530.appspot.com",
      messagingSenderId: "523270584276",
      appId: "1:523270584276:web:1304cbb55d88ccb9a44841"};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
