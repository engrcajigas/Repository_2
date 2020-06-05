import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { expensesReducer } from './expenses_reducer'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    expenses: expensesReducer,
});

export default rootReducer;