import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should set up edit expense action object", () => {
  const action = editExpense("123abc", { note: "new note value" });
  expect(action).toEqual({
    id: "123abc",
    type: "EDIT_EXPENSE",
    updates: { note: "new note value" }
  });
});

test("should set up a default action object", () => {
  const defaultExpenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultExpenseData,
      id: expect.any(String)
    }
  });
});

test("should set add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
