import { screen, render } from "@testing-library/react";
import DataSelectionsContainer from "../../containers/DataSelectionsContainer";

jest.mock("../../components/Filter", () => () => (
  <div data-testid="filter-component" />
));
jest.mock("../../components/Sort", () => () => (
  <div data-testid="sort-component" />
));

test("launches container still loading", () => {
  render(<DataSelectionsContainer />);
  expect(screen.queryByTestId(/filter-component/)).toBeInTheDocument();
  expect(screen.queryByTestId(/sort-component/)).toBeInTheDocument();
});
