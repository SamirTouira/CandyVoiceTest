import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-token')) {
            localStorage.removeItem('user-token');
            navigate("/");
            window.location.reload(false);
        }
    }, [])
}

export default Logout;