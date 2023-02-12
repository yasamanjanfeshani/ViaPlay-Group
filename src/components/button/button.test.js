import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button component", () => {
  test("renders button with title", () => {
    const title = "Submit";
    const { getByText } = render(<Button title={title} />);

    const button = getByText(title);
    expect(button).toBeInTheDocument();
  });

  test("calls handleClick function on button click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button title="Submit" handleClick={handleClick} />
    );

    const button = getByText("Submit");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
