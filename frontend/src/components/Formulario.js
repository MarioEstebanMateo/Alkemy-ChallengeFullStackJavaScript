import React, { Component } from 'react';
import axios from 'axios';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      concept: '',
      amount: '',
      date: '',
      type: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { concept, amount, date, type } = this.state;

    const movement = {
      concept,
      amount,
      date,
      type,
    };

    axios
      .post('http://localhost:3050/add', movement)
      .then(() => console.log('Movement Created'))
      .catch(err => {
        console.error(err);
      });
  };
 
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="mt-3">
            <label htmlFor="concept">Concept</label>
            <input type="text" name="concept" onChange={this.handleInputChange} id="concept" />
          </div>
          <div className="mt-3">
            <label htmlFor="amount">Amount</label>
            <input type="text" value={this.state.value} name="amount" onChange={this.handleInputChange} id="amount" />
          </div>
          <div className="mt-3">
            <label htmlFor="date">Date</label>
            <input type="date" value={this.state.value} name="date" onChange={this.handleInputChange} id="date" />
          </div>
          <div className="mt-3">
            <label htmlFor="type">Type</label>
            <input type="text" value={this.state.value} name="type" onChange={this.handleInputChange} id="type" />
          </div>
          <div className="mt-3">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
 
export default Formulario;