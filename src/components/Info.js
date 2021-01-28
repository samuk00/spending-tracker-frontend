import React from 'react'

const Info = ({ setView, setLoading }) => {

    const handleClick = (event) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);

        if(event.target.name === "join"){
            setView('signup')
        } else {
            setView('login')
        }
        
    }

    return (
        <div className="info-card">
            <h2>Welcome to use spending tracker</h2>
            <div>
                <p>
                    Welcome to use spending tracker. Spending tracker helps you to follow your
                    expenses and allows you to specify monthly budget.
                </p>
            </div>
            <div>
                <button name="join" onClick={handleClick}>Join now</button>
            </div>
            <div>
                <button name="login" onClick={handleClick}>Already registered?</button>
            </div>
        </div>
    )
}

export default Info
