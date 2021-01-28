import React from 'react'
import { FaMoneyCheckAlt, FaRegMoneyBillAlt } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { RiLogoutBoxLine } from "react-icons/ri";

const SidebarItem = ({ handleClick, iconName, buttonText }) => {

    console.log(handleClick)

    const renderIcon = (name) => {
        console.log(name)
        switch (iconName) {
            case 'budget':
                return <FaMoneyCheckAlt style={{color: 'green'}} className="sidebar-icon" />
            case 'expense':
                return <FaRegMoneyBillAlt style={{ color: 'green' }} className="sidebar-icon" />
            case 'settings':
                return <MdSettings className="sidebar-icon" />
            case 'logout':
                return <RiLogoutBoxLine className="sidebar-icon" />
            default:
                return null
        }
    }
    return (
        <div className="item">
            <div className="item-icon">
                {renderIcon(iconName)}
            </div>
            <div className="item-content">
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        </div>
    )
}

export default SidebarItem
