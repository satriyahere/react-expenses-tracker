import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // Alternate 1:
  // using single responsibility each state
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Alternate 2:
  // using object state
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const onTitleChangedHandler = (event) => {
    setTitle(event.target.value);

    // if depend on prev state use this
    // setUserInput((prevState) => ({ ...prevState, title: event.target.value }));
  };
  const onAmountChangedHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => ({ ...prevState, amount: event.target.value }));
  };
  const onDateChangedHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => ({ ...prevState, date: event.target.value }));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title,
      amount,
      date: new Date(date),
    };
    props.onAddExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={onTitleChangedHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={onAmountChangedHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={onDateChangedHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
