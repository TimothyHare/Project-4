//This Will Be Phrase.js

//Class with constructor that accepts a Phrase
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  };

  //Adds letter placeholder to display when game begins
addPhraseToDisplay(){
  //displays board for game
const keyBoard = document.getElementById("phrase");
// Variable for the letter of the phrases
const keyButtons = document.getElementById("qwerty");
// Array Iteration for the letters of the phrases
keyButtons.forEach(key => {
  // create list item
  const li = document.createElement("li");
  //if statement for key that belongs in a space
  if (key === " ") {
    li.className = "hide space";
  // else hide the key
}else{
  li.className =`hide letter ${key}`;
  li.textContent = key;
}
// Append list item to unordered list on the keyBoard
keyBoard.firstElementChild.appendChild(li);
});
}
//checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
checkLetter(event) {


}
showMatchedLetter(){

}
}
