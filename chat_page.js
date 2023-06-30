const firebaseConfig = {
    apiKey: "AIzaSyDFhOvS8EFONtzvQisjMM4BmU4yKV6doZY",
    authDomain: "kwitter-ea12c.firebaseapp.com",
    databaseURL: "https://kwitter-ea12c-default-rtdb.firebaseio.com",
    projectId: "kwitter-ea12c",
    storageBucket: "kwitter-ea12c.appspot.com",
    messagingSenderId: "965946376078",
    appId: "1:965946376078:web:51355b7f51b424b1eceedf",
    measurementId: "G-Q5SF5MNBYW"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.databas().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });


    document.getElementById("msg").value = "";
}
