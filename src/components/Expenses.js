import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ expenseList, removeExpense }) => {


    return (
        <div className="list-container">
            <div className="inner-container">
                <h1>Review your expenses</h1>
                <div>
                    <table cellSpacing="0" className="review-table">
                        <tbody>
                            <tr>
                                <th>Euros</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Description</th>
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
                <div className="review-results">
                    <h1>Yhteensä: {expenseList.reduce((acc, val) => acc + val.price, 0)} Euros</h1>
                </div>
            </div>
        </div>
    )
}

export default Expenses
