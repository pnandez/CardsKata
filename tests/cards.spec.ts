import Card from "../src/cards";
import cards from "../src/cards";

describe("Card should", () =>{
  test("have its own value", () =>{
    let carta1 = new Card("1");

    expect(carta1.getValue()).toBe(1);

  })

  test("throw exception when value is not in range", () => {
    expect(() => {
      let carta1 = new Card("0");
    }).toThrow("You must provide a valid card name between 1-10 or J,Q,K")
  })
})