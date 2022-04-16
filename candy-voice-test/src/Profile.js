import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Profile() {
    const token = JSON.parse(localStorage.getItem("user-token"));
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (token) {

    //         fetchVoicesList();
    //     } else {
    //         navigate('/');
    //     }

    // }, [])


    return (
        <div className="col-sm-6 offset-sm-3">
        <br />
        <h1>Profile</h1>
        <br />
    </div>
    )
}

export default Profile;