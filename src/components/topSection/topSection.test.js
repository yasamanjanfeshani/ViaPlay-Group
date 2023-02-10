import React from "react";
import { render } from "@testing-library/react";
import Comparison from "../comparison";
import TopSection from "./index";

describe("TopSection", () => {
  test("renders comparison component when selected.length > 0", () => {
    const selected = [
      {
        duration: { milliseconds: 2590080, readable: "43 min" },
        flags: ["hd"],
        genres: ["Documentary"],
        guid: "20728255",
        parentalRating: "18",
        people: {
          directors: ["David Thies"],
          participants: ["Amber Heard", "Johnny Depp"],
        },
        production: {
          country: ["USA"],
          year: 2022,
        },
        path: "johnny-vs-amber-from-love-to-hate-2022",
        title: "Johnny vs Amber: From Love to Hate",
        type: "movie",
      },
      {
        duration: { milliseconds: 2590080, readable: "43 min" },
        flags: ["hd"],
        genres: ["Documentary"],
        guid: "20728256",
        parentalRating: "18",
        people: {
          directors: ["David Thies"],
          participants: ["Amber Heard", "Johnny Depp"],
        },
        production: {
          country: ["USA"],
          year: 2022,
        },
        path: "johnny-vs-amber-from-love-to-hate-2022",
        title: "Another Movie",
        type: "movie",
      },
    ];
    const resetSelectedMovies = jest.fn();
    const { getByTestId } = render(
      <TopSection
        selected={selected}
        resetSelectedMovies={resetSelectedMovies}
      />
    );
    expect(getByTestId("comparison-component"));
  });

  test("renders text when selected.length === 0", () => {
    const selected = [];
    const resetSelectedMovies = jest.fn();
    const { getByText } = render(
      <TopSection
        selected={selected}
        resetSelectedMovies={resetSelectedMovies}
      />
    );
    expect(
      getByText("Select two movies below to see their similarities")
    ).toBeInTheDocument();
  });
});
