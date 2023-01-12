import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to='/'>Home </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/signup'>Signup </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/login'>Login </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar