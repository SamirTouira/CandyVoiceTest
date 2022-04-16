import React, { useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const token = JSON.parse(localStorage.getItem("user-token"));
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
        if (localStorage.getItem('user-token')) {
            console.log(token.jwt_token)
            fetch("https://api.candyvoice.com/v1.0/users/me", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "JWT " + token.jwt_token
                }
            })
                .then(response => response.json())
                .then(response => localStorage.setItem("user-info", JSON.stringify(response)))
                .then(() => {
                    navigate('/')
                })
                .catch(error => console.log(error));
        }
    }, [])


    return (

        <><div className="Home">
            <header className="App-header">
                {token ? (
                    <>
                        Hi {userInfo.email}!
                    </>)
                    : (
                        null
                    )}
                <h1>Welcome to my Candy Voice Test app!</h1>
            </header>
        </div></>
    );
}

export default Home;
