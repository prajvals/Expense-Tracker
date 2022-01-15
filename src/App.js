import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const onAddExpense = (newExpense) => {
    const expenseItem = {...newExpense,id:Math.random()}
    console.log(expenseItem)
  }
  const onFilterSelection = (filterSelection) => {
    console.log(filterSelection)
  }
  return (
    <div>
      <NewExpenses onAddExpense={onAddExpense}/>
      <Expenses expenseList={expenses} onFilterSelection = {onFilterSelection}/>
    </div>
  );
}

export default App;
