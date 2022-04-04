import Card from "./cards";

class Player{

  private readonly cartas:Card[] = [];

  constructor(cardName1:string, cardName2:string){
    if(cardName1.length != 1 || cardName2.length != 1){
      throw new Error("Length of card not accepted");
    }
    this.cartas.push(new Card(cardName1), new Card(cardName2));
  }

  getCards():Card[]{
    return this.cartas;
  }

  getFirstCard():Card{
    return this.cartas[0];
  }

  getSecondCard(){
    
  }

  
}

export default Player;