import { useState } from "react";
import Card from "../UI/Card.js";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

const  Expenses = (props) => {
    // console.log(props.item)
    const [filteredYear, setFilteredYear] =  useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }); //true/false 값을 반환, 선택한 날짜와 목록에 있는 날짜와 같은 것을 함수에 저장함

    

       return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList item={filteredExpenses}/>
                {/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}/>
                <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}/>
                <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}/>
                <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}/> 정적*/}
            </Card>
        </div>
       ) 
} //목록을 매핑할 때 key값이 중요
export default Expenses;