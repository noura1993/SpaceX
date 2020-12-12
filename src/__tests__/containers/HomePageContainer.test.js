import { screen, render } from "@testing-library/react";
import HomePageContainer from "../../containers/HomePageContainer";

jest.mock("../../components/Reload", () => () => (
  <div data-testid="reload-component" />
));
jest.mock("../../components/Logo", () => () => (
  <div data-testid="logo-component" />
));
jest.mock("../../components/Image", () => () => (
  <div data-testid="image-component" />
));
jest.mock("../../containers/LaunchesContainer", () => () => (
  <div data-testid="launches-container" />
));

test("launches container still loading", () => {
  render(<HomePageContainer />);
  expect(screen.queryByTestId(/reload-component/)).toBeInTheDocument();
  expect(screen.queryByTestId(/logo-component/)).toBeInTheDocument();
  expect(screen.queryByTestId(/image-component/)).toBeInTheDocument();
  expect(screen.queryByTestId(/launches-container/)).toBeInTheDocument();
});
