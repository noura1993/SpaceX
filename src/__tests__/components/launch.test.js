import { render } from "@testing-library/react";
import Launch from "../../components/Launch";
import { Simulate } from 'react-dom/test-utils';

test("launch data", () => {
  const { container } = render(
  <Launch 
  launch={{
    flightNumber: "101",
    missionName: "test mission",
    date: "24th Mar 2020",
    rocketName: "Best Rocket"
  }}
    />);
  
  expect(container.innerHTML).toEqual(
    "<div class=\"launch\">" + 
    "<div class=\"left-side\">" +
    "<span class=\"flight-number\">#101</span>" +
    "</div>" +
    "<div class=\"middle\">" +
    "<span class=\"mission-name\">test mission</span>" +
    "</div>" +
    "<div class=\"right-side\">" +
    "<div class=\"date\">24th Mar 2020</div>" +
    "<div class=\"rocket-name\">Best Rocket</div>" +
    "</div>" +
    "</div>");
});
