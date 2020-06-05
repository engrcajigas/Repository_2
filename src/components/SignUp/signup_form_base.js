import React from 'react';
import { ROUTES } from '../constants/constants';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../Firebase/firebase'


const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null
};

class SignUpFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        }
    }

    onSubmit = event => {
        event.preventDefault();
        const {
            email,
            password,
            confirmPassword,
        } = this.state;

        if (password !== confirmPassword) {
            this.setState({
                error: "Passwords do not match"
            })
        } else {
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    this.props.history.push(ROUTES.HOME);
                })
                .catch((error) => {
                    this.setState({
                        error: error
                    })
                })
        };
    };

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render() {
        const {
            username,
            email,
            password,
            confirmPassword,
            error
        } = this.state;

        return(
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="username"
                        value={username}
                        type="string"
                        onChange={this.onChange}
                        placeholder="Full Name"
                    />
                    <br/>
                    <input
                        name="email"
                        value={email}
                        type="string"
                        onChange={this.onChange}
                        placeholder="Email Address"
                    />
                    <br/>
                    <input
                        name="password"
                        value={password}
                        type="password"
                        onChange={this.onChange}
                        placeholder="Password"
                    />
                    <br/>
                    <input
                        name="confirmPassword"
                        value={confirmPassword}
                        type="password"
                        onChange={this.onChange}
                        placeholder="Confirm Password"
                    />
                    <br/>
                    {error && <p>{error}</p>}

                    <button type="submit">Sign Up</button>
                </form>
            </React.Fragment>
        )

    };
};

export const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export const SignUpForm = withRouter(SignUpFormBase);
