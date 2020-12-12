import { render } from "@testing-library/react";
import Reload from "../../../components/Reload";

test("reload has a button with img", () => {
  const { container } = render(<Reload />);
  const button = container.querySelector('button');
  const img = button.querySelector('img');

  expect(img.src).toContain('refresh@3x.png');
  expect(img.alt).toEqual('reload icon');
  expect(button.innerHTML).toContain('Reload Data');
});
