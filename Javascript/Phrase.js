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
const keyButtons = [...this.phrase];
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
  //get letter from clicking
  let letter;
  if (event.type === "click") {
    letter = event.target.textContext;
  }

  // variable for phrase letters
  const keyButtons = [...this.phrase]
  // Credit: https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array
        let occurence = keyButtons.reduce((occurence, key, i) =>{
          // if correct letter is chosen, select correct letter, and return it to occurence
          if (key === letter) {
            occurence.push(i);
          }
          return occurence;
        }, []);


}
// matches the selected letter to the letter in the phrase
showMatchedLetter(event){

}
}
