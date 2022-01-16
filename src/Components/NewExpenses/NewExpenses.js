import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddExpense={props.onAddExpense}
          editingHandler={stopEditing}
        />
      )}
    </div>
  );
};
export default NewExpenses;
