import React, { Component } from 'react';
import axios from 'axios';
import "../styles/Form.css";

class Form extends Component {
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
      <div className='container'>
        <h2>Add Income/Expense</h2>
        <div className='input-group'>
          <form onSubmit={this.handleSubmit}>
            <div className="mt-3">
              <label className="form-label" for="concept">Concept</label>
              <input type="text" className="form-control" name="concept" onChange={this.handleInputChange} id="concept" placeholder='example: supermarket' required/>
            </div>
            <div className="mt-3">
              <label className="form-label" for="amount">Amount</label>
              <input type="text" className="form-control" value={this.state.value} name="amount" onChange={this.handleInputChange} id="amount" placeholder='example: 10' required/>
            </div>
            <div className="mt-3">
              <label className="form-label" for="date">Date</label>
              <input type="date" className="form-control" value={this.state.value} name="date" onChange={this.handleInputChange} id="date" placeholder='Pick the date' required/>
            </div>
            <div className="mt-3">
              <label className="form-label" for="type">Type</label>
              <select name="type" className="form-select" id="type" value={this.state.value} onChange={this.handleInputChange} required>
                <option selected>Open this menu to select</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary" onClick={() => window.location.reload(false)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Form;