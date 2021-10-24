// --------------------DEPENDENCIES--------------------
var schedulerBlockClass = document.getElementsByClassName(
  "scheduler-block-class"
);
var schedulerBlockID1 = document.getElementById("scheduler-block-1");
var userTextInput0100 = document.getElementById("user-text-input-0100");
var lockInButton = document.getElementById("lock-in-button");
var currentTime = moment().format("hh");
// console.log(currentTime); + "PM"
var timeContainer = document.getElementById("time-container");
// console.log(timeContainer);
var pElTime = $("div.time-container-class").text();
// console.log(pElTime);
var test = $("input.user-text-input-class").text();
console.log(test);

// --------------------FUNCTIONS--------------------
// change color of boxes depending on time (past=grey, present=red, future=green)
function changeColor() {
  if (currentTime === pElTime) {
    $("#user-text-input-0100").addClass("present");
  }
}
changeColor();

// store user text input to local storage
// retrieve user input from local storage and display on screen
// when user click button store user text input
// bonus. when user clicks drop down they are presented with options to clear text content in user input field
// --------------------DESIGN --------------------
//
// --------------------USER INTERACTIONS--------------------
// when user clicks lock-in button they store their text input.
// bonus. when user clicks drop down they are presented with options to clear text content in user input field
