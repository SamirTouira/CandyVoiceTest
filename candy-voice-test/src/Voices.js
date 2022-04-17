import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import proLogo from './assets/logos/pro-logo.png'

function Voices() {
    const token = JSON.parse(localStorage.getItem("user-token"));
    const navigate = useNavigate();
    const userVoices = JSON.parse(localStorage.getItem("user-voices"));
    useEffect(() => {
        if (token) {
            fetchVoicesList();
        } else {
            navigate('/');
        }
    }, [])

    async function fetchVoicesList() {
        let result = await fetch("https://api.candyvoice.com/v1.0/voices", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "JWT " + token.jwt_token
            }

        });
        result = await result.json();
        if (!result.error) {
            localStorage.setItem("user-voices", JSON.stringify(result));
            navigate('/voices')
        } else {
            alert(result.error);
        }
    }

    async function fetchVoiceDetail(voiceId) {
        let result = await fetch("https://api.candyvoice.com/v1.0/voices/" + voiceId, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "JWT " + token.jwt_token
            }

        });

        result = await result.json();
        if (!result.error) {
            localStorage.setItem("voice-detail", JSON.stringify(result));
            navigate("/voice/" + voiceId)

        } else {
            alert(result.error);
        }
    }

    return (
        <>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <h1>My voices ({userVoices.length})</h1>
                <br />
            </div>

            {userVoices.map((voice) =>
                <ul key={voice.id}>

                    <div className="container">
                        <div className="row">

                            <div className="col-sm">
                                <li>{voice.name.toUpperCase()}</li>
                                <li><small>Language: </small>{voice.language}</li>
                            </div>
                            <div className="col-sm">
                                {
                                    voice.isPro ? (
                                        <>
                                            <img src={proLogo} alt="Pro logo" height={40} width={40} />
                                        </>)
                                        : (
                                            null
                                        )
                                }
                            </div>
                            <div className="col-sm">
                                <button onClick={() => fetchVoiceDetail(voice.id)} className='btn btn-success'>View</button>
                                <br />
                            </div>
                            <hr style={{ marginTop: '24px' }} />
                        </div>
                    </div>
                </ul>
            )}
        </>
    )
}

export default Voices;