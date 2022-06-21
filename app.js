// var countDownDate = new Date("May 20, 2022 22:03:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

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
  if (ev.target.tagName === 'li'){
    ev.target.classList.toggle('checked');
  }
}, false);

// creating new list item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === " ") {
    alert("Code: null");
  }else{
    document.getElementsByClassName("myList").appendChild(li);
  }
  document.getElementById("Input").value = "";

  var span = document.createElement("span");
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