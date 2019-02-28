import initialState from "./initialState";
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "../actions/actionTypes";

export default function todos(state = initialState.todos, action) {
  let newState;
  switch (action.type) {
    case ADD_TODO:
      console.log("ADD_TODO action");
      break;
    case EDIT_TODO:
      console.log("EDIT_TODO action");
      break;
    case DELETE_TODO:
      console.log("DELETE_TODO action");
      break;
    case COMPLETE_TODO:
      console.log("COMPLETE_TODO action");
      break;
    default:
      return state;
  }
}
