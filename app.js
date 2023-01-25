// Date and Time
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


var x = setInterval(function(){
  const date = new Date();
  let hour = date.getHours();
  let hours = hour>12 ? hour%12 : hour;
  let hourss;
  let ampm = hour>=12 ? "pm" : "am";
  let minute = date.getMinutes();
  let minutee;
  
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

  let id = new Date().getTime();
  li.id = id;
  li.appendChild(t);

  addToLocalStorage(id,inputValue);

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

  //adding close button functionality
  var div;
  for (i = 0; i<close.length; i++) {
    close[i].onclick = function(){
      div = this.parentElement;
      id = this.parentElement.id;
      div.style.display="none";
      removeFromLocalStorage(id);
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

//to select the active element
let elem;
window.addEventListener("click", function(){
  elem = document.querySelector(".timer.active");
});
let startPauseBtn = document.querySelector(".startPauseBtn");
let interval;
let ogmins;

startPauseBtn.addEventListener("click", function(){
    
    let mins = elem.innerHTML.slice(0,2);

    if (elem.id === "twentyFiveMinutes"){
      ogmins = 25;
    }
    else {
      ogmins = 05;
    }

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
      interval = setInterval(startTimer ,1000);
      startPauseBtn.innerHTML = "Cancel";
    } 
    else {
      clearInterval(interval);
      startPauseBtn.innerHTML = "Start";
      if(ogmins === 5){
        elem.innerHTML = `0${ogmins}:00`;
      }
      else {
        elem.innerHTML = `${ogmins}:00`;
      }
    }
});

/*
=========================================================================================================================================================================
                                                                                 LOCAL STORAGE
=========================================================================================================================================================================
*/ 

//adding to local storage
function addToLocalStorage(id,value) {
  // id = id.toString();
  // console.log(id);
  localStorage.setItem(id, value);
}

//delete from local storage
function removeFromLocalStorage(id){
  localStorage.removeItem(id);
}




