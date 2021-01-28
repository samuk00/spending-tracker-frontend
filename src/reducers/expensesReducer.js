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

const expensesRecuder = (state = [], action) => {
    console.log(action.type)
    switch (action.type){
        case 'INIT':
            return action.data
        case 'ADD': 
            return state.concat(action.data)
        default:
            return state
    }
}

export default expensesRecuder