import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from './Sidebar'
import Expenses from './Expenses'
import InputModal from './InputModal'
import expenseService from '../services/expenses'

import { initializeBudget } from '../reducers/budgetReducer'
import { initializeExpenses, removeExpense } from '../reducers/expensesReducer'

const Dashboard = () => {

    const [user, setUser] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState('none')

    const dispatch = useDispatch()

    const expenseList = useSelector(state => state.expenses)
    const budget = useSelector(state => state.budget)
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

    const deleteExpense = (id) => {
        try{
            dispatch(removeExpense(id))
        } catch (exception){
            console.log('Failed to remove expense')
        }
         
    }


    return (
        <div className="home-page-container">
            <InputModal
                showModal={showModal}
                setShowModal={setShowModal}
                modalType={modalType}
                userID={user.id}
            />
            <Sidebar
                name={user.name}
                budget={budget}
                progress={progress}
                setShowModal={setShowModal}
                setModalType={setModalType}
            />
            <Expenses
                expenseList={expenseList}
                removeExpense={deleteExpense} />
        </div>
    )
}

export default Dashboard
