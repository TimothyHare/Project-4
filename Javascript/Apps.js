//This Will Be Apps.js
// variable set to nothing now but will eventually initialize the new game object
var app;

//event listener for the start game button
$("#btn__reset").on("click", (event)=>{
  //variable is now initializing the new Game object
  var app = new Game;
  // call resetDisplay
  resetDisplay();
  // Start game button
  app.startGame();
});

//hide screen overlay
function resetDisplay(){
  $("#overlay").hide();
}

//markButton(): this function is called when a player selects a letter.
//It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton( ){
  $("#qwerty button").on("click", (event) => {
event.target.disabled = true;
app.handleInteraction(event.target.innerText)
});
}

//Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
$("#qwerty button").on("click", (event) => {
  if (event.target.tagName === "BUTTON"){
    markButton(event);

  }
});
