import Player from "./Player";

export default class Game{

  private readonly player1: Player;
  private readonly player2: Player;

  constructor(){
    this.player1 = new Player("1","2");
    this.player2 = new Player("3","4");
  }

  getPlayers():Player[] {
    return [this.player1,this.player2]
  }


}