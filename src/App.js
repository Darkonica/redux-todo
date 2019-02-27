import React, { Component } from "react";
import Todos from "./components/Todos";
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

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
