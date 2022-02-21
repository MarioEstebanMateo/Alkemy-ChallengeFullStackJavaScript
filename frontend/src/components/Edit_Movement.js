import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const Edit_Movement = () => {
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const updateMovement = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:3050/update/${id}`,{
          concept: concept,
          amount: amount,
          date: date,
          type: type
      });
      navigate('/');
  }

  useEffect(() => {
      getMovementById();
  }, []);

  const getMovementById = async () => {
      const response = await axios.get(`http://localhost:3050/movements/${id}`);
      setConcept(response.data.price);
      setAmount(response.data.amount);
      setDate(response.data.date);
      setType(response.data.type);
  }

  return (
    <div className='container'>
    <h2>Edit Income/Expense</h2>
    <div className='input-group'>
      <form onSubmit={ updateMovement }>
        <div className="mt-3">
          <label className="form-label" for="concept">Concept</label>
          <input type="text" className="form-control" name="concept" value={ concept } onChange={ (e) => setConcept(e.target.value) } id="concept" placeholder='example: supermarket' required/>
        </div>
        <div className="mt-3">
          <label className="form-label" for="amount">Amount</label>
          <input type="text" className="form-control" name="amount"  value={ amount } onChange={ (e) => setAmount(e.target.value) } id="amount" placeholder='example: 10' required/>
        </div>
        <div className="mt-3">
          <label className="form-label" for="date">Date</label>
          <input type="date" className="form-control" name="date" value={ date } onChange={ (e) => setDate(e.target.value) } id="date" placeholder='Pick the date' required/>
        </div>
        <div className="mt-3">
              <label className="form-label" for="type">Type</label>
              <select name="type" className="form-select" id="type" value={ type } onChange={ (e) => setType(e.target.value) } required>
                <option selected>Open this menu to select</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary" onClick="">Submit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Edit_Movement