import React, { Component } from "react";
import { connect } from "react-redux";
import * as todoActions from "./actions/todoActions";
import { setVisibilityFilter } from "./actions/filterActions";
import { VisibilityFilters } from "./actions/actionTypes";

import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoFilters from "./components/TodoFilters/TodoFilters";

import "./App.css";

class App extends Component {
  render() {
    let todos;
    if (this.props.visibilityFilter === VisibilityFilters.SHOW_IN_PROGRESS) {
      todos = this.props.todos.filter(todo => !todo.completed);
    } else if (
      this.props.visibilityFilter === VisibilityFilters.SHOW_COMPLETED
    ) {
      todos = this.props.todos.filter(todo => todo.completed);
    } else {
      todos = this.props.todos;
    }
    return (
      <div className="App">
        <h1>Todos</h1>
        <AddTodo onSubmit={this.props.addTodo} />
        <div className="content">
          <aside>
            <TodoFilters
              setVisibilityFilter={this.props.setVisibilityFilter}
              active={this.props.visibilityFilter}
            />
          </aside>
          <main>
            <Todos
              todos={todos}
              deleteTodo={this.props.deleteTodo}
              editTodo={this.props.editTodo}
              completeTodo={this.props.completeTodo}
            />
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => {
      dispatch(todoActions.addTodo(text));
    },
    editTodo: (id, text) => {
      dispatch(todoActions.editTodo(id, text));
    },
    deleteTodo: id => {
      dispatch(todoActions.deleteTodo(id));
    },
    completeTodo: id => {
      dispatch(todoActions.completeTodo(id));
    },
    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilter(filter));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
