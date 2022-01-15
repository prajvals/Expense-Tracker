import './Expenses.css'
import ExpenseItem from "./ExpenseItems";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const expenseList = props.expenseList;
  return (
    <div>
    <Card className = "expenses">
      <ExpenseFilter onFilterSelection = {props.onFilterSelection}/>
      {expenseList.map(expense => 
      <ExpenseItem title={expense.title} amount = {expense.amount} date ={expense.date}/>
      )}
    </Card>
    </div>
  );
}
export default Expenses;
