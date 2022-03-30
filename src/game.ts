import cards from "./cards";

class Game{

  readonly cardsP1:string[] = [];
  private _pointsP1:number = 0;
  readonly cardsP2:string[] = [];
  private _pointsP2:number = 0;

  constructor(cards1:string[], cards2:string[]){
    this.cardsP1 = cards1;
    this.cardsP2 = cards2;
  }

  play():string {
    if(this.cardsP1.length!=2 || this.cardsP2.length != 2)
      throw new Error("One of the decks is uncomplete")
    for (let i =0; i < 2 ; i++){
      let result:string = cards.compare(this.cardsP1[i], this.cardsP2[i]);
      if(result === this.cardsP1[i])
        this._pointsP1 +=1;
      if(result === this.cardsP2[i])
        this._pointsP2 +=1;
    }
    if(this._pointsP1 > this._pointsP2)
      return "Player 1"
    if(this._pointsP1 < this._pointsP2)
      return "Player 2"
    return "Draw"
  }
}

export default Game;