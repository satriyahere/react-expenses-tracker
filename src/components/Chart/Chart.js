import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const monthlyDataExpense = props.dataItems.map(dataItem => dataItem.value)
  const maxExpense = Math.max(...monthlyDataExpense);

  return (
    <div className='chart'>
      {props.dataItems.map((dataItem) => (
        <ChartBar
          key={dataItem.label}
          value={dataItem.value}
          maxValue={maxExpense}
          label={dataItem.label}
        />
      ))}
    </div>
  );
};

export default Chart;
