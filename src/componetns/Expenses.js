import ExpenseItem from "./ExpenseItem";
import './Expenses'

const  Expenses = (props) => {
    const expense = props.expenses;
    // console.log(expense)
    return expense.map((item) =>{
        <ExpenseItem title={item.title} amount={expense.amount} date={expense.date}/>
    })
}
export default Expenses;