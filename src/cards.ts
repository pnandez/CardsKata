import { isNumberLiteral } from "@babel/types";
import { cachedDataVersionTag } from "v8";


const valuesForLetters: {[key:string]:string} = {
  "J":"11",
  "Q":"12",
  "K":"13"
}
class Cards{
  compare(card1:string, card2:string): string{
    if(card1.length > 1 || card2.length > 1){
      throw new TypeError("length of cards greater than 1");
    }
    let originalCard1:string = card1;
    let originalCard2:string = card2;
    if(valuesForLetters.hasOwnProperty(card1)){
      card1 = valuesForLetters[card1];
    }
    if(valuesForLetters.hasOwnProperty(card2)){
      card2 = valuesForLetters[card2];
    }
    if(isNaN(Number(card1)) || isNaN(Number(card2))){
      throw new TypeError("One of the cards is not correct");
    }
    if(Number(card1) > Number(card2)){
      return originalCard1;
    } else return originalCard2;  
  
  }

}

export default new Cards();