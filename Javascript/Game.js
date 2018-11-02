//This Will Be Game.js
class Game {
  constructor(game, missed, phrases){
    this.game = game;
    this.missed = missed;
    this.phrases = phrases;
  }

  getRandomPhrase() {
    const randomPhrase = phrases(Math.random() * phrases.length);
    return randomPhrase.toLowerCase().split("");
  }

  handleInteraction()
}
