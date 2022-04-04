import Player from "./Player";


const cardsPossibilities = ["1","2","3","4","5","6","7","8","9","J","Q","K"]

export default class Game{

  private readonly player1: Player;
  private readonly player2: Player;

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

  getRoundsResults(): String[] {
    throw new Error("Method not implemented.");
  }

  play() {
    throw new Error("Method not implemented.");
  }


}