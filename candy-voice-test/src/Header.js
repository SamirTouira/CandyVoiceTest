import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";
import { Link, Router } from "react-router-dom";
import App from "./App";
import './App.css';
import Login from "./Login";

function Header() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Candy Voice Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <>
                {localStorage.getItem("user-token") ? (
                    <>
                        {/* <Route exact path="/profile" component={Profile} /> */}
                        <Nav.Link href="/logout" > Logout</Nav.Link>
                    </>)
                    : (
                        // <Redirect to="/login"/>
                        <Nav.Link href="/login" > Login</Nav.Link>
                    )}
                </>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
  }
  
  export default Header;
  