import React, { Component } from "react";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          content: "buy some milk",
        },
        {
          id: 2,
          content: "buy some bread",
        },
      ],
    };
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  handlerAddTodo = content => {
    const id = this.state.todos.length
      ? this.state.todos[this.state.todos.length - 1].id + 1
      : 1;
    this.setState(prevState => ({
      todos: [...prevState.todos, { id, content }],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <AddTodo onSubmit={this.handlerAddTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
