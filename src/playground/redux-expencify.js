import { createStore, combineReducers } from "redux";
/*  combine reducers allows you to break up the store into multiple sections
    when you use combine reducers, it allows you to move the "state" from the store
    and into its own store

    when you dispatch an object, that object is returned by the store in the store.dispatch function

    spread operator
    allows you to spread an array and an object
    an array will be spread out into its elements where as an object will be spread out into its properties

    // timestamps
    these are positive or nagative integer values   
    January 1st 1970  (unix epoch) positive after, negative before

*/

import uuid from "uuid";

const demoState = {
  expenses: [
    {
      id: "asdf",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount,
    startDate: undefined,
    endDate: undefined
  }
};

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    note,
    description,
    amount,
    createdAt
  }
});

const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map(e => {
        if (e.id === action.id) {
          return { ...e, ...action.updates };
        }
        return e;
      });
    case "REMOVE_EXPENSE":
      return state.filter(e => action.id !== e.id);
    default:
      return state;
  }
};
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const setStartDate = (date = undefined) => ({
  type: "SET_START_DATE",
  date
});

const setEndDate = (date = undefined) => ({
  type: "SET_END_DATE",
  date
});

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return a.createdAt < b.createdAt ? 1 : -1;
        case "amount":
          return a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 1000, createdAt: -1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 350, createdAt: 1000 })
);

store.dispatch(sortByAmount());
//store.dispatch(setTextFilter("rent"));
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));
