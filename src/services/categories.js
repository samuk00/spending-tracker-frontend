import axios from 'axios'
const baseURL = 'http://localhost:3001/api/categories'

const getCategories = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`)
    return response.data
}

const categoryRequests = {
    getCategories
}

export default categoryRequests
