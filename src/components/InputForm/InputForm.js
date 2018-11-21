import React, { Component } from 'react'
import TodoContext from './../../context/TodoContext';

export default class Search extends Component {
  state = {
    name: ''
  }

  static contextType = TodoContext;

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <React.Fragment>
          <form onSubmit = {
                  (e) => {
                    e.preventDefault();
                    if(this.state.name === '') {
                      alert('Name is not empty');
                      return;
                    }
                    this.context.onAdd(this.state.name);
                    this.setState({
                      name:''
                    })
                  }
                }>
                  <input placeholder= "Enter name todo" value = {this.state.name} onChange = {this.handleChange}/>
            </form>
      </React.Fragment>
    )
  }
}
