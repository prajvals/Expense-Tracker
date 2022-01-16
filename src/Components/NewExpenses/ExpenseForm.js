import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    const typedInput = event.target.value;
    console.log(typedInput);
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    const typedInput = event.target.value;
    console.log(typedInput);
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: typedInput,
      };
    });
  };

  const dateChangeHandler = (event) => {
    const dateChanged = event.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: dateChanged,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
    if (
      userInput.title.length === 0 ||
      userInput.amount.length === 0 ||
      userInput.date.length === 0
    ) {
      alert("Cannot Add an Empty Expense");
    } else {
      props.onAddExpense(expenseData);
      props.editingHandler();
    }
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
    console.log("Reset Handler called");
    props.editingHandler();
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
          <label>{userInput.title}</label>
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            value={userInput.date}
            max="2022-01-01"
            onChange={dateChangeHandler}
          />
          <label>{userInput.date}</label>
        </div>
        <div className="new-expense__actions">
          <button type="reset">CANCEL</button>
          <button type="submit">ADD EXPENSE</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
