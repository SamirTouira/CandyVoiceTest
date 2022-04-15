import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Route, Router, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from './Login';


function Home() {
    return (

        <><div className="Home">
            <header className="App-header">
                {localStorage.getItem("user-token") ? (
                    <>
                        {/* <Route exact path="/profile" component={Profile} /> */}
                        Hi user!
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
