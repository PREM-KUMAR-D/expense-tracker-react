import React, { useState } from "react";
import "./ExpenseForm.css";



const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [amount, setAmount] = useState(0);
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
    setAmount(0);
    setDate('');

  };



  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">{enteredTitle}</label>
          <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">{amount}</label>
          <input type="number" id="amount" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">{date}</label>
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
      </div>
    </form>
  );
};

export default ExpenseForm;
