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
        },
        {
          id: 2,
          text: "buy some bread",
        },
      ],
    };
  }

  handlerDeleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  handlerEditTodo = (id, text) => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.text = text;
      return todo;
    });
    console.log(todos);
    this.setState({
      todos,
    });
  };

  handlerAddTodo = text => {
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
        <AddTodo onSubmit={this.handlerAddTodo} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.handlerDeleteTodo}
          getEditedTodo={this.handlerEditTodo}
        />
      </div>
    );
  }
}

export default App;
