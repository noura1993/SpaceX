import { render } from "@testing-library/react";
import Filter from "../../../components/Filter";
import { Simulate } from 'react-dom/test-utils';

test("filter options", () => {
  const { container } = render(<Filter years={['2019', '2020']}/>);
  const select = container.querySelector("select");
  expect(select).toHaveStyle("background-image: select@3x.png");
  expect(select.innerHTML).toEqual(
      "<option disabled=\"\" selected=\"\">Filter By Year</option>" + 
      "<option value=\"Show all\">Show all</option>" + 
      "<option value=\"2019\">2019</option>" + 
      "<option value=\"2020\">2020</option>");
});

test("filter has onChange", () => {
    const testFunction = jest.fn();
    const { container } = render(<Filter years={['2019', '2020']} filterByYear={testFunction}/>);
    const button = container.querySelector("select");
    Simulate.change(button);
    expect(testFunction).toBeCalledTimes(1);
  });
