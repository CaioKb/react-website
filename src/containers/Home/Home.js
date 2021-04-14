import React from 'react'
import SynthLogo from '../../components/imgs/SynthLogo.png'

import './Home.css'

export default function Home() {

    return (
        <>
            <body>
                <header className="top-layer">
                    <div className="logo">
                        <img id="logo-img" src={SynthLogo} />
                    </div>
                    <nav>
                        <div className="menu">
                            <ul>
                                <li> <a href="">Home</a> </li>
                                <li> <a href="">Information</a> </li>
                                <li> <a href="">Log In</a> </li>
                                <li> <a href="">Register</a> </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="main-layer">
                        <h1>Welcome to the Synthwave Website!</h1>
                    </div>
                </main>

                <footer className="page-footer">

                </footer>
            </body>
        </>
    );
}