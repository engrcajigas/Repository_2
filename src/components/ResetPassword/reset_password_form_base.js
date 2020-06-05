import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import firebase from '../Firebase/firebase';

class ResetPasswordFormBase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            sent: false
        }
    }

    onSubmit = event => {
        event.preventDefault();
        const {
            email,
            password,
            confirmPassword
        } = this.state;
        if (password !== confirmPassword) {
            this.setState({
                error: 'Passwords do not match'
            })
        } else {
            firebase.auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                    this.setState({
                        sent: true
                    })
                })
                .catch((error) => {
                    this.setState({
                        error: error
                    })
                })
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        const {
            email,
            sent
        } = this.state;

        return(
        <React.Fragment>
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                {sent
                    ? <div>
                        <h4>A Password Reset mail has been sent to your email address</h4>
                        <p>Please reset your password</p>
                      </div>
                    : ""
                }
            </form>
        </React.Fragment>
        )

    }
}

export const ResetPasswordLink = () => (
    <Link to={ROUTES.RESET_PASSWORD}>Forgot Password?</Link>
);
export const ResetPasswordForm =
    withRouter(ResetPasswordFormBase)