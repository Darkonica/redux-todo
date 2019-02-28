import React, { Component } from "react";
import "./TodoItem.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

    this.state = {
      text: this.props.text,
      editToggle: false,
    };
  }

  handleChange = e => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  handleEdit = () => {
    this.setState(
      {
        editToggle: !this.state.editToggle,
      },
      () => this.state.editToggle && this.textInput.current.focus()
    );
  };

  handleEnterKey = e => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    this.setState(
      {
        editToggle: false,
      },
      () => this.textInput.current && this.textInput.current.blur(),
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
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
          onKeyDown={this.handleEnterKey}
          ref={this.textInput}
        />
      );
    } else {
      text = this.state.text;
    }

    return (
      <div className="todo__item">
        <div
          className={`todo__content ${this.props.done && "todo__content_done"}`}
          onClick={() => this.props.completeTodo(this.props.id)}
        >
          {text}
        </div>
        <div className="todo__controls">
          <div
            className="todo__control-item todo__control-item_edit"
            onClick={this.handleEdit}
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
