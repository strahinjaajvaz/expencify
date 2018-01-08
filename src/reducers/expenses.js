const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
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
