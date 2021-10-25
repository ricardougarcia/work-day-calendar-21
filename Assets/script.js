// --------------------DEPENDENCIES--------------------
var schedulerBlockClass = document.getElementsByClassName(
  "scheduler-block-class"
);
var schedulerBlockID1 = document.getElementById("scheduler-block-1");
var userTextInput0100 = document.getElementById("0100");
var userTextInput0200 = document.getElementById("0200");
var userTextInput0300 = document.getElementById("0300");
var userTextInput0400 = document.getElementById("0400");
var userTextInput0500 = document.getElementById("0500");
var userTextInput0600 = document.getElementById("0600");
var userTextInput0700 = document.getElementById("0700");
var userTextInput0800 = document.getElementById("0800");
var userTextInput0900 = document.getElementById("0900");
var userTextInput1000 = document.getElementById("1000");
var userTextInput1100 = document.getElementById("1100");
var userTextInput1200 = document.getElementById("1200");
var userTextInput1300 = document.getElementById("1300");
var userTextInput1400 = document.getElementById("1400");
var userTextInput1500 = document.getElementById("1500");
var userTextInput1600 = document.getElementById("1600");
var userTextInput1700 = document.getElementById("1700");
var userTextInput1800 = document.getElementById("1800");
var userTextInput1900 = document.getElementById("1900");
var userTextInput2000 = document.getElementById("2000");
var userTextInput2100 = document.getElementById("2100");
var userTextInput2200 = document.getElementById("2200");
var userTextInput2300 = document.getElementById("2300");
var userTextInput2400 = document.getElementById("2400");
var lockInButton = document.getElementsByTagName("button");
var clearButton = document.getElementById("clear-button");
var currentTime = moment().format("HH");
// console.log(currentTime);
var timeContainer = document.getElementById("time-container");
// console.log(timeContainer);
var pElTime = $("div.time-container-class").text();
// console.log(pElTime);

// --------------------FUNCTIONS--------------------

// TO DO: after a refresh the computer needs to go back to local storage to reset data. This is not working
var unclearedLocalStorage = localStorage.getItem("userInput");
var userTextInput0100Value = document.getElementById("0100").value;
console.log(unclearedLocalStorage);
console.log(userTextInput0100Value);

// change color of boxes depending on time (past=grey, present=red, future=green)
function changeColor() {
  if (currentTime === pElTime) {
    $(".form-control").addClass("present");
  } // currently not in use for PM
  if (currentTime > pElTime) {
    $(".form-control").addClass("past");
  } else {
    $(".form-control").addClass("future");
  }
}
changeColor();

// store user text input to local storage
function storeUserInput(event) {
  console.log(event);
  var eventID = event.target.parentElement.previousElementSibling.id;
  var eventValue = event.target.parentElement.previousElementSibling.value;
  localStorage.setItem(eventID, eventValue);
  console.log(userTextInput0100Value);
}

// TO DO: create for loop to get user inputs and replace in scheduler
function renderEvents() {
  for (var i = 0; i < 24; i++) {
    var event = eventsArray[i];
  }
}

// --------------------DESIGN --------------------

// --------------------USER INTERACTIONS--------------------
// when user clicks lock-in button they will store their text input to local.
var btnEl = document.getElementsByClassName("btn");
console.log(btnEl[0]);
for (var i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", storeUserInput);
}

userTextInput0100.value = localStorage.getItem("0100");
userTextInput0200.value = localStorage.getItem("0200");
userTextInput0300.value = localStorage.getItem("0300");
userTextInput0400.value = localStorage.getItem("0400");
userTextInput0500.value = localStorage.getItem("0500");
userTextInput0600.value = localStorage.getItem("0600");
userTextInput0700.value = localStorage.getItem("0700");
userTextInput0800.value = localStorage.getItem("0800");
userTextInput0900.value = localStorage.getItem("0900");
userTextInput1000.value = localStorage.getItem("1000");
userTextInput1100.value = localStorage.getItem("1100");
userTextInput1200.value = localStorage.getItem("1200");
userTextInput1300.value = localStorage.getItem("1300");
userTextInput1400.value = localStorage.getItem("1400");
userTextInput1500.value = localStorage.getItem("1500");
userTextInput1600.value = localStorage.getItem("1600");
userTextInput1700.value = localStorage.getItem("1700");
userTextInput1800.value = localStorage.getItem("1800");
userTextInput1900.value = localStorage.getItem("1900");
userTextInput2000.value = localStorage.getItem("2000");
userTextInput2100.value = localStorage.getItem("2100");
userTextInput2200.value = localStorage.getItem("2200");
userTextInput2300.value = localStorage.getItem("2300");
userTextInput2400.value = localStorage.getItem("2400");
