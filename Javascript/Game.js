//This Will Be Game.js

class Game {
  constructor(){
    // number of missed chances
    this.missed = 0;
    // array of phrases the game will be using
    this.phrases =  [
    "Tales from The Crypt ",
    "American Horror Story",
    "Haunting of Hill House",
    "Are You Afraid of the Dark",
    "Happy Halloween"
    ];
    // phrase object that's currently in play
    this.phrase = this.createPhrase();
  }

// cretaes phrases for use in game
  createPhrase() {
    //generates random phrase for player to guess
    const phraseGenerator = this.getRandomPhrase();
    // returns generated random phrase
      return new Phrase(phraseGenerator);
      console.log(phraseGenerator)
  }

  getRandomPhrase() {
    //selects random phrase from phrases property
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];

  }

  handleInteraction(event){
    

  }

//This methods removes a heart from the board, it removes a life, and will end the game when the player is out of lives.
  removeLife() {
    this.missed += 1;
    $(".tries").eq([this.missed]).remove();
  }

  //this methods checks to see if the correct letters are chosen.
  checkForWin() {

  }

  // method shows a message if the game is won or lost
  gameOver() {
    //Variable that target the message at the end of the game
    const endMess = $("#game-over-message")
    //variable that targets the overlay
    const overlay = $("#overlay")

    if (this.missed < 5) {
      endMess.text("Victory Is Yours");
      overlay.show();
    } else if (this.missed === 5) {
      endMess.text("Better Luck Next Time, Champ");
      overlay.show().addClass("lose")
      }


    }

    startGame() {
      //Adds random phrase to display
      this.phrase.addPhraseToDisplay();
    }
  }
