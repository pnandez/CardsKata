class Cards{

  compare(card1:string, card2:string): string{
    if(Number(card1) > Number(card2)){
      return card1;
    } else return card2;  }
}

export default new Cards();