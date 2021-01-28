import axios from 'axios'

const baseURL = 'http://localhost:3001/api/users'

const register = async (credentials) => {
    const response = await axios.post(baseURL, credentials)
    return response.data
}

const registerRequest = {
    register
}

export default registerRequest