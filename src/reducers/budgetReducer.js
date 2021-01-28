import budgetService from '../services/budgets'


export const initializeBudget = (id) => {
    return async dispatch => {
        const budget = await budgetService.getBudget(id)
        dispatch({
            type: 'INIT_BUDGET',
            data: budget
        })
    }
}

export const updateBudget = (id, budget) => {
    return async dispatch => {
        await budgetService.updateBudget(id, { budget })
        dispatch({
            type: 'UPDATE_BUDGET',
            data: budget
        })
    }
}

const budgetReducer = (budget = null, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'INIT_BUDGET':
            return action.data
        case 'UPDATE_BUDGET':
            return action.data
        default:
            return budget
    }
}

export default budgetReducer