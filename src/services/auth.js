const userLogout = () => {
    window.localStorage.removeItem('loggedUser')
}

const userLogin = (credentials) => {
    window.localStorage.setItem("loggedUser", credentials)
}

const auth = {
    userLogout,
    userLogin
}

export default auth