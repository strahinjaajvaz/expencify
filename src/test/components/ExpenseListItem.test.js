import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should redner ExpenseListItem with expenses", () => {
  const wrapper = shallow(
    <ExpenseListItem
      expense={{ description: "Water Bill", amount: 1200, createdAt: 0, id: 1 }}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
