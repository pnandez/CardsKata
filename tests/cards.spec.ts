import cards from "../src/cards";
import Game from "../src/game";


describe("Cards should", () =>{
  
  test("compare two numbered cards and return greatest", () =>{
    expect(cards.compare("2","3")).toBe("3");
  })

  test("compare two cards including J,Q,K and return greatest", () => {
    expect(cards.compare("3","Q")).toBe("Q")
  })

  test("check if inputs have just one character", () =>{
    expect(() =>{ cards.compare("AA","1");}).toThrow("length of cards greater than 1")
  })

  test("check cards given are 1-10 or J,Q,K", ()=>{
    expect(() => {cards.compare("A", "2")}).toThrow(TypeError)
    expect(() => {cards.compare("A", "A")}).toThrow(TypeError)  })
})

describe("Game should", () =>{
  
  test("give two cards to each player", () =>{
    let game = new Game();

    expect(game.cardsP1.length).toBe(2);
    expect(game.cardsP2.length).toBe(2);
  })
})