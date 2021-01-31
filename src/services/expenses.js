import axios from 'axios'
const baseURL = 'http://localhost:3001/api/expenses'

let token = null

const setToken = (userToken) => {
    token = `bearer ${userToken}`
}

const getExpenses = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`)
    return response.data
}

const postExpense = async (newExpense) => {
    const config = {
        headers: { Authorization: token}
    }
    const response = await axios.post(`${baseURL}`, newExpense, config)
    console.log(response.data)
    return response.data

}

const deleteExpense = async (id) => {
    await axios.delete(`${baseURL}/${id}`)
}

const expenseRequests = {
    setToken,
    getExpenses,
    postExpense,
    deleteExpense
}

export default expenseRequests