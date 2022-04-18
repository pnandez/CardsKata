import Player from "./Player";


const cardsPossibilities = ["1","2","3","4","5","6","7","8","9","J","Q","K"]

export default class Game{

  private readonly player1: Player;
  private readonly player2: Player;
  private readonly roundsWinners: string[] = [];
  constructor(){
    this.player1 = new Player(cardsPossibilities[this.getRandomNumber()], cardsPossibilities[this.getRandomNumber()]);
    this.player2 = new Player(cardsPossibilities[this.getRandomNumber()], cardsPossibilities[this.getRandomNumber()]);
  }

  private getRandomNumber():number{
    return Math.floor(Math.random()*cardsPossibilities.length);
  }

  getPlayers():Player[] {
    return [this.player1,this.player2]
  }

  play(): string {
    this.roundsWinners.push(this.play1Round());
    this.roundsWinners.push(this.play2Round());
    const player1NumberOfVictories = this.roundsWinners.filter(x => x === "Player 1").length
    const player2NumberOfVictories = this.roundsWinners.filter(x => x === "Player 2").length;
    if(player1NumberOfVictories > player2NumberOfVictories)
      return "Result: Player 1 wins"
    if (player1NumberOfVictories < player2NumberOfVictories)
      return "Result: Player 2 wins"
    return "Result: Draw"
    }

  play1Round():string{
    if (this.player1.getFirstCard().getValue() > this.player2.getFirstCard().getValue())
      return "Player 1"
    if (this.player1.getFirstCard().getValue() < this.player2.getFirstCard().getValue())
      return"Player 2";
    return "Draw"
  }

  play2Round(): string {
    if (this.player1.getSecondCard().getValue() > this.player2.getSecondCard().getValue())
      return "Player 1"
    if (this.player1.getSecondCard().getValue() < this.player2.getSecondCard().getValue())
      return "Player 2";
    return "Draw"
  }


}