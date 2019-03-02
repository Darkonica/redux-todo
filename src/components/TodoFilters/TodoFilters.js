import React, { Component } from "react";
import { VisibilityFilters } from "../../actions/actionTypes";
import "./TodoFilters.css";

export default class TodoFilters extends Component {
  render() {
    return (
      <div className="todo-filters">
        <ul>
          <li
            className={
              VisibilityFilters.SHOW_ALL === this.props.active ? "active" : null
            }
            onClick={() =>
              this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL)
            }
          >
            All
          </li>
          <li
            className={
              VisibilityFilters.SHOW_IN_PROGRESS === this.props.active
                ? "active"
                : null
            }
            onClick={() =>
              this.props.setVisibilityFilter(VisibilityFilters.SHOW_IN_PROGRESS)
            }
          >
            In progress
          </li>
          <li
            className={
              VisibilityFilters.SHOW_COMPLETED === this.props.active
                ? "active"
                : null
            }
            onClick={() =>
              this.props.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)
            }
          >
            Completed
          </li>
        </ul>
      </div>
    );
  }
}
