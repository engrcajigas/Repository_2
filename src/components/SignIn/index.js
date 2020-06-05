import React from 'react';
import {SignInForm} from './signin_form_base'
import { SignUpLink } from '../SignUp/signup_form_base';

const SignInPage = () =>  (
    <div>
        <h1>Sign In</h1>
        <SignInForm />
        <SignUpLink />
    </div>
);

export default SignInPage;
