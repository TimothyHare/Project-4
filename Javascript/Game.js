//This Will Be Game.js
const phrase = new Phrase();

class Game {
  constructor( missed, phrases){
    this.missed = missed;
    this.phrases = phrases;
  }

  getRandomPhrase() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase.toLowerCase().split("");
  }

  handleInteraction(letter){
    phrase.checkLetter(letter);
    $("#qwerty button").on("click", () => {
      phrase.showMatchedLetter(letter);
    })
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
    } else {
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
