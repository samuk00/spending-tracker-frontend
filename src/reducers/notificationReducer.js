const notification = null
    

export const setNotification = (notification) => {
    return { type: 'SET_NOTIFICATION', data: notification }

}

const notificationReducer = (state = notification, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        default:
            return state
    }
}

export default notificationReducer

