import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateBudget } from '../reducers/budgetReducer'

const BudgetForm = ({ userID, setShowModal }) => {

    const dispatch = useDispatch()

    const [budget, setBudget] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateBudget(userID, budget))
        setShowModal(false)
    }

    return (
        <div className="modal-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Set budget</label>
                    <input
                        value={budget}
                        type='number'
                        placeholder="type your budget here"
                        onChange={({ target }) => setBudget(target.value)}
                    />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default BudgetForm
