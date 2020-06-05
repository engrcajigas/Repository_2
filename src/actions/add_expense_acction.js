import { database } from '../components/Firebase/firebase';

export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
};

export const setExpense = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
};

export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
}
export const startAddExpense =(expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.id;
        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {
            description,
            note,
            amount,
            createdAt
        }

        database.ref(`users/${uid}/expenses`)
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    }
}