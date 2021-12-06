
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4eChtCij9NR9x3S-r4Ui9b0BgKmHnTTs",
    authDomain: "whiteboard-ce1db.firebaseapp.com",
    databaseURL: "https://whiteboard-ce1db-default-rtdb.firebaseio.com",
    projectId: "whiteboard-ce1db",
    storageBucket: "whiteboard-ce1db.appspot.com",
    messagingSenderId: "870354780829",
    appId: "1:870354780829:web:3106800316c78838d40a74"
  };
  

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

document.getElementById("next").onclick=function(){
  user_name=document.getElementById("user_name1").value;
  firebase.database().ref("/").child(user_name).update({
       purpose:"adding user"
  });
  localStorage.setItem("user_name",user_name);
  room_name=document.getElementById("room_name2").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
  });
  localStorage.setItem("room_name",room_name);
  window.location="whiteboard.html";
}
  