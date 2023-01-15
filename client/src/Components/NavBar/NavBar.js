import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



function NavBar() {
    const auth = useSelector(state=>state); 


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        { auth.token.token !== ''?
                            <li className="nav-item">
                            <Link className="nav-link" to='/'>Home </Link>
                            </li>
                             : '' }
                             {  auth.token.token === ''? 
                            <li className="nav-item">
                            <Link className="nav-link" to='/signup'>Signup </Link>
                            </li>
                            :'' }
                            {  auth.token.token === ''? 
                            <li className="nav-item">
                            <Link className="nav-link" to='/login'>Login </Link>
                            </li>
                            :'' }
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
