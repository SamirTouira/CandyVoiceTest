import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Route, Router, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from './Login';


function Home() {
    const token = JSON.parse(localStorage.getItem("user-token"));
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    useEffect(() => {
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
                .catch(error => console.log(error));

            // if (!result.error) {
            //     localStorage.setItem("user-email", JSON.stringify(result.email));
            //     console.log(result);


            // } else {                   
            //     alert(result.error);
            // }
        }
    }, [])


    return (

        <><div className="Home">
            <header className="App-header">
                {localStorage.getItem("user-token") ? (
                    <>
                        {/* <Route exact path="/profile" component={Profile} /> */}
                        Hi {userInfo.email}!
                    </>)
                    : (
                        // <Redirect to="/login"/>
                        null
                    )}
                <h1>Welcome to my Candy Voice Test app!</h1>
            </header>
        </div></>
    );
}

export default Home;
