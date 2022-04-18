
const cardValuesDictionary: {[key:string]:number} = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"J":10,"Q":11,"K":12}
class Card{
  private readonly name:string = ""
  private readonly value:number = 0;

  constructor(cardName:string){
    if(!cardValuesDictionary.hasOwnProperty(cardName)){
      throw new Error("You must provide a valid card name between 1-9 or J,Q,K")
    }
    this.name =  cardName;
    this.value = cardValuesDictionary[cardName];
  }

  getValue():number{
    return this.value;
  }
}

export default Card;