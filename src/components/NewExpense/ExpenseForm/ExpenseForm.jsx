import React, {useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();// 防止刷新，表单每提交一次就会刷新一次页面
        // console.log(e.target);
        console.log('the form is submitted.');     

        const formData = {
            title, 
            amount: `$${amount}`, 
            date: new Date(date)
        };

        // console.log(formData);
        props.addNewExpense(formData);
    }

    const onInputChangeHandler = (e, type) => {
        const value = e.target.value;

        // console.log(`Value is ${value}: type is ${type}`);

        switch (type) {
            case 'title':
                setTitle(value);
                break;
            case 'amount':
                setAmount(value);
                break;
            case 'date':
                setDate(value);
                break;
            default: 
                console.log(e);
                break;
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={e => onInputChangeHandler(e, 'title')}/>
                </div>
        
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" onChange={e => onInputChangeHandler(e, 'amount')}/>
                </div>
        
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" onChange={e => onInputChangeHandler(e, 'date')}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
