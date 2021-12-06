
const firebaseConfig = {
    apiKey: "AIzaSyB4eChtCij9NR9x3S-r4Ui9b0BgKmHnTTs",
    authDomain: "whiteboard-ce1db.firebaseapp.com",
    databaseURL: "https://whiteboard-ce1db-default-rtdb.firebaseio.com",
    projectId: "whiteboard-ce1db",
    storageBucket: "whiteboard-ce1db.appspot.com",
    messagingSenderId: "870354780829",
    appId: "1:870354780829:web:3106800316c78838d40a74"
  };
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

document.getElementById("take2").innerHTML="Welcome_"+user_name+"!"

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
 
    ctx = canvas.getContext("2d");
    
    color = "black";
 
    width_of_line = 1;
  

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
      

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
     
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

var last_position_of_touch_x, last_position_of_touch_y;
var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
    if(width < 992)
    {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart");
  
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width").value;

         
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x; 
    last_position_of_touch_y = current_position_of_touch_y;
   
}

//Additional Activity
document.getElementById("done").onclick=function(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
document.getElementById("done3").onclick=function(){
    window.location="chat.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }

 