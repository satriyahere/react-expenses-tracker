import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const addExpenseHandler = (formExpenseData) => {
    const expenseData = { ...formExpenseData, id: nanoid() };
    props.onAddExpense(expenseData);
    setIsShowForm(false);
  };
  const showFormHandler = () => {
    setIsShowForm(true);
  };
  const hideFormHandler = () => {
    setIsShowForm(false);
  };
  const addExpenseContent = isShowForm ? (
    <ExpenseForm onCancel={hideFormHandler} onAddExpense={addExpenseHandler} />
  ) : (
    <button onClick={showFormHandler}>Add New Expenses</button>
  );
  return <div className='new-expense'>{addExpenseContent}</div>;
};

export default NewExpense;
