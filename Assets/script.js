// --------------------DEPENDENCIES--------------------
var schedulerBlockClass = document.getElementsByClassName(
  "scheduler-block-class"
);
var schedulerBlockID1 = document.getElementById("scheduler-block-1");
var userTextInput0100 = document.getElementById("user-text-input-0100");
var lockInButton = document.getElementById("lock-in-button");
var clearButton = document.getElementById("clear-button");
var currentTime = moment().format("HH");
// console.log(currentTime);
var timeContainer = document.getElementById("time-container");
// console.log(timeContainer);
var pElTime = $("div.time-container-class").text();
// console.log(pElTime);

var eventsArray = [];
// --------------------FUNCTIONS--------------------

// TO DO: after a refresh the computer needs to go back to local storage to reset data. This is not working
var unclearedLocalStorage = localStorage.getItem("userInput");
var userTextInput0100Value = document.getElementById(
  "user-text-input-0100"
).value;
console.log(unclearedLocalStorage);
console.log(userTextInput0100Value);

// change color of boxes depending on time (past=grey, present=red, future=green)
function changeColor() {
  if (currentTime === pElTime) {
    $("#user-text-input-0100").addClass("present");
  } // currently not in use for PM
  if (currentTime > pElTime) {
    $("#user-text-input-0100").addClass("past");
  } else {
    $("#user-text-input-0100").addClass("future");
  }
}
changeColor();

// store user text input to local storage
function storeUserInput() {
  var userTextInput0100Value = document.getElementById(
    "user-text-input-0100"
  ).value;
  var userInputVariable = localStorage.setItem(
    "userInput",
    userTextInput0100Value
  );
  console.log("hello " + userTextInput0100Value);

  // TO DO: add text content in place of placeholder text, or on screen.
  localStorage.getItem(userTextInput0100Value);
  document.getElementById("user-text-input-0100").textContent =
    userTextInput0100Value;
  console.log(userTextInput0100Value);
}
// This is another storing of user input to local storage but attempting an array.

// TO DO: create for loop to get user inputs and replace in scheduler
function renderEvents() {
  for (var i = 0; i < 24; i++) {
    var event = eventsArray[i];
  }
}
// TO DO: find approach that is less clunky if possible, this will require repasting attributes. This hides the input space. This is a potential solution that may create future issues
//   //   $(userTextInput0100).hide();
//   //   document.getElementById("get-and-place-user-item").innerHTML =
//   //     retrieveUserInput;
// }
// getUserInput();

function clearEntry() {
  localStorage.clear("userInput");
  console.log("clear button click registered");
  //need to clear contents and reset ability to allow user to input
}
// --------------------DESIGN --------------------

// --------------------USER INTERACTIONS--------------------
// when user clicks lock-in button they store their text input.
lockInButton.addEventListener("click", storeUserInput);
// when user clicks button they clear local storage and trigger cleaEntry function
clearButton.addEventListener("click", clearEntry);
// bonus. when user clicks drop down they are presented with options to clear text content in user input field
