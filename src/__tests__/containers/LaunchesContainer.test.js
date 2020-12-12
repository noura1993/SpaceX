import { render, screen } from "@testing-library/react";
import LaunchesContainer from "../../containers/LaunchesContainer";

jest.mock("../../components/Spin", () => () => (
  <div data-testid="spin-component" />
));
jest.mock("../../components/Launch", () => () => (
  <div data-testid="launch-component" />
));
jest.mock("../../containers/DataSelectionsContainer", () => () => (
  <div data-testid="data-selection-container" />
));

test("launches container still loading", () => {
  render(<LaunchesContainer loading={true} />);
  expect(screen.queryByTestId(/spin-component/)).toBeInTheDocument();
  expect(screen.queryByTestId(/launch-component/)).not.toBeInTheDocument();
  expect(
    screen.queryByTestId(/data-selection-container/)
  ).not.toBeInTheDocument();
});

test("launches container finished loading", () => {
  render(
    <LaunchesContainer loading={false} displayedLaunches={[{ id: 123 }]} />
  );
  expect(screen.queryByTestId(/spin-component/)).not.toBeInTheDocument();
  expect(screen.queryByTestId(/launch-component/)).toBeInTheDocument();
  expect(screen.queryByTestId(/data-selection-container/)).toBeInTheDocument();
});
