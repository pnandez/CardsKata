import Card from "../src/cards";
import Player from "../src/Player";

describe("Card should", () =>{
  test("have its own value", () =>{
    let carta1 = new Card("1");

    expect(carta1.getValue()).toBe(1);

  })

  test("throw exception when value is not in range", () => {
    expect(() => {
      let carta1:Card = new Card("0");
    }).toThrow("You must provide a valid card name between 1-10 or J,Q,K")
  })
})

describe("Player should", () =>{
  test("be given two cards", () => {
    let player1:Player = new Player("1","3");
    expect(player1.getCards().length).toBe(2);
  })

  test("throw error when card names given are more than 1 character", ()=>{
    expect(()=> {
      let player:Player = new Player("11","2");
    }).toThrow("Length of card not accepted")
    
  })
})