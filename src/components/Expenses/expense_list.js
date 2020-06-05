import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenses_list_item';
import selectExpenses from './expenses';

class ExpenseList extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <div>
                    <div>Expenses</div>
                    <div>Expense</div>
                    <div>Amount</div>
                </div>
            </div>

            <div>
                { this.props.expenses.length === 0
                  ? (
                    <div><span>No expenses</span></div>
                    )
                  : (
                    this.props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} expense={expense}/>
                    })
                    )
                }
            </div>
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);