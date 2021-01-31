import React from 'react'
import { FaBars } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { showSidebar, hideSidebar } from '../reducers/sidebarReducer'


const Navbar = () => {

    const dispatch = useDispatch()

    const sidebarState = useSelector(state => state.sidebar)


    const displaySidebar = () => {
        if (!sidebarState) {
            dispatch(showSidebar())
        } else {
            dispatch(hideSidebar())
        }

    }

    return (
        <div className="navbar-container">
            <div className="navbar">
                <span onClick={displaySidebar} className="bars"><FaBars /></span>
                <a href="/"><h1>SPENDING TRACKER</h1></a>
            </div>
        </div>
    )
}

export default Navbar
