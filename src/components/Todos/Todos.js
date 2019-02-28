import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./Todos.css";

export default function Todos(props) {
  let todoList;
  if (props.todos.length) {
    todoList = props.todos.map(item => {
      return (
        <TodoItem
          id={item.id}
          key={item.id}
          text={item.text}
          completed={item.completed}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
          completeTodo={props.completeTodo}
        />
      );
    });
  } else {
    todoList = <p>You have no todos yet</p>;
  }
  return <div className="todo">{todoList}</div>;
}
