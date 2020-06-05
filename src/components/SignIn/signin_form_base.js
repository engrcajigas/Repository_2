import React from 'react';
import { ROUTES } from '../constants/constants'
import { withRouter } from 'react-router-dom';
import firebase from '../Firebase/firebase';
import { ResetPasswordLink } from '../ResetPassword/reset_password_form_base';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class SignInFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        }
    };

    onSubmit = event => {
        event.preventDefault();
        const {
            email, password
        } = this.state;

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
                this.props.history.push(ROUTES.HOME);
            })
            .catch((error) => {
                this.setState({
                    error: error
                });
            });
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        console.log(this.props)
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return(
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>
                <ResetPasswordLink />

                {error && <p>{error.message}</p>}
            </form>
        )
    }
};

export const SignInForm =
    withRouter(SignInFormBase)

