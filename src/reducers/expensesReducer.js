import expenseService from '../services/expenses'

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

const expensesRecuder = (state = [], action) => {
    console.log(action.type)
    switch (action.type){
        case 'INIT':
            return action.data
        case 'ADD': 
            return state.concat(action.data)
        case 'REMOVE':
            return state.filter(expense => expense.id !== action.data)
        default:
            return state
    }
}

export default expensesRecuder