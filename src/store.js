import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import expensesRecuder from './reducers/expensesReducer'
import budgetReducer from './reducers/budgetReducer'

const reducer = combineReducers({
    notification: notificationReducer,
    expenses: expensesRecuder,
    budget: budgetReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState())

export default store