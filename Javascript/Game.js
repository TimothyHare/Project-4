//This Will Be Game.js

class Game {
  constructor( missed, phrase){
    this.missed = missed;
    this.phrase =  new Phrase;
  }

  getRandomPhrase() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase.toLowerCase().split("");
  }

  handleInteraction(letter){
  if   (this.phrase.checkLetter(letter)){
      this.phrase.showMatchedLetter(letter);
      this.checkForWin();
    } else {
      this.removeLife();
    }
  }

//This methods removes a heart from the board, it removes a life, and will end the game when the player is out of lives.
  removeLife() {
    this.missed += 1;
    $(".tries").eq([this.missed]).remove();
  }

  //this methods checks to see if the correct letters are chosen.
  checkForWin() {
    if (this.missed === 5){
      return false;
    } else if (this.missed < 5) {
      return true;
    }
  }

  // method shows a message if the game is won or lost
  gameOver() {
    const endMess = $("#game-over-message")
    const overlay = $("#overlay")

    if (this.checkForWin() = true) {
      endMess.text("Victory Is Yours");
      overlay.show();
    } else {
      endMess.text("Better Luck Next Time, Champ");
      overlay.show().addClass("lose")
      }
    }

    startGame() {
      this.missed = 0;
      let gamePhrases = this.getRandomPhrase();
      new Phrase(gamePhrases).addPhraseToDisplay()
    }
  }
