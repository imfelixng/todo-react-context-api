import React, { Component } from 'react'
import TodoContext from './../../context/TodoContext';

export default class Search extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }


  render() {
    return (
      <React.Fragment>
          <TodoContext.Consumer>
            {
              (context) => (
                <form onSubmit = {
                  (e) => {
                    e.preventDefault();
                    if(this.state.name == '') {
                      alert('Name is not empty');
                      return;
                    }
                    context.onAdd(this.state.name);
                    this.setState({
                      name:''
                    })
                  }
                }>
                  <input placeholder= "Enter name todo" value = {this.state.name} onChange = {this.handleChange}/>
                </form>
              )
            }

          </TodoContext.Consumer>
      </React.Fragment>
    )
  }
}
