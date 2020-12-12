import { render } from "@testing-library/react";
import Image from "../../components/Image";

test("img with alt", () => {
  const { container } = render(<Image />);
  const img = container.querySelector('img');
  expect(img.src).toContain('launch-home.png');
  expect(img.alt).toEqual('Rocket launch');
});
