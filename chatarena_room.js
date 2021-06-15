// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBnKnsWhKYGKm7Hue62qYVCTySXMdVqlXA",
    authDomain: "kwitter-33af5.firebaseapp.com",
    databaseURL: "https://kwitter-33af5-default-rtdb.firebaseio.com",
    projectId: "kwitter-33af5",
    storageBucket: "kwitter-33af5.appspot.com",
    messagingSenderId: "29793106555",
    appId: "1:29793106555:web:985a351cb2846554cb40de",
    measurementId: "G-LJCXBNW4LM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room name = " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"; 
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding a room"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chatarena_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room name", name);
  window.location("chatarena_page.html");
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}