import { createStore } from "redux";

/*
    CREATE STORE 
    first argument to create store is state
    default value - if the value you pass is null or undefined, you can assign it a default value
    whenever we update the store, create store gets fired off 
    were not updating the old store, rather, were always creating a new instance of the old one with the 
    updated values

    REDUCER
    - create store is a reducer
    actions describethe fact that something happened, but they dont specity how the applications state changes in 
    response. this is the job of reducers.
    1. reducers are pure functions - the output is only determined by the input
    2. never change the state or action

    ACTIONS
    allow us to change the redux store
    objects that get sent to the store
    have to have a property called type
    they can have as many properties as long as they have the type property

    SUBSCRIBE
    this allows you to get notified whenever there has been a change on the store
    it takes as an argument a function
    if we ever want to unsubscribe, the subscribe function returns a function called unsubscribe
    we just call it when we want to and then it wont listen for changes anymore

    ACTION GENERATORS
    functions that return action objects
    the objects that were creating below are going to be created in one place 
*/

/**
 * so what happens is that if we pass in an object { incrementBy:4 } it will deconstruct the increment value and assign it to the
 * variable we created. if there isnt an object passed, then we assign it a default value of an empty object. now that the object is
 * empty, when we go to deconstruct it, it wont have the incrementBy property so then we assign it the default value of 1
 */
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

// reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + action.incrementBy
      };
    }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 4 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 123 }));