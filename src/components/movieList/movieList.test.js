import React from "react";
import { render, cleanup } from "@testing-library/react";
import MovieList from "./index";

afterEach(cleanup);

const products = [
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

test("renders a list of movies", () => {
  const callBackMovieDetail = jest.fn();
  const { queryByText } = render(
    <MovieList
      callBackMovieDetail={callBackMovieDetail}
      products={products}
      selected={[]}
    />
  );

  products.forEach((product) => {
    expect(queryByText(product.title));
  });
});
