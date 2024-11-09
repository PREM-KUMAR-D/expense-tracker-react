// Write your code here

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
    return (
        <Card className='expenses'>{
            props.expenses.map((expense)=>{
                return (
                    <ExpenseItem
                        id={expense.id}
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