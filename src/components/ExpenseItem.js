import React from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ExpenseItem = (
    { id,
        price,
        category,
        description,
        date,
        removeExpense
    }) => {


    return (
        <tr className="table-row">
            <td>{price} €</td>
            <td>{category}</td>
            <td>{date}</td>
            <td>{description}</td>
            <BiDotsHorizontalRounded style={{ cursor: 'pointer', color: 'white' }} onClick={() => removeExpense(id)} />
        </tr>
    )
}

export default ExpenseItem
