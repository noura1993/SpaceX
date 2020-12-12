import { render } from "@testing-library/react";
import Spin from "../../components/Spin";

test("img with alt", () => {
  const { container } = render(<Spin />);
  const img = container.querySelector('img');
  expect(img.src).toContain('loading.gif');
  expect(img.alt).toEqual('loading');
});
