import { isNumberLiteral } from "@babel/types";
import { cachedDataVersionTag } from "v8";

class Cards{

  compare(card1:string, card2:string): string{
    if(card1.match("J")){
      card1 = "11";
    }
    if(card1.match("Q")){
      card1 = "12";
    }
    if(card1.match("K")){
      card1 = "13";
    }
    if(card2.match("J")){
      card2 = "11";
    }
    if(card2.match("Q")){
      card2 = "12";
    }
    if(card2.match("K")){
      card2 = "13";
    }
    if(Number(card1) > Number(card2)){
      return card1;
    } else return card2;  
  
  }

}

export default new Cards();