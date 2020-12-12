import { render } from "@testing-library/react";
import Reload from "../../../components/Reload";
import { Simulate } from 'react-dom/test-utils';

test("reload has a button with img", () => {
  const { container } = render(<Reload />);
  const button = container.querySelector("button");
  const img = button.querySelector("img");

  expect(img.src).toContain("refresh@3x.png");
  expect(img.alt).toEqual("reload icon");
  expect(button.innerHTML).toContain("Reload Data");
});

test("reload has onClick", () => {
    const testFunction = jest.fn();
    const { container } = render(<Reload reload={testFunction}/>);
    const button = container.querySelector("button");
    Simulate.click(button);
    expect(testFunction).toBeCalledTimes(1);
  });
