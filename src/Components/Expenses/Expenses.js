import './Expenses.css'
import ExpenseItem from "./ExpenseItems";
import Card from '../UI/Card';

function Expenses(props) {
  const expenseList = props.expenseList;
  return (
    <Card className = "expenses">
      <ExpenseItem 
        date={expenseList[0].date}
        title={expenseList[0].title}
        amount={expenseList[0].amount}
      />
    </Card>
  );
}
export default Expenses;
