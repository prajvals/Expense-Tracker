import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {

  // const [title,setTitle] = useState('')
  // const [amount,setAmount] = useState('')
  // const [date,setDate] = useState('')

  const [userInput,setUserInput] = useState({
    title:'',
    amount:'',
    date:''
  })
  const titleChangeHandler = (event) => {
    const typedInput = event.target.value
    console.log(typedInput)
    setUserInput((prevState)=>{
      return {...prevState,title:event.target.value} 
    })
    // setTitle(typedInput)
  }

  const amountChangeHandler = (event) => {
    const typedInput = event.target.value 
    console.log(typedInput)
    setUserInput((prevState)=>{
      return {
        ...prevState,
        amount:typedInput
      }
    })
    // setAmount(typedInput)
  }

   const dateChangeHandler = (event) => {
     const dateChanged = event.target.value
      setUserInput((prevState)=>{
        return {
          ...prevState,
          date:dateChanged
        }
      })   
     //  setDate(dateChanged)
   }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" onChange={titleChangeHandler}/>
          <label>{userInput.title}</label>
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" min="2019-01-01" max="2022-01-01" onChange={dateChangeHandler} />
          <label>{userInput.date}</label>
        </div>
        <div className="new-expense__actions">
          <button type="submit">ADD EXPENSE</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
