import Card from "../src/cards";

describe("The kata Card should", () =>{
  test("win player with higher card", () =>{
    const carta1 = new Card();

    expect(carta1.play(['1'], ['2'])).toBe("Player 2 wins!");
    expect(carta1.play(['3'], ['2'])).toBe("Player 1 wins!");

  })

  test("throw exception when value is not in range", () => {
    expect(() => {
      const carta1:Card = new Card();
      carta1.play(['0'],['1']);
    }).toThrow("You must provide a valid card name between 1-9 or J,Q,K");

    expect(() => {
      const carta1: Card = new Card();
      carta1.play([], ['1']);
    }).toThrow("You must provide a valid card name between 1-9 or J,Q,K");
  })

  test("play with players that have two cards", () => {
    const carta1 = new Card();
    expect(carta1.play(['1','2'], ['2','3'])).toBe("Player 2 wins!");
    expect(carta1.play(['5', '4'], ['2', '3'])).toBe("Player 1 wins!");
    expect(carta1.play(['1', '2'], ['2', '1'])).toBe("It's a draw!");
  })

  test("play with players that have both same number of cards", () => {
    expect(() => {
      const carta1: Card = new Card();
      carta1.play(['2','3'], ['1']);
    }).toThrow("Both Players should have same number of cards");
  })

  test('play with players that have many cards', () => {
    const carta1 = new Card();
    expect(carta1.play(['1', '2', 'K'], ['2', '3', '9'])).toBe("Player 2 wins!");
    expect(carta1.play(['5', '4', '5', '4'], ['2', '3', '5', '4'])).toBe("Player 1 wins!");
    expect(carta1.play(['1', '2', 'J', 'Q', 'J'], ['2', '1', 'J', 'Q', 'J'])).toBe("It's a draw!");
  })

})