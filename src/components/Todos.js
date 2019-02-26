import React from "react";
import "./Todos.css";

export default function Todos(props) {
  // const todoList = props.todos.length ? : <p>You have no todos</p>
  let todoList;
  if (props.todos.length) {
    todoList = props.todos.map(item => {
      return (
        <div className="todo__item" key={item.id}>
          <div className="todo__content">{item.content}</div>
          <div className="todo__controls">
            <div className="todo__edit">edit</div>
            <div className="todo__delete">del</div>
          </div>
        </div>
      );
    });
  } else {
    todoList = <p>You have no todos yet</p>;
  }
  return <div className="todo">{todoList}</div>;
}
