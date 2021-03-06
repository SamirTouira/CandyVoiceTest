import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

    function login() {
        if (email == null || email == "") {
            alert("Please fill your email and password");
            return false;
        }
        if (password == null || password == "") {
            alert("Please fill your email and password");
            return false;
        }
        let item = { email, password, cookie };
        fetch("https://api.candyvoice.com/v1.0/auth/password", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)

        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((result) => {
                        localStorage.setItem("user-token", JSON.stringify(result));
                        navigate('/')
                        window.location.reload(false);
                    })
                } else {
                    alert("Invalid email or password");
                }
            }).catch((error) => {
                console.log("Error: ", error.message);
            });
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <br />
            <h1>Login with your Candy Voice account</h1>
            <br />
            <div>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login;