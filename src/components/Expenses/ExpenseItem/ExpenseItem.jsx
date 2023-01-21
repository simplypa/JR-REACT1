import './ExpenseItem.css';
import { useState } from 'react';




const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title); //return tuple: array with 2 element
    // 使用useState更新title的时候，整个函数会重新执行一遍，也就是渲染一遍

    const date = props.date;
    const title = props.title;

    const month = date.toLocaleDateString('en-AU', {month: 'long'});
    const day = date.toLocaleDateString('en-AU', {day: '2-digit'});
    const year = date.getFullYear();

    // const onButtonClickHandler = function(e) {
    //     setTitle('updated title')
        
    // }

    return (
        <div className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            {/* <button onClick={e => onButtonClickHandler(e)}>Update title</button> */}
        </div>
    );
};

export default ExpenseItem;