const firebaseConfig = {
  apiKey: "AIzaSyBshqpYPd7YzSzCGEHprJ09b80RRX5NhtA",
  authDomain: "projeto-de-conversar.firebaseapp.com",
  databaseURL: "https://projeto-de-conversar-default-rtdb.firebaseio.com",
  projectId: "projeto-de-conversar",
  storageBucket: "projeto-de-conversar.appspot.com",
  messagingSenderId: "612351816631",
  appId: "1:612351816631:web:0a8e119a6c4bfa7b7a2e32",
  measurementId: "G-5N6B6HQ7HV"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.get_item("user_name")

document.getElementById("user_name").innerHTML = "Bem vindo(a) ," + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).updte({
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "chat_page.html"
}

function getData () {
    firebase.database().ref("/").on('value' , function(snapshot) {document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childsnapshot)  { childKey = childsnapshot.key;
      room_names = childKey;
      console.log("nome da sala:" + room_names);
      row = "<div class = 'room_name' id="+room_names+"onclick='rediectToRoomName(this.id) ' >#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
});
});
}

get_data();


function rediectToRoomName (name) {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location = "index.html";
}