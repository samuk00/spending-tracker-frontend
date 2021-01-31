import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import auth from '../services/auth'
import SidebarHeader from './SidebarHeader'
import SidebarItem from './SidebarItem'
import SidebarProgress from './SidebarProgress'

const Sidebar = ({ name, budget, progress, setShowModal, setModalType }) => {

    const history = useHistory()

    const sidebarState = useSelector(state => state.sidebar)

    const mobileView = sidebarState ? { margin: '51px auto', height: '100%', position: 'fixed', display: 'block', width: '100%' } : { display: 'none' }

    const handleClick = (modalType) => {
        setShowModal(true)
        setModalType(modalType)
    }

    const handleLogOut = () => {
        auth.userLogout()
        history.push('/')
    }


    if (!sidebarState) {
        return (
            <div className="sidebar-container">
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
        )
    }
    return (
        <div style={mobileView}>
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
    )
}

export default Sidebar
