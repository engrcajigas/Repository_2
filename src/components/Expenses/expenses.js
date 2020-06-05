import moment from 'moment';

const selectExpenses = (expenses, filters) => {
    console.log(expenses)
    if (!expenses) return [];
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
        const startDateMatch = filters.startDate
                                ? filters.startDate.isSameOrBefore(createdAtMoment, 'day')
                                : true
        const endDateMatch = filters.endDate
                                ? filters.startDate.isSameOrAfter(createdAtMoment, 'day')
                                : true

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (filters.sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (filters.sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

export default selectExpenses