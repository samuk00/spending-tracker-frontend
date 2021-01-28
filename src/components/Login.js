import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import loginService from '../services/login'
import Notification from './Notification'
import auth from '../services/auth'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    // Login
    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const loggedUser = await loginService.login({ username, password })
            auth.userLogin(JSON.stringify(loggedUser))
            setUsername('')
            setPassword('')
            history.push('/home')

        } catch (expection) {
            dispatch(setNotification('Invalid username or password'))
            setTimeout(() => {
                dispatch(setNotification(null))
            }, 3000);
        }

    }

    return (
        <div className="sign-card">
            <h2>Login</h2>
            <div className="sign-form">
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username</label>
                        <input
                            type='text'
                            placeholder="type your username here"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder="type your password here"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Notification />
                        <button type='submit'>
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )


}

export default Login
