import * as types from "./actionTypes";

export function addTodo() {
  return {
    type: types.ADD_TODO,
  };
}

export function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    id,
    text,
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id,
  };
}

export function completeTodo(id) {
  return {
    type: types.COMPLETE_TODO,
    id,
  };
}
