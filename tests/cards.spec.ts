import Card from "../src/cards";
import cards from "../src/cards";

describe("Cards should", () =>{
  test("have its own value", () =>{
    let carta1 = new Card("1");

    expect(carta1.getValue()).toBe(1);

  })
})