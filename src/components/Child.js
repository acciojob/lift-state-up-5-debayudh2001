import React from "react";

const Child = ({isLoggedIn,setIsLoggedIn}) => {
    function handleSubmit(e){
        e.preventDefault()
        setIsLoggedIn(true)
    }
    return (
        <div className={isLoggedIn ? "hide" : "show"}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>&nbsp;
                <input type="text" name="username" />
                <br />
                <br />
                <label htmlFor="password">Password:</label>&nbsp;
                <input type="password" name="password" />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Child