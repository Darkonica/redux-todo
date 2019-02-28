import React, { Component } from "react";
import { connect } from "react-redux";
import * as todoActions from "./actions/todoActions";

import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     todos: [
  //       {
  //         id: 1,
  //         text: "buy some milk",
  //         done: false,
  //       },
  //       {
  //         id: 2,
  //         text: "buy some bread",
  //         done: false,
  //       },
  //     ],
  //   };
  // }

  // handleDeleteTodo = id => {
  //   const todos = this.state.todos.filter(todo => todo.id !== id);
  //   this.setState({ todos });
  // };

  // handleEditTodo = (id, text) => {
  //   let todos = this.state.todos.map(todo => {
  //     if (todo.id === id) todo.text = text;
  //     return todo;
  //   });

  //   this.setState({
  //     todos,
  //   });
  // };

  // handleComplete = id => {
  //   let todos = this.state.todos.map(todo => {
  //     if (todo.id === id) todo.done = !todo.done;
  //     return todo;
  //   });

  //   this.setState({
  //     todos,
  //   });
  // };

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
          todos={this.props.todos}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          completeTodo={this.props.completeTodo}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editTodo: (id, text) => {
      dispatch(todoActions.editTodo(id, text));
    },
    deleteTodo: id => {
      dispatch(todoActions.deleteTodo(id));
    },
    completeTodo: id => {
      dispatch(todoActions.completeTodo(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
