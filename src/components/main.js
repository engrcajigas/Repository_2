import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ROUTES } from './constants/constants'
import SignInPage from './SignIn';
import HomePage from './Home';
import SignUpPage from './SignUp';
import ResetPasswordPage from './ResetPassword';
import AddExpenses from './Expenses/add_expense';

class Main extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div>
                   <BrowserRouter basename="/expense_tracker">
                       <Switch>
                           <Route exact path="/" render={() => (
                               <Redirect to={ROUTES.SIGN_IN} />
                           )} />
                           <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                           <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                           <Route exact path={ROUTES.HOME} component={HomePage} />
                           <Route exact path={ROUTES.RESET_PASSWORD} component={ResetPasswordPage} />
                           <Route exact path={ROUTES.ADD_EXPENSES} component={AddExpenses} />
                       </Switch>
                   </BrowserRouter>
                </div>
            </React.Fragment>
        )
    }
}

export default Main;