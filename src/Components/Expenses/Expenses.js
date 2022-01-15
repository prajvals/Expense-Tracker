import './Expenses.css'
import ExpenseItem from "./ExpenseItems";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const expenseList = props.expenseList;
  return (
    <div>
      <ExpenseFilter onFilterSelection = {props.onFilterSelection}/>
    <Card className = "expenses">
      <ExpenseItem 
        date={expenseList[0].date}
        title={expenseList[0].title}
        amount={expenseList[0].amount}
      />
    </Card>
    </div>
  );
}
export default Expenses;
