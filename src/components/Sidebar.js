import React from 'react'
import { useHistory } from 'react-router-dom'
import auth from '../services/auth'
import SidebarHeader from './SidebarHeader'
import SidebarItem from './SidebarItem'
import SidebarProgress from './SidebarProgress'

const Sidebar = ({ name, budget, progress, setShowModal, setModalType }) => {

    const history = useHistory()

    const handleClick = (modalType) => {
        setShowModal(true)
        setModalType(modalType)
    }

    const handleLogOut = () => {
        auth.userLogout()
        history.push('/')
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <SidebarHeader name={name} budget={budget} />
                <div className="sidebar-items">
                    <SidebarItem
                        handleClick={() => handleClick("budget")}
                        iconName="budget"
                        buttonText="Set budget"
                    />
                    <SidebarItem
                        handleClick={() => handleClick("expense")}
                        iconName="expense"
                        buttonText="Input expense"
                    />
                    <SidebarItem
                        iconName="settings"
                        buttonText="Settings"
                    />
                    <SidebarItem
                        handleClick={() => handleLogOut()}
                        iconName="logout"
                        buttonText="Logout"
                    />
                </div>
                <div className="progressbar-container">
                    <SidebarProgress progress={progress} />

                </div>
            </div>
        </div>
    )
}

export default Sidebar
