import React, { useState } from 'react'
import registerService from '../services/register'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import Notification from './Notification'

const Signup = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const handleRegister = async (event) => {
        event.preventDefault()

        if (!checkPasswordMatch(password, repassword)) {
            dispatch(setNotification('Passwords do not match'))
            setTimeout(() => {
                dispatch(setNotification(null))
            }, 3000);
            return
        }

        try {
            await registerService.register({ username, name, password })
            setUsername('')
            setName('')
            setPassword('')
            setRePassword('')


        } catch (expection) {
            console.log('failed to create user')
        }
    }

    const checkPasswordMatch = (password1, password2) => {
        if (password1 !== password2) {
            return false
        }
        return true
    }

    return (
        <div className="sign-card">
            <h2>Register</h2>
            <div className="sign-form">
                <form onSubmit={handleRegister}>
                    <div>
                        <label>Name</label>
                        <input
                            type='text'
                            placeholder='type your name here'
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </div>
                    <div>
                        <label>Username</label>
                        <input
                            type='text'
                            placeholder='type your username here'
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='type your password here'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>
                    <div>
                        <label>Confirm password</label>
                        <input
                            type='password'
                            placeholder='type your password again'
                            value={repassword}
                            onChange={({ target }) => setRePassword(target.value)}
                        />
                    </div>
                    <Notification />
                    <button type='submit'>
                        Create account
                        </button>
                </form>

            </div>
        </div>
    )
}

export default Signup
