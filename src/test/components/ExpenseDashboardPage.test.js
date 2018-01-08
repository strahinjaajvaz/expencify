import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import toJson from "enzyme-to-json";

test("should render ExpenseDashboardPage compenent", () => {
  const wrapper = shallow(<ExpenseListItem />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
