import React from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

  const onAddNewExpense = newExpense => {
    console.log(newExpense);
    props.addNewExpense(newExpense);
  }


  return (
    <div className='new-expense'>
      <ExpenseForm addNewExpense={onAddNewExpense}/>

    </div>
  );
};

export default NewExpense;
