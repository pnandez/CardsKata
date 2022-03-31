import Card from "./cards";

class Player{

  private readonly cartas:Card[] = [];

  constructor(cardName1:string, cardName2:string){
    this.cartas.push(new Card(cardName1), new Card(cardName2));
  }

  getCards():Card[]{
    return this.cartas;
  }
}

export default Player;