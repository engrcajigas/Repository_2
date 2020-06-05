import React from 'react';
import ExpenseList from '../Expenses/expense_list';
import ExpensesSummary from '../Expenses/expense_summary';

class HomePage extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>You are in homepage.</h1>
                <div>
                    <ExpensesSummary />
                    <ExpenseList />
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage;