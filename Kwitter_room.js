label = localStorage.getItem("user_name", username);
document.getElementById("username").innerHTML = label;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAMtRmQESUkGWgFLyorUWViaVzrKRDl_O4",
  authDomain: "project-94-7aade.firebaseapp.com",
  databaseURL: "https://project-94-7aade-default-rtdb.firebaseio.com",
  projectId: "project-94-7aade",
  storageBucket: "project-94-7aade.appspot.com",
  messagingSenderId: "966999185519",
  appId: "1:966999185519:web:f1d476461d59df50d3d59a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_room() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "addroom"
  });
  
  localStorage.setItem("room_name", room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      function redirecttoroomname(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
      }
      function log_out(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
      }
      //End code
      });});}
getData();