import React, { useState } from 'react';
import './ExpensesList.css';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesUnordered from './ExpensesUnordered';

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterYearHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };
  const filteredList = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  
  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedYear={filteredYear}
        onFilteredYear={filterYearHandler}
      />
      <ExpensesUnordered expenses={filteredList} />
    </Card>
  );
};

export default ExpensesList;
