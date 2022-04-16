import React from 'react';
import { useNavigate } from "react-router-dom";
import proLogo from './assets/logos/pro-logo.png'

function VoiceDetail() {
    const token = JSON.parse(localStorage.getItem("user-token"));
    const voiceDetail = JSON.parse(localStorage.getItem("voice-detail"));
    const navigate = useNavigate();

    return (
        <>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <h1>Voice detail</h1>
                <br />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p>Name : {voiceDetail.name}</p>
                        <p>Type : {voiceDetail.type}</p>
                        <p>Language : {voiceDetail.language.toUpperCase()}</p>
                        <p>Purpose : {voiceDetail.purpose.toUpperCase()}</p>
                    </div>
                    <div className="col-sm">
                        {
                            voiceDetail.isPro ? (
                                <>
                                    <img src={proLogo} alt="Pro logo" height={40} width={40} />
                                </>)
                                : (
                                    null
                                )
                        }
                    </div>
                    <div className="col-sm">
                        <a onClick={() => navigate(-1)} className='btn btn-dark'>Back</a>
                    </div>
                </div>
            </div>


        </>
    )
}


export default VoiceDetail;