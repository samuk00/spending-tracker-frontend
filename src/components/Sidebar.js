import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import auth from '../services/auth'
import SidebarHeader from './SidebarHeader'
import SidebarItem from './SidebarItem'
import SidebarProgress from './SidebarProgress'

const Sidebar = ({
    name,
    budget,
    progress,
    sum,
    difference,
    setShowModal,
    setModalType }) => {

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
                        <div className="results">
                            <h4>{progress}% used of budget used</h4>
                            <h4>Total: {sum} Euros</h4>
                            <h4>{difference} Euros</h4>
                        </div>
                    </div>
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
