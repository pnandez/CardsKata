const cardValues = '123456789JQK';
class Card {
  private _counterP1 = 0;
  private _counterP2 = 0;
  
  play(player1:string[], player2:string[]): string {
    if (player1.length === 0 || player2.length === 0) throw new Error('You must provide a valid card name between 1-9 or J,Q,K')
    if (player1.length !==  player2.length) throw new Error('Both Players should have same number of cards')
    this._counterP1 = 0;
    this._counterP2 = 0;
    this.recursivePlay(player1, player2);
    if(this._counterP1 > this._counterP2) return 'Player 1 wins!';
    if (this._counterP1 < this._counterP2) return 'Player 2 wins!';
    return 'It\'s a draw!'
  }

  recursivePlay( player1: string[], player2: string[]): void {
    if (player1.length === 0 || player2.length === 0) return;
    if (!cardValues.includes(player1[0]) || !cardValues.includes(player2[0])) {
      throw new Error('You must provide a valid card name between 1-9 or J,Q,K');
    }
    if(cardValues.indexOf(player1[0]) > cardValues.indexOf(player2[0])) this._counterP1++;
    if (cardValues.indexOf(player1[0]) < cardValues.indexOf(player2[0])) this._counterP2++;
    player1.shift();
    player2.shift();
    this.recursivePlay(player1, player2);
  }
}

export default Card;