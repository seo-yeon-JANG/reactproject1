import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) =>{
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }; 
        props.onAddExpense(expenseDate);
    }

    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
    </div>
    );
};
export default NewExpense;