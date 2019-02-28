import * as types from "./actionTypes";

export function addTodo() {
  return {
    type: types.ADD_TODO,
  };
}

export function editTodo() {
  return {
    type: types.EDIT_TODO,
  };
}

export function deleteTodo() {
  return {
    type: types.DELETE_TODO,
  };
}

export function completeTodo() {
  return {
    type: types.COMPLETE_TODO,
  };
}
