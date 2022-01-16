import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import Card from "../UI/Card"
import "./ExpenseItem.css";

function ExpenseItem(props) {

  const [title,] = useState(props.title)

  

  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> {props.amount} </div>
      </div>
      {/* <button onClick={changeTitle}>Change Title</button> */}
    </Card>
  );
}
export default ExpenseItem;
