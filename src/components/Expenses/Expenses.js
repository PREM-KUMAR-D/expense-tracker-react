import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear,setFilteredYear]= useState("2023");

  const changeFilterHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter ={changeFilterHandler} />
      {props.expenses
      .filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
      })
      .map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
