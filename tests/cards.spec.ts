import Card from "../src/cards";
import Game from "../src/Game";
import Player from "../src/Player";

describe("Card should", () =>{
  test("have its own value", () =>{
    const carta1 = new Card("1");

    expect(carta1.getValue()).toBe(1);

  })

  test("throw exception when value is not in range", () => {
    expect(() => {
      const carta1:Card = new Card("0");
    }).toThrow("You must provide a valid card name between 1-9 or J,Q,K")
  })
})

describe("Player should", () =>{
  test("be given two cards", () => {
    const player1:Player = new Player("1","3");
    expect(player1.getCards().length).toBe(2);
  })

  test("throw error when card names given are more than 1 character", ()=>{
    expect(()=> {
      const player:Player = new Player("11","2");
    }).toThrow("Length of card not accepted")
  })

  test("give first card when required", () =>{
    const player:Player = new Player("1","2");
    expect(player.getFirstCard().getValue()).toBe(1);
  })

  test("give second card when required", () =>{
    const player: Player = new Player("1", "2");
    expect(player.getSecondCard().getValue()).toBe(2)
  });
})

describe("Game should", () =>{
  it("create two players", () =>{
    const game = new Game();
    expect(game.getPlayers().length).toBe(2);
  })

  it("create two players with two cards each", () =>{
    const game = new Game();
    const players = game.getPlayers();
    expect(players[0].getCards().length).toBe(2);
    expect(players[1].getCards().length).toBe(2);
  });

  it("should assign randomly cards to players", () =>{
    const game1 = new Game();
    const players1 = game1.getPlayers();
    const game2 = new Game();
    const players2 = game2.getPlayers();

    expect(players1[0].getCards()).not.toEqual(players2[0].getCards());
    expect(players1[1].getCards()).not.toEqual(players2[1].getCards());
  });

  it("play 2 rounds and give a result for each round", () =>{
    const game = new Game();
    const players = game.getPlayers();
    
    expect(()=>{
      game.play();
      return game.getRoundsResults().length;
    }).toBe(2)
  });
})