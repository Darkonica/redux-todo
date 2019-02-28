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
          text: "buy some milk",
          done: false,
        },
        {
          id: 2,
          text: "buy some bread",
          done: false,
        },
      ],
    };
  }

  handleDeleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  handleEditTodo = (id, text) => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.text = text;
      return todo;
    });

    this.setState({
      todos,
    });
  };

  handleComplete = id => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });

    this.setState({
      todos,
    });
  };

  handleAddTodo = text => {
    const id = this.state.todos.length
      ? this.state.todos[this.state.todos.length - 1].id + 1
      : 1;
    this.setState(prevState => ({
      todos: [...prevState.todos, { id, text }],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <AddTodo onSubmit={this.handleAddTodo} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.handleDeleteTodo}
          getEditedTodo={this.handleEditTodo}
          completeTodo={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
