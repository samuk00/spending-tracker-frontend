import { useSelector } from 'react-redux'
import React from 'react'


const Notification = () => {

    const notification = useSelector(state => state.notification)
    
    const notificationStyle = { color: "red", fontSize: "16px", textAlign: 'center', marginTop: '16px' }

    const displayStyle = notification === null ? {} : notificationStyle



    return (
        <div style={displayStyle}>
            {notification}
        </div>
    )
}

export default Notification
