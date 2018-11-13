//This Will Be Apps.js

const phrases = [
"Tales from The Crypt ",
"American Horror Story",
"Haunting of Hill House",
"Are You Afraid of the Dark",
"Happy Halloween"
];

const app = new Game (0, phrases);

//hide screen overlay
function resetDisplay(){
  $("#overlay").remove();
}

//markButton(): this function is called when a player selects a letter.
//It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton( ){
  $("#qwerty button").on("click", (event) => {
event.target.disabled = true;
event.target.classList.add("chosen");
});
}

//Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
$("#btn__reset").on("click", () => {
  resetDisplay();
  app.startGame();
});

//Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
window.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON"){
    markButton();
    app.handleInteraction(event);
  }
});
