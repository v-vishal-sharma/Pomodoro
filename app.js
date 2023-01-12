// Date and Time
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();

var x = setInterval(function(){
  let hour = date.getHours();
  let hours = hour>12 ? hour%12 : hour;
  let ampm = hour>=12 ? "pm" : "am";
  let minute = date.getMinutes();
  
  let datee = date.getDate();
  var month = date.getMonth();
  month = months[month];
  let year = date.getFullYear();

  document.getElementById("dTime").innerHTML = hours + ":" + minute + ampm + ", " + datee + " " + month + " " + year;
},1000);


// create a close button and add it at the end of each li item
var myToDoList = document.getElementsByTagName("li");
var i;

for (i=0 ; i<myToDoList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close-btn";
  span.appendChild(txt);
  myToDoList[i].appendChild(span);
}

// close button functionality

var close = document.getElementsByClassName("close-btn");
var i;
for (i=0 ; i<close.length; i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// adding a checked sign

var list = document.querySelector('ul');

list.addEventListener('click', function(ev){
  if (ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false);

// creating new list item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("Code: null");
  }else{
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("Input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close-btn";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i<close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display="none";
    }
  }

}

//"Enter" adds the item to the list
const enterForm = document.querySelector(".inputForm");
enterForm.addEventListener("keydown" , function(e) {
  if(e.key == "Enter"){
    newElement();
  };

});

//Tab button active and inactive
const tabBtn = document.querySelectorAll(".tab-btn");
const btnContainer = document.querySelector(".btn-container");
const timers = document.querySelectorAll(".timer");

btnContainer.addEventListener("click", function(e){
  const id = e.target.dataset.id;
  

  if(id){
    tabBtn.forEach(function(btn){
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    timers.forEach(function(t){
      t.classList.remove("active");
    })
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//changing html of start/pause button
// let startPauseBtn = document.querySelector(".startPauseBtn");

// startPauseBtn.addEventListener("click", function(){
//   if(startPauseBtn.innerHTML === "Start"){
//     startPauseBtn.innerHTML = "Pause";
//   }else{
//     startPauseBtn.innerHTML = "Start";
//   }
// });

//starting timer

const elem = document.querySelector(".timer.active");
let startPauseBtn = document.querySelector(".startPauseBtn");
var interval;

startPauseBtn.addEventListener("click", function(){
    
    var mins = elem.innerHTML;
    var seconds = mins *60;
  
    function startTimer () {
      seconds --;
      if(seconds === 0){
        clearInterval(interval);
        startPauseBtn.innerHTML = "Start";
        elem.innerHTML = `${mins}:00`;
      }
      sec = seconds % 60;
      if (sec > 9){
          secs = seconds % 60;
      }else{
          secs = `0${seconds % 60}`
      }
      var min = Math.floor(seconds / 60);
      if (min > 9){
        var minss = Math.floor(seconds / 60);
      }
      else{
        var minss = `0${Math.floor(seconds / 60)}`
      }
      elem.innerHTML = `${minss}:${secs}`;
    }

    if (startPauseBtn.innerHTML === "Start"){
      console.log("OK");
      interval = setInterval(startTimer ,1000);
      startPauseBtn.innerHTML = "Cancel";
    } 
    else {
      clearInterval(interval);
      startPauseBtn.innerHTML = "Start";
      elem.innerHTML = `${mins}:00`;
    }
});

