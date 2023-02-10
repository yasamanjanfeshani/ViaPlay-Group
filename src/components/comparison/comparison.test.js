import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Comparison from "./index";
import useFinalSimilarMovies from "../../utils/useFinalSimilarMovies";

jest.mock("../../utils/useFinalSimilarMovies");

afterEach(cleanup);

describe("Comparison component", () => {
  test("renders comparison component with two selected movies", () => {
    const selected = [
      {
        duration: {
          milliseconds: 5145760,
          readable: "1 h 25 min",
        },
        flags: ["hd"],
        genres: ["Action", "Thriller"],
        guid: "20707788",
        imdb: {
          id: "tt11377298",
          rating: "5.8",
          votes: 1434,
        },
        parentalRating: "15",
        people: {
          actors: [
            "Dolph Lundgren",
            "Kevin Wayne",
            "Kim DeLonghi",
            "Scott Adkins",
            "Scott Hunter",
            "Vas Sanchez",
          ],
          directors: ["Dolph Lundgren"],
        },
        production: {
          country: ["USA"],
          year: 2021,
        },
        path: "castle-falls-2021",
        title: "Castle Falls",
        type: "movie",
      },
      {
        duration: {
          milliseconds: 5188960,
          readable: "1 h 26 min",
        },
        flags: ["hd"],
        genres: ["Rysare", "Thriller"],
        guid: "20692725",
        imdb: {
          id: "tt11804152",
          rating: "5.8",
          votes: 18958,
        },
        parentalRating: "15",
        people: {
          actors: [
            "Amil Ameen",
            "Aml Ameen",
            "Callan Mulvey",
            "Eoin Macken",
            "Jack Roth",
            "Keanu Snyders",
            "Lili Rich",
            "Megan Fox",
            "Stefanie Rozhko",
            "Teodora Djuric",
          ],
          directors: ["S.K. Dale"],
        },
        production: {
          country: ["USA"],
          year: 2021,
        },
        path: "till-death-2021",
        title: "Till Death",
        type: "movie",
      },
    ];

    useFinalSimilarMovies.mockReturnValue({
      year: 2021,
      parentalRating: "15",
      imdb: 5.8,
    });

    const { getByTestId } = render(<Comparison selected={selected} />);

    expect(getByTestId("comparison-component")).toBeInTheDocument();
    expect(getByTestId("selected-item-0")).toBeInTheDocument();
    expect(getByTestId("selected-item-1")).toBeInTheDocument();
    expect(getByTestId("result").textContent).toBe("Yes");
    expect(getByTestId("similarities-item")).toBeInTheDocument();
  });

  test("renders comparison component with only one selected movie", () => {
    const selected = [
      {
        duration: {
          milliseconds: 5058016,
          readable: "1 h 24 min",
        },
        flags: ["hd"],
        genres: ["Animation", "Familjefilm"],
        guid: "20450581",
        imdb: {
          id: "tt1615918",
          rating: "4.3",
          votes: 34667,
        },
        originalTitle: "Alvin & the Chipmunks: Chipwrecked",
        parentalRating: "U",
        people: {
          actors: ["Andy Buckley", "David Cross", "Jason Lee", "Jenny Slate"],
          directors: ["Mike Mitchell"],
        },
        production: {
          country: ["USA"],
          year: 2011,
        },
        path: "alvin-och-ganget-3-2011",
        title: "Alvin och gänget 3",
        type: "movie",
      },
    ];

    const { getByTestId } = render(<Comparison selected={selected} />);

    expect(getByTestId("comparison-component")).toBeInTheDocument();
    expect(getByTestId("selected-item-0")).toBeInTheDocument();
  });

  test("renders comparison component with two different movies", () => {
    const selected = [
      {
        duration: {
          milliseconds: 5058016,
          readable: "1 h 24 min",
        },
        flags: ["hd"],
        genres: ["Animation", "Familjefilm"],
        guid: "20450581",
        imdb: {
          id: "tt1615918",
          rating: "4.3",
          votes: 34667,
        },
        originalTitle: "Alvin & the Chipmunks: Chipwrecked",
        parentalRating: "U",
        people: {
          actors: ["Andy Buckley", "David Cross", "Jason Lee", "Jenny Slate"],
          directors: ["Mike Mitchell"],
        },
        production: {
          country: ["USA"],
          year: 2011,
        },
        path: "alvin-och-ganget-3-2011",
        title: "Alvin och gänget 3",
        type: "movie",
      },
      {
        duration: {
          milliseconds: 5115168,
          readable: "1 h 25 min",
        },
        flags: ["hd"],
        genres: ["Komedi", "Romantik"],
        guid: "10096340",
        imdb: {
          id: "tt0901476",
          rating: "5.4",
          votes: 106471,
        },
        parentalRating: "PG",
        people: {
          actors: [
            "Anne Hathaway",
            "Bruce Altman",
            "Bryan Greenberg",
            "Candice Bergen",
            "Casey Wilson",
            "Chris Pratt",
            "Hettienne Park",
            "John Pankow",
            "June Diane Raphael",
            "Kate Hudson",
            "Kelly Coffield Park",
            "Kristen Johnston",
            "Lauren Bittner",
            "Michael Arden",
            "Shannon Ferber",
            "Steve Howey",
            "Victor Slezak",
            "Zoe O'Grady",
          ],
          directors: ["Gary Winick"],
        },
        production: {
          country: ["USA"],
          year: 2009,
        },
        path: "bride-wars-2009",
        title: "Bride Wars",
        type: "movie",
      },
    ];

    useFinalSimilarMovies.mockReturnValue({});

    const { getByTestId } = render(<Comparison selected={selected} />);

    expect(getByTestId("comparison-component")).toBeInTheDocument();
    expect(getByTestId("selected-item-0")).toBeInTheDocument();
    expect(getByTestId("selected-item-1")).toBeInTheDocument();
    expect(getByTestId("result").textContent).toBe("No");
  });

  test("calls resetSelectedMovies when the clear selection button is clicked", () => {
    const mockResetSelectedMovies = jest.fn();
    const selected = [
      {
        duration: {
          milliseconds: 5145760,
          readable: "1 h 25 min",
        },
        flags: ["hd"],
        genres: ["Action", "Thriller"],
        guid: "20707788",
        imdb: {
          id: "tt11377298",
          rating: "5.8",
          votes: 1434,
        },
        parentalRating: "15",
        people: {
          actors: [
            "Dolph Lundgren",
            "Kevin Wayne",
            "Kim DeLonghi",
            "Scott Adkins",
            "Scott Hunter",
            "Vas Sanchez",
          ],
          directors: ["Dolph Lundgren"],
        },
        production: {
          country: ["USA"],
          year: 2021,
        },
        path: "castle-falls-2021",
        title: "Castle Falls",
        type: "movie",
      },
      {
        duration: {
          milliseconds: 5188960,
          readable: "1 h 26 min",
        },
        flags: ["hd"],
        genres: ["Rysare", "Thriller"],
        guid: "20692725",
        imdb: {
          id: "tt11804152",
          rating: "5.8",
          votes: 18958,
        },
        parentalRating: "15",
        people: {
          actors: [
            "Amil Ameen",
            "Aml Ameen",
            "Callan Mulvey",
            "Eoin Macken",
            "Jack Roth",
            "Keanu Snyders",
            "Lili Rich",
            "Megan Fox",
            "Stefanie Rozhko",
            "Teodora Djuric",
          ],
          directors: ["S.K. Dale"],
        },
        production: {
          country: ["USA"],
          year: 2021,
        },
        path: "till-death-2021",
        title: "Till Death",
        type: "movie",
      },
    ];
    const { getByText } = render(
      <Comparison
        selected={selected}
        resetSelectedMovies={mockResetSelectedMovies}
      />
    );
    const clearSelectionButton = getByText("Clear Selection");
    fireEvent.click(clearSelectionButton);
    expect(mockResetSelectedMovies).toHaveBeenCalled();
  });
});
