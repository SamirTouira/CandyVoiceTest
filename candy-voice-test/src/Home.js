import React, { useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import voiceAnimation from './assets/voice.gif'

function Home() {
    const token = JSON.parse(localStorage.getItem("user-token"));
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
        if (token) {
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

        <div className="Home">
            <header className="App-header">
                <img src={voiceAnimation} width={250} height={100} />
                {token && userInfo !== null ? (
                    <>
                        <p>Hi {userInfo.email}</p>
                        <h1>Welcome to Candy Voice Test app!</h1>
                        <br />
                        <div>
                            <Button onClick={() => {
                                if (window.confirm("Are you sure?")) {
                                    navigate('/logout')
                                } else {
                                    return;
                                }
                            }} variant="danger" size="lg">
                                <strong>LOGOUT</strong>
                            </Button>{' '}
                        </div>
                    </>)
                    : (
                        <>
                            <h1>Welcome to Candy Voice Test app!</h1>
                            <br />
                            <div>
                                <Button className="btn-light" onClick={(e) => { navigate('/login'); }} variant="light" size="lg">
                                    <strong>LOGIN</strong>
                                </Button>{' '}
                            </div>
                        </>
                    )}
                <br />
            </header>
        </div>
    );
}

export default Home;
