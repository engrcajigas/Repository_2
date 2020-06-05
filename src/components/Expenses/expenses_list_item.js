import React from 'react';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = (props) => {
    const expense = props.expense;
    return (
        <React.Fragment>
            <div>
                <div>
                    <span>{moment(expense.createdAt).format('MMMM DD, YYYY')}</span>
                </div>
                <h3>{numeral(expense.amount / 100).format('$0,0.00')}</h3>
            </div>
        </React.Fragment>
    )
}

export default ExpenseListItem;