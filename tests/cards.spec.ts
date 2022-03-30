import cards from "../src/cards";

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
  })
})