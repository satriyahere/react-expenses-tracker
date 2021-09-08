import React from 'react';
import './ExpensesUnordered.css';
import ExpensesItem from './ExpensesItem';
const ExpensesUnordered = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expense</h2>;
  }
  return (
    <ul className='expenses-list'>
      {props.expenses.map((element) => (
        <ExpensesItem
          key={element.id}
          title={element.title}
          date={element.date}
          amount={element.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesUnordered;
