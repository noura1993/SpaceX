import { render } from "@testing-library/react";
import Sort from "../../../components/Sort";
import { Simulate } from "react-dom/test-utils";

test("sort launches", () => {
  const { container } = render(<Sort sortText={"Descending"} />);
  const button = container.querySelector("button");
  const img = button.querySelector("img");

  expect(img.src).toContain("sort@3x.png");
  expect(img.alt).toEqual("sort icon");
  expect(button.innerHTML).toContain("Sort Descending");
});

test("sort has onClick", () => {
  const testFunction = jest.fn();
  const { container } = render(<Sort handleSortClick={testFunction} />);
  const button = container.querySelector("button");
  Simulate.click(button);
  expect(testFunction).toBeCalledTimes(1);
});
