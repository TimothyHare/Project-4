//This Will Be Phrase.js
//I struggled with this greatly but johnny loufils helped me with everything

//Class with constructor that accepts a Phrase
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  };

  //Adds letter placeholder to display when game begins
addPhraseToDisplay(){
  //displays board for game
const keyBoard = document.querySelector("#phrase ul");
// Variable for the letter of the phrases
const keyButtons = this.phrase;
// Array Iteration for the letters of the phrases
keyButtons.forEach(key => {
  // create list item
  const li = document.createElement("li");
//append the list item to unordered list
keyBoard.appendChild(li);
//set class and hide attribute
li.setAttribute("class","hide");
li.textContent = key;
//if key isn't a blank space give it className letter
if(key !== " "){
  li.className = "letter";
} else {
  //if the above condition is not met then className hide space
  li.className = "hide space";
}
return key;
});
}
//checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
checkLetter(letter) {
  //variable for letter class that was created
const letters = $(".letter")
//variable the correct letter choice
let correctLetter = false;
//Letter Iteration
letters.each((i, value) => {
  //conditional to return check if the corect letter is true
  if ($(value).text() === letter){
    correctLetter = true;
  }
});
// return correctLetter as true or false
return correctLetter

}

// matches the selected letter to the letter in the phrase
showMatchedLetter(event) {
  // function to target each letter
$(".letter").each(function() {
  //if statement to match letters on board
  if ($(this).text() === letter) {
    //show letter on board
    $(this).addClass("show");
  }
});
}
}
