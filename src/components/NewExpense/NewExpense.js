import { nanoid } from 'nanoid';
import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const addExpenseHandler = (formExpenseData) => {
    const expenseData = { ...formExpenseData, id: nanoid() };
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
