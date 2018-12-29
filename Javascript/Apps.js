//This Will Be Apps.js
//variable that will eventually call new Game
let app;

//event listener for the start game button
$("#btn__reset").on("click", (event)=>{
  //variable initializing the new Game object
  app = new Game;
  // call resetDisplay
  resetDisplay();
  // Start game button
  app.startGame();
});

//hide screen overlay
function resetDisplay(){
  $("#overlay").hide();
  $("#phrase li").remove();
}

//markButton(): this function is called when a player selects a letter.
//It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton( ){
  $("#qwerty button").on("click", (event) => {
event.target.disabled = true;
if (event.target.tagName === "BUTTON")
app.handleInteraction(event.target.innerHTML.toLowerCase());
});
}
 markButton();
