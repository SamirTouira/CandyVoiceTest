import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <Navbar style={{ backgroundColor: "red" }} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Candy Voice Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <>
                            {localStorage.getItem("user-token") ? (
                                <>
                                    <Nav.Link href="/voices" > My voices</Nav.Link>
                                    <Nav.Link href="/profile" > Profile</Nav.Link>
                                    <Nav.Link onClick={() => {
                                        if (window.confirm("Are you sure?")) {
                                            navigate('/logout')
                                        } else {
                                            return;
                                        }
                                    }} > Logout</Nav.Link>
                                </>)
                                : (
                                    // <Redirect to="/login"/>
                                    <Nav.Link href="/login" > Login</Nav.Link>
                                )}
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
