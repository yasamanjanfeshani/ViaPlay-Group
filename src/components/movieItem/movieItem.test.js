import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MovieItem from "./index";

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
];

const data = {
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
};

const callBackMovieDetail = jest.fn();

describe("MovieItem", () => {
  test("should trigger the callBackMovieDetail function when clicking on the card", () => {
    const { getByTitle } = render(
      <MovieItem
        data={data}
        callBackMovieDetail={callBackMovieDetail}
        selected={selected}
      />
    );

    const card = getByTitle(data.title);
    fireEvent.click(card);

    expect(callBackMovieDetail).toHaveBeenCalledWith(data);
  });
});
