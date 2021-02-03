import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import expensesRecuder from './reducers/expensesReducer'
import budgetReducer from './reducers/budgetReducer'
import sidebarReducer from './reducers/sidebarReducer'
import categoryReducer from './reducers/categoryReducer'

const reducer = combineReducers({
    notification: notificationReducer,
    expenses: expensesRecuder,
    budget: budgetReducer,
    sidebar: sidebarReducer,
    categories: categoryReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState())

export default store