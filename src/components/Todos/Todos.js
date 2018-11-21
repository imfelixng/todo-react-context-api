import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem';
import TodoContext from '../../context/TodoContext';

export default class Todos extends Component {

  static contextType = TodoContext;

  renderItem = (todos) => {
    return todos.map((todo,index) => {
      return (
        <TodoItem key = {index} todo = {todo}/>
      )
    })
  }
  render() {
    return (
      <React.Fragment>
        <ul style = {{listStyle: "none"}}>
              {this.renderItem(this.context.state.list)}
        </ul>
      </React.Fragment>
    )
  }
}
