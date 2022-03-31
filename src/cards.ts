
const cardValuesDictionary: {[key:string]:number} = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13}
class Card{
  private readonly name:string = ""
  private readonly value:number = 0;

  constructor(cardName:string){
    this.name =  cardName;
    this.value = cardValuesDictionary[cardName];
  }

  getValue():number{
    return this.value;
  }
}

export default Card;