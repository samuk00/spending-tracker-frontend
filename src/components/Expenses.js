import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import ExpenseItem from './ExpenseItem'
import { sortExpenses } from '../reducers/expensesReducer'


const Expenses = ({ expenseList, removeExpense }) => {

    const [sortType, setSortType] = useState('Date')
    const dispatch = useDispatch()

    const options = [
        { method: 'date', label: 'Date' },
        { method: 'category', label: 'Category' },
        { method: 'ascprice', label: 'Smallest price' },
        { method: 'decprice', label: 'Highest price' },
    ]

    const handleSelect = (sortType) => {
        setSortType(sortType)
        dispatch(sortExpenses(sortType.method))
    }

    return (
        <div className="main-container">
            <div className="list-container">
                <div className="list-header">
                    <h1>Month review</h1>
                </div>
                <div className="list-options">
                    <div className="text">
                        <h3>Sort by</h3>
                    </div>
                    <div className="dropdown">
                        <Select isSearchable={false} value={sortType} options={options} onChange={(value) => handleSelect(value)} />
                    </div>
                </div>
                <div className="table-container">
                    <table cellSpacing="0" className="review-table">
                        <tbody>
                            <tr>
                                <th>Euros</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th/>
                            </tr>
                            {expenseList.map((item, index) => {
                                return (
                                    <ExpenseItem
                                        key={index}
                                        id={item.id}
                                        price={item.price}
                                        category={item.category}
                                        description={item.description}
                                        date={item.date}
                                        removeExpense={removeExpense}

                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Expenses
