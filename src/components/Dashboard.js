import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from './Sidebar'
import Expenses from './Expenses'
import InputModal from './InputModal'
import expenseService from '../services/expenses'
import Navbar from './Navbar'

import { initializeBudget } from '../reducers/budgetReducer'
import { initializeExpenses, removeExpense } from '../reducers/expensesReducer'
import { initializeCategories } from '../reducers/categoryReducer'

const Dashboard = () => {

    const [user, setUser] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState('none')

    const dispatch = useDispatch()

    const expenseList = useSelector(state => state.expenses)
    const categories = useSelector(state => state.categories)
    const budget = useSelector(state => state.budget)
    const sum = expenseList.reduce((acc, val) => acc + val.price, 0)
    const difference = budget - sum
    const progress = (expenseList.reduce((acc, val) => acc + val.price, 0) / budget * 100).toFixed(1)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const loggedUser = JSON.parse(loggedUserJSON)
            setUser(loggedUser)
            expenseService.setToken(loggedUser.token)
        }
    }, [])

    useEffect(() => {
        if (user.id !== undefined) {
            dispatch(initializeExpenses(user.id))
        }
    }, [dispatch, user])


    useEffect(() => {
        if (user.id !== undefined) {
            dispatch(initializeBudget(user.id))
        }
    }, [dispatch, user])

    useEffect(() => {
        if(user.id !== undefined){
            dispatch(initializeCategories(user.id))
        }
    }, [dispatch, user])

    const deleteExpense = (id) => {
        try {
            dispatch(removeExpense(id))
        } catch (exception) {
            console.log('Failed to remove expense')
        }

    }

    return (
        <div className="container">
            <Navbar />
            <div className="container-content">
                <InputModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    modalType={modalType}
                    userID={user.id}
                    categories={categories}
                />
                <Sidebar
                    name={user.name}
                    budget={budget}
                    progress={progress}
                    sum={sum}
                    difference={difference}
                    setShowModal={setShowModal}
                    setModalType={setModalType}
                />
                <Expenses
                    expenseList={expenseList}
                    removeExpense={deleteExpense} />
            </div>
        </div>
    )
}

export default Dashboard
