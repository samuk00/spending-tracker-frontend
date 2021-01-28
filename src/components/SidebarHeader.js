import React from 'react'
import { FaRegUserCircle } from "react-icons/fa"

const SidebarHeader = ({name, budget}) => {
    return (
        <div className="header-container">
            <div className="header-user">
                <FaRegUserCircle id="user-icon" />
                <h3>{name}</h3>
            </div>
            <div className="header-budget">
                <h3>Current budget {budget}</h3>
            </div>
        </div>
    )
}

export default SidebarHeader
