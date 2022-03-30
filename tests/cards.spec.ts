import cards from "../src/cards";

describe("Cards should", () =>{
  test("return value for cards given", () =>{
    expect(cards.play(6)).toBe(6);
  })
})