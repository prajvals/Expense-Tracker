import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const dataPoints = [
    {month:'Jan',value:0,id:0},
    {month:'Feb',value:0,id:1},
    {month:'Mar',value:0,id:2},
    {month:'Apr',value:0,id:3},
    {month:'May',value:0,id:4},
    {month:'Jun',value:0,id:5},
    {month:'Jul',value:0,id:6},
    {month:'Aug',value:0,id:7},
    {month:'Sep',value:0,id:8},
    {month:'Oct',value:0,id:9},
    {month:'Nov',value:0,id:10},
    {month:'Dec',value:0,id:11},
  ]
  for(const expense of props.filteredExpense)
  {
    dataPoints[expense.date.getMonth()].value += expense.amount
  }
  return(
    <div>
      <Chart dataPoints={dataPoints}/>
    </div>
  )
}
export default ExpenseChart;