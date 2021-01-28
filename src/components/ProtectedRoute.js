import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const auth = window.localStorage.getItem("loggedUser")

    return (
        <Route
            {...rest}
            render={props => {
                if (auth) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/"
                        }
                    } />
                }
            }}
        />
    )
}

export default ProtectedRoute
