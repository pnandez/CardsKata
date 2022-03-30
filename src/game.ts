import Cards from "./cards";
const cards:string[] = ["1","2","3","4","5","6","7","8","9","10","J","Q","K"];

class Game{

  readonly cardsP1:string[] = [];
  readonly cardsP2:string[] = [];

  constructor(){
    let cardsAmount = 0;
    while(cardsAmount < 4){
      this.cardsP1.push(cards[Math.random()*cards.length]);
      this.cardsP2.push(cards[Math.random()*cards.length]);
      cardsAmount = this.cardsP1.length + this.cardsP2.length;
    }
  }
}

export default Game;