import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("checking the default values of the filters reducer", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "this is a test"
  });
  expect(state.text).toBe("this is a test");
});

test("should set startDate filter", () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date: startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test("should set startDate filter", () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: endDate
  });
  expect(state.endDate).toEqual(endDate);
});
