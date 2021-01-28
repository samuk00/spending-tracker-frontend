import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createExpense } from "../reducers/expensesReducer"

const ExpenseForm = ({ setShowModal }) => {

    const dispatch = useDispatch()

    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newExpense = {
            price,
            category,
            description
        }

        dispatch(createExpense(newExpense))
        setShowModal(false)

    }

    return (
        <div className="modal-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Price</label>
                    <input
                        value={price}
                        type='number'
                        placeholder="type your price here"
                        onChange={({ target }) => setPrice(target.value)}
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input
                        value={category}
                        type='text'
                        placeholder="type your category here"
                        onChange={({ target }) => setCategory(target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        value={description}
                        type='text'
                        placeholder="type your description"
                        onChange={({ target }) => setDescription(target.value)}
                    />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ExpenseForm