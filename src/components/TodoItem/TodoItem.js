import React, { Component } from 'react'
import TodoContext from '../../context/TodoContext';

export default class TodoItem extends Component {

  static contextType = TodoContext

  render() {
    return (
      <React.Fragment>
        <li>
                <span  
                    style = {{textDecoration: this.props.todo.isCompleted ? "line-through" : "none", cursor: "pointer"}}
                    onClick = {() => this.context.onToggle(this.props.todo.id)}
                >
                    {this.props.todo.name}
                </span>
                <button style = {{marginLeft: 10}} onClick = {() => this.context.onDelete(this.props.todo.id)}>X</button>
                </li>
      </React.Fragment>
    )
  }
}
