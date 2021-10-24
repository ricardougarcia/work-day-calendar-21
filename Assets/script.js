// --------------------DEPENDENCIES--------------------
var schedulerBlockClass = document.getElementsByClassName(
  "scheduler-block-class"
);
var schedulerBlockID1 = document.getElementById("scheduler-block-1");
var userTextInput0100 = document.getElementById("user-text-input-0100");
var lockInButton = document.getElementById("lock-in-button");
var currentTime = moment().format("hh");
// console.log(currentTime); + "PM"

// --------------------FUNCTIONS--------------------
// change color of boxes depending on time (past=grey, present=red, future=green)
// $("placeholder-button").click(function(){
//     $("#user-text-input-0100").addClass("important blue");
//   });
function changeColor() {
  if (currentTime === "02") {
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
