import React, { Component } from 'react'
import TodoContext from '../../context/TodoContext';

export default class TodoItem extends Component {
  render() {
    return (
      <TodoContext.Consumer>
          {
              (context) => (
                <li>
                <span  
                    style = {{textDecoration: this.props.todo.isCompleted ? "line-through" : "none", cursor: "pointer"}}
                    onClick = {() => context.onToggle(this.props.todo.id)}
                >
                    {this.props.todo.name}
                </span>
                <button style = {{marginLeft: 10}} onClick = {() => context.onDelete(this.props.todo.id)}>X</button>
                </li>
              )
          }
      </TodoContext.Consumer>
    )
  }
}
