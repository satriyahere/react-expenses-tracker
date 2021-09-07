import React from 'react';
import ExpensesItem from './ExpensesItem';

function ExpensesList(props) {
  return (
    <div>
      <ExpensesItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      ></ExpensesItem>
      <ExpensesItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      ></ExpensesItem>
      <ExpensesItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      ></ExpensesItem>
      <ExpensesItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      ></ExpensesItem>
      {/* {props.expenses.forEach(element => 
        <ExpensesItem
          title={element.title}
          date={element.date}
          amount={element.amount}
        ></ExpensesItem>
      )} */}
    </div>
  );
}

export default ExpensesList;
