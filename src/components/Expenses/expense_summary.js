import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from './expenses';
import totalOfExpenses from './expenses_total';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/constants';

const ExpensesSummary = ({count, total}) => {
    const expenseWord = count === 1 ? 'expense' : 'expenses';
    const formatTotal = numeral(total/100).format('$0,0.00');

    return (
        <div>
            <div>
                <h1></h1>
                <div>
                    <Link to={ROUTES.ADD_EXPENSES}>Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        count: visibleExpenses.length,
        total: totalOfExpenses(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);