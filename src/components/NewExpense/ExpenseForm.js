import React, { useState } from "react";
import "./ExpenseForm.css";



const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: amount,
      date: new Date(date),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setAmount('');
    setDate('');

  };


  
  


  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            id="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={()=>{props.onCancel()}}>Cancel</button>
        
      </div>
    </form>
  );
};

export default ExpenseForm;
