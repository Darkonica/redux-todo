import React, { Component } from "react";
import "./AddTodo.css";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handlerChange = e => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  handlerSubmit = e => {
    e.preventDefault();
    if (this.state.text) {
      const text = this.state.text;
      this.setState({
        text: "",
      });
      this.props.onSubmit(text);
    }
  };

  render() {
    return (
      <div className="addtodo">
        <form onSubmit={this.handlerSubmit} className="addtodo__form">
          <input
            type="text"
            placeholder="buy fruits"
            className="addtodo__input"
            value={this.state.text}
            onChange={this.handlerChange}
          />
          <button type="submit" className="addtodo__button">
            Add
          </button>
        </form>
      </div>
    );
  }
}
