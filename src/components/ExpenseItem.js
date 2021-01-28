import React from 'react'

const ExpenseItem = ({ price, category, description, date }) => {
    return (
        <tr>
            <td>{price}</td>
            <td>{category}</td>
            <td>{date}</td>
            <td>{description}</td>
        </tr>
    )
}

export default ExpenseItem
