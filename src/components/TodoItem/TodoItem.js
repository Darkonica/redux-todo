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

  handlerChange = e => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  handlerEdit = e => {
    // this.state.editToggle
    //   ? this.textInput.current.focus()
    //   : this.textInput.current.blur();
    this.setState(
      {
        editToggle: !this.state.editToggle,
      },
      () => this.state.editToggle && this.textInput.current.focus()
    );
  };

  handlerEnterKey = e => {
    if (e.keyCode === 13) {
      this.handlerSubmit();
    }
  };

  handlerSubmit = () => {
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
          onChange={this.handlerChange}
          onBlur={this.handlerSubmit}
          onKeyDown={this.handlerEnterKey}
          ref={this.textInput}
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
