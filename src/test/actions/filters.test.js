import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("should set up the default text filter action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("should set up the text filter action object", () => {
  const action = setTextFilter("This is a test");
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "This is a test" });
});

test("should set up the sort by amount action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should set up the sort by date action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  });
});
