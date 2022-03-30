import Cards from "./cards";

class Game{

  readonly cardsP1:string[] = [];
  readonly cardsP2:string[] = [];

  constructor(cards1:string[], cards2:string[]){
    this.cardsP1 = cards1;
    this.cardsP2 = cards2;
  }
}

export default Game;