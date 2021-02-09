import React, { useState, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'
import Info from './Info'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom';


const Frontpage = () => {
    const [view, setView] = useState('login')
    const [loading, setLoading] = useState(true)
    let screenToShow = null

    const history = useHistory()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            history.push('/home')
        }
    }, [history])

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading === true) {
        screenToShow = (
            <div className="sign-card">
                <div className="loader" style={{ margin: "50% auto" }}></div>
            </div>
        )
    } else {
        if (view === 'login') {
            screenToShow = <Login />
        } else {
            screenToShow = <Signup />
        }
    }

    return (
        <div className="front-page-container">
            <div className="container-content">
                <Navbar />
                <div className="card">
                    <Info setView={setView} loading={loading} setLoading={setLoading} />
                    {screenToShow}
                </div>
            </div>
        </div>
    )
}

export default Frontpage
