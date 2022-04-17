import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const token = JSON.parse(localStorage.getItem("user-token"));
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == null || email == "") {
            alert("Please fill an address mail");
            return false;
        }
        else {
            let item = { email };
            fetch("https://api.candyvoice.com/v1.0/users/me", {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "JWT " + token.jwt_token
                },
                body: JSON.stringify(item)

            }).then((result) => {
                result.json().then((response) => {
                    if (result.ok) {
                        localStorage.setItem("update-response", JSON.stringify(response));
                        alert("Email successfully updated!");
                        navigate('/')
                        window.location.reload(false);
                    } else {
                        alert(response[0].msg);
                    }
                }).catch(err => alert(err));
            });

        }
    }


    return (
        <>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <h1>Profile</h1>
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <p style={{ marginBottom: '24px' }}><strong>Email: {userInfo.email}</strong></p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your current email account</Form.Label>
                                    <Form.Control type='email' onChange={(e) => { setEmail(e.target.value) }} defaultValue={token ? userInfo.email : ""} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;