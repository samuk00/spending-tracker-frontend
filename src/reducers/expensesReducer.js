import expenseService from '../services/expenses'
import _ from 'lodash'

export const initializeExpenses = (id) => {

    return async dispatch => {
        const expenses = await expenseService.getExpenses(id)
        dispatch({
            type: 'INIT',
            data: expenses
        })
    }
}

export const createExpense = (content) => {
    return async dispatch => {
        const newExpense = await expenseService.postExpense(content)
        dispatch({
            type: 'ADD',
            data: newExpense
        })
    }
}

export const removeExpense = (id) => {
    return async dispatch => {
        await expenseService.deleteExpense(id)
        dispatch({
            type: 'REMOVE',
            data: id
        })
    }
}

export const sortExpenses = (method) => {
    return {
        type: 'SORT',
        data: method
    }
}

const sortByDate = (a, b) => {
    return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
}

const expensesRecuder = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case 'INIT':
            return action.data
        case 'ADD':
            return state.concat(action.data)
        case 'REMOVE':
            return state.filter(expense => expense.id !== action.data)
        case 'SORT':
            if (action.data === 'ascprice') {
                return _.orderBy(state, 'price', 'asc')
            }
            else if (action.data === 'decprice') {
                return _.orderBy(state, 'price', 'desc')
            }
            else if (action.data === 'date') {
                return state.slice().sort(sortByDate)
            }
            else if (action.data === 'category'){
                return _.orderBy(state, 'category', 'desc')
            }
            return state
        default:
            return state
    }
}

export default expensesRecuder