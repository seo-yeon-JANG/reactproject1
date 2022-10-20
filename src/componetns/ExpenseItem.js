import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) =>{
    console.log('ㅇ')

    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date.toLocaleString()} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;