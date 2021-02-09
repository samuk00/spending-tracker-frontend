import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createExpense } from "../reducers/expensesReducer"

const ExpenseForm = ({ setShowModal, categories }) => {

    const dispatch = useDispatch()

    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [customCategory, setCustomCategory] = useState('')

    console.log(customCategory)

    const handleSubmit = (event) => {
        event.preventDefault()

        const categoryToadd = customCategory === ''
            ? category
            : customCategory

        console.log(categoryToadd)

        const newExpense = {
            price,
            category: categoryToadd,
            description
        }
        dispatch(createExpense(newExpense))
        setShowModal(false)
    }

    const categoryOptions = categories.map(el => ({
        value: el.category,
        label: el.category
    }))

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
                    <div className="custom-category">
                        <div>
                            <select onChange={({ target }) => setCategory(target.value)}>
                                <option defaultValue>Choose category</option>
                                {categoryOptions.map((cat, index) => <option key={index}>{cat.value}</option>)}
                            </select>
                        </div>
                        <div className="custom-category">
                            <input
                                value={customCategory}
                                placeholder="type a new category"
                                onChange={({ target }) => setCustomCategory(target.value)}
                            />

                        </div>
                    </div>
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
        </div >
    )
}

export default ExpenseForm