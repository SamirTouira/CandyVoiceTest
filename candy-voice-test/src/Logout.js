import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('user-token');
        navigate("/");
        window.location.reload(false);
    }, [])
}

export default Logout;