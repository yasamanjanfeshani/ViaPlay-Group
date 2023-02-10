import React from "react";
import { render } from "@testing-library/react";
import SimilaritiesItem from "./index";

test("renders similarities list", () => {
  const similaritiesList = {
    year: 2020,
    parentalRating: "18",
    imdb: 5.8,
  };

  const { getByText } = render(
    <SimilaritiesItem similaritiesList={similaritiesList} />
  );

  Object.entries(similaritiesList).forEach(([key, value]) => {
    const element = getByText(`${key}: ${value}`);
    expect(element).toBeInTheDocument();
  });
});
