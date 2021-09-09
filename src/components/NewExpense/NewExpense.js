import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const addExpenseHandler = (formExpenseData) => {
    const expenseData = { ...formExpenseData, id: nanoid() };
    props.onAddExpense(expenseData);
    toggeFormHandler();
  };
  const toggeFormHandler = () => {
    setIsShowForm((prevState) => prevState = !prevState);
  }
  const addExpenseContent = isShowForm ? (
    <ExpenseForm onCancel={toggeFormHandler} onAddExpense={addExpenseHandler} />
  ) : (
    <button onClick={toggeFormHandler}>Add New Expenses</button>
  );
  return <div className='new-expense'>{addExpenseContent}</div>;
};

export default NewExpense;
