import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error: null
        }
    }

    onChange = event => {
        const {
            name, value
        } = event.target;
        if (value === 'amount' && (!value) || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            let amount = event.target.value
            this.setState({
                amount
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
          this.setState({createdAt: createdAt});
        }
    }

    onFocusChange = ({focused}) => {
        this.setState({calendarFocused: focused});
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState({
                error: "Please enter values for description and amount"
            })
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        const {
            description,
            amount,
            createdAt,
            calendarFocused
        } = this.state
        return (
            <React.Fragment>
                <form>
                    <input
                        name="description"
                        placeholder="Description"
                        type="text"
                        value={description}
                        onChange={this.onChange}
                    />
                    <input
                        name="amount"
                        placeholder="Amount"
                        type="text"
                        value={amount}
                        onChange={this.onChange}
                    />
                {/**
                    <SingleDatePicker
                        date={createdAt}
                        onDateChange={this.onDateChange}
                        focused={calendarFocused}
                        onFocusChange={this.onFocusChange}
                    />
                **/}
                    <button type="submit">Save Expenses</button>
                </form>
            </React.Fragment>
        )
    }
};

export default ExpenseForm;