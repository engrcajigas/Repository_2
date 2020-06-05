import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expense_form';
import { startAddExpense } from '../../actions/add_expense_acction';


class AddExpenses extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push("/");
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <div>
                        <h1>Add Expense</h1>
                    </div>
                    <div>
                        <ExpenseForm onSubmit={this.onSubmit}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default connect(null, { startAddExpense })(AddExpenses);