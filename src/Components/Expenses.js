import './Expenses.css'
import ExpenseItem from "./ExpenseItems";

function Expenses(props) {
  const expenseList = props.expenseList;
  return (
    <div className = "expenses">
      <ExpenseItem 
        date={expenseList[0].date}
        title={expenseList[0].title}
        amount={expenseList[0].amount}
      />
    </div>
  );
}
export default Expenses;
