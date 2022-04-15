import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-token')) {
            navigate("/")
        }
    }, [])

    async function login() {
        // console.warn(email,password);
        let item = { email, password, cookie };
        let result = await fetch("https://api.candyvoice.com/v1.0/auth/password", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)

        });
        result = await result.json();
        if (!result.error) {
            localStorage.setItem("user-token", JSON.stringify(result));
            console.log(result);

            navigate("/")
            window.location.reload(false);

        } else {                   
            alert(result.error);
        }
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Login with your Candy Voice account</h1>
            <div>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login;