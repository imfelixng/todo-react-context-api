import React, { Component } from 'react';
import Todos from '../Todos/Todos';
import InputForm from '../InputForm/InputForm';
import TodoContext from './../../context/TodoContext';


class TodoProvider extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <TodoContext.Provider value = {
        {
          state: this.state,
          onAdd: (name) => {
            let new_todo = {
              id: new Date().getTime(),
              name,
              isCompleted: false
            }
            let new_list = this.state.list;
            new_list.push(new_todo);
            this.setState((preState) => ({
              list: new_list
            }))
          },
          onDelete: (id) => {
            let new_list = this.state.list.filter((todo) => {
              return todo.id !== id;
            });
            this.setState((preState) => ({
              list: new_list
            }))
          },
          onToggle: (id) => {
            let new_list = this.state.list;
            let index = new_list.findIndex((todo) => todo.id === id);
            new_list[index].isCompleted = !new_list[index].isCompleted;
            this.setState((preState) => ({
              list: new_list
            }));
          }
        }
      }>
        {this.props.children}
      </TodoContext.Provider>
    )
  }

}

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <div className="App">
          <InputForm />
          <Todos />
        </div>
      </TodoProvider>

    );
  }
}

export default App;
