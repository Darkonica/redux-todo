import React, { Component } from "react";
import "./TodoItem.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      editToggle: false,
    };
  }

  handlerChange = e => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  handlerEdit = e => {
    this.setState({
      editToggle: !this.state.editToggle,
    });
  };

  handlerSubmit = e => {
    this.setState(
      {
        editToggle: false,
      },
      () => this.props.editTodo(this.props.id, this.state.text)
    );
  };

  render() {
    let text;
    if (this.state.editToggle) {
      text = (
        <input
          type="text"
          className="todo__edit-input"
          value={this.state.text}
          onChange={this.handlerChange}
          onBlur={this.handlerSubmit}
        />
      );
    } else {
      text = this.state.text;
    }

    return (
      <div className="todo__item">
        <div className="todo__content">{text}</div>
        <div className="todo__controls">
          <div
            className="todo__control-item todo__control-item_edit"
            onClick={this.handlerEdit}
          >
            edit
          </div>
          <div
            className="todo__control-item todo__control-item_delete"
            onClick={() => this.props.deleteTodo(this.props.id)}
          >
            del
          </div>
        </div>
      </div>
    );
  }
}
