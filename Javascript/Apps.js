//This Will Be Apps.js
//variable that will eventually call new Game
let app;

//hide screen overlay
function resetDisplay(){
  $("#overlay").hide();
  $("#phrase li").remove();
}
//markButton for when player selects a letter
function markButton(event){
//  $("#qwerty button").on("click", (event) => {
event.target.disabled = true;
event.target.classList.add ("chosen")
// if (event.target.tagName === "BUTTON")
app.handleInteraction(event.target.innerHTML.toLowerCase());
}

//event listener for the start game button
$("#btn__reset").on("click", (event)=>{
  //variable initializing the new Game object
  app = new Game;
  // call resetDisplay
  resetDisplay();
  // Start game button
  app.startGame();
});



//markButton(): this function is called when a player selects a letter.
$("#qwerty button").on("click", (event) => {
  markButton(event);
});
