//This Will Be Phrase.js

//Class with constructor that accepts a Phrase

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  //Adds letter placeholder to display when game begins
  addPhraseToDisplay(){
const listOfPhrases = document.querySelector("#phrase ul");
const textOfPhrase = this.phrase;

textOfPhrase.forEach(phraseLetter => {
  const li = document.createElement("li");
  listOfPhrases.appendChild(li);
  li.setAttribute("class", "hide");
  li.textContent = phraseLetter;
  return phraseLetter !== " " ? li.className = "letter" :li.className = "space";
});
  }
//checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
checkLetter(letter){
  const start = 0;
  const move = $(".letter");
  for (let i = 0; i < move.length; i++){
    if (letter == move[i].textontent){
      move[i].classList.add("match");
      none += 1;
    }
  }
  if (start > 0){
    return true;
  }else{
    return false;
  }
}
showMatchedLetter(){
  document.querySelectorAll(".letter").forEach( letter =>{
    if (click.textContent === letter.textContent){
      letter.classList.add("show");
      letter.classList.remove("hide");
    }
  });
}
}
