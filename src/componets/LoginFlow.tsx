import React from 'react'

function LoginFlow() {

    return (
        <div className="container">
            <h1>Welcome to Presenter</h1>
            <form
                className="row"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input id="email" type='email' placeholder="Enter your email"></input>

                <input id="password" type='password' placeholder={"Enter your password"}></input>
                <button>Login</button>
                <button>Signup</button>

            </form>

        </div>
    );

}

export default LoginFlow