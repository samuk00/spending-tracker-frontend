import React from 'react'
import { TiDelete } from "react-icons/ti"

const ExpenseItem = (
    { id,
        price,
        category,
        description,
        date,
        removeExpense
    }) => {

    const expenseDate = new Date(date)
    const formattedDate = `${expenseDate.getDate()}.${expenseDate.getMonth() + 1}.${expenseDate.getFullYear()}`

    return (
        <tr className="table-row">
            <td>{price} €</td>
            <td>{category}</td>
            <td>{formattedDate}</td>
            <td>{description}</td>
            <td><TiDelete style={{ cursor: 'pointer', color: 'white' }} onClick={() => removeExpense(id)} /></td>
        </tr>
    )
}

export default ExpenseItem
