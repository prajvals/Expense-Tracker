import './Chart.css'
import ChartBar from './ChartBar';
const Chart = (props) => {
  let maxValue = 0;
  for(const expense of props.dataPoints)
  {
    if(expense.value > maxValue)
    {
      maxValue = expense.value
    }
  }
  return(
    <div className='chart'>
      {props.dataPoints.map(dataPoint => 
      <ChartBar
      key={dataPoint.id}
      value = {dataPoint.value}
      maxValue={maxValue}
      label = {dataPoint.month}/>)}
    </div>
  )
}
export default Chart;