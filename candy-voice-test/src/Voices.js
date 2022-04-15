import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Voices() {
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("user-token"));
    const userVoices = JSON.parse(localStorage.getItem("user-voices"));
    useEffect(() => {
        if (localStorage.getItem('user-token')) {
            console.log(userVoices)
            fetch("https://api.candyvoice.com/v1.0/voices", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "JWT " + token.jwt_token
                }
            })
                .then(response => response.json())
                .then(response => localStorage.setItem("user-voices", JSON.stringify(response)))
                .catch(error => console.log(error));

            // if (!result.error) {
            //     localStorage.setItem("user-email", JSON.stringify(result.email));
            //     console.log(result);


            // } else {                   
            //     alert(result.error);
            // }
        } else {
            navigate("/");
        }
    }, [])

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>My voices</h1>

            
                {userVoices.map((voice) => 
                <ul key={voice.id}>
                <li>{ voice.name.toUpperCase()}</li>
                <li><small>Language: </small>{ voice.language }</li>
                </ul>
                )}
       
        </div>
    )
}

export default Voices;