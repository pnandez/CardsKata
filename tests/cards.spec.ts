import cards from "../src/cards";

describe("Cards should", () =>{
  
  test("compare two numbered cards and return greatest", () =>{
    expect(cards.compare("2","3")).toBe("3");

  })

  test("compare two cards including J,Q,K and return greatest", () => {
    expect(cards.compare("3","Q")).toBe("Q")
  })

  //Only accept comparison for one character strings

})