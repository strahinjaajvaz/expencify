import moment from "moment";
import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set up default state", () => {
  const state = expenseReducer(undefined, { type: "@@INT" });
  expect(state).toEqual([]);
});

test("should set up state", () => {
  const expense = {
    id: "4",
    description: "Gass Bill",
    note: "",
    amount: 1300,
    createdAt: 12345
  };
  const state = expenseReducer(expenses, { type: "ADD_EXPENSE", expense });
  expect(state).toEqual([...expenses, expense]);
});

test("should remove expence from state", () => {
  const state = expenseReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should exdit expense from state", () => {
  const amount = 120000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expenses if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1"
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
