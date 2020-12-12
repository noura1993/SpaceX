import { render } from "@testing-library/react";
import Logo from "../../components/Logo";

test("logo has img & title", () => {
  const { container } = render(<Logo />);
  const img = container.querySelector('img');
  const logoText = container.querySelector('span');

  expect(img.src).toContain('spacex-logo.png');
  expect(img.alt).toEqual('spacex logo');
  expect(logoText.innerHTML).toEqual('LAUNCHES');
});
