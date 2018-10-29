import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem';
import TodoContext from '../../context/TodoContext';

export default class Todos extends Component {

  renderItem = (todos) => {
    return todos.map((todo,index) => {
      return (
        <TodoItem key = {index} todo = {todo}/>
      )
    })
  }
  render() {
    return (
      <TodoContext.Consumer>
        {
          (context) => (
            <ul style = {{listStyle: "none"}}>
              {this.renderItem(context.state.list)}
            </ul>
          )
        }
      </TodoContext.Consumer>
    )
  }
}
