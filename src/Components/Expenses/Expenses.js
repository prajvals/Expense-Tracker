import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const expenseList = props.expenseList;
  const [filteredYear, setFilteredYear] = useState("2021");

  const onFilterSelection = (filterSelection) => {
    setFilteredYear(filterSelection);
  };
  const filteredList = expenseList.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let filteredListOutput = <p>No expense found</p>
  

  if (filteredList.length > 0) {
    filteredListOutput = filteredList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterSelection={onFilterSelection}
          yearSelected={filteredYear}
        />
        <ExpenseChart filteredExpense={filteredList}/>
        {filteredListOutput}
      </Card>
    </div>
  );
}
export default Expenses;
