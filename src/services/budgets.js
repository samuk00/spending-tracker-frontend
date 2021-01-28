import axios from 'axios'

const baseURL = 'http://localhost:3001/api/users'

const getBudget = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`)
    return response.data.budget
}

const updateBudget = async (id, newBudget) => {
    const response = await axios.put(`${baseURL}/${id}`, newBudget)
    return response.data
}

const budgetRequests = {
    getBudget,
    updateBudget
}

export default budgetRequests