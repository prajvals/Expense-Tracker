import './Expenses.css'
import ExpenseItem from "./ExpenseItems";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
  const expenseList = props.expenseList;
  const [filteredYear, setFilteredYear] = useState('2021')

  const onFilterSelection = (filterSelection) => {
    setFilteredYear(filterSelection)
  }
  const filteredList = expenseList.filter(expense => expense.date.getFullYear().toString() === filteredYear)

  return (
    <div>
    <Card className = "expenses">
      <ExpenseFilter onFilterSelection = {onFilterSelection} yearSelected={filteredYear}/>
      {filteredList.map(expense => 
      <ExpenseItem key={expense.id} title={expense.title} amount = {expense.amount} date ={expense.date}/>
      )}
    </Card>
    </div>
  );
}
export default Expenses;
