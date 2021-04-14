import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import SynthLogo from '../../components/imgs/SynthLogo.png'
import './Login.css'

export default function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validadeForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return(
        <>
            <div className="Login">
                <div className="logo">
                    <img id="logo-img" src={SynthLogo}/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            color="secondary"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            color="secondary"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            id="login-button"
                            variant="contained"
                            color="secondary"

                        >
                        Login
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}