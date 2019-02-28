import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./Todos.css";

export default function Todos(props) {
  // const todoList = props.todos.length ? : <p>You have no todos</p>
  let todoList;
  if (props.todos.length) {
    todoList = props.todos.map(item => {
      return (
        <TodoItem
          id={item.id}
          key={item.id}
          text={item.text}
          deleteTodo={props.deleteTodo}
          editTodo={props.getEditedTodo}
        />
      );
    });
  } else {
    todoList = <p>You have no todos yet</p>;
  }
  return <div className="todo">{todoList}</div>;
}
