import React from "react";
import { render } from "@testing-library/react";
import SelectedItem from "./index";

test("renders selected item with title and image src", () => {
  const title = "Selected Title";
  const src = "https://via.placeholder.com/image.jpg";

  const { getByAltText } = render(<SelectedItem title={title} src={src} />);

  const imageElement = getByAltText(title);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", src);
});
