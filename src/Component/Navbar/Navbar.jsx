import React from 'react'
import coffeemuglogo from '../../assests/coffee-mug_logo.png'
import '../Navbar/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={coffeemuglogo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="link-warning nav-link active  "  aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active link-warning" href="/">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active link-warning" href="/">Investor List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active link-warning" href="/">Startups</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active link-warning" href="/">Mentors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active link-warning" href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active link-warning" href="/">Download App</a>
                        </li>
                        <li className="nav-item">
                            <button class="btn btn-outline-orange">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
