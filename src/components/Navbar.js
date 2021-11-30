import React from "react";
import { Link } from 'react-scroll'
{/* <Link to='about' smooth={true} duration={3000}></Link>
<Link to='portfolio' smooth={true} duration={3000}> </Link>
<Link to='blog' smooth={true} duration={3000}> </Link>
<Link to='contact' smooth={true} duration={3000}></Link> */}
const Navbar = () => {
    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand text-danger fw-bold" href="#">Doob</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold " aria-current="page" href="#header">
                                    Home.
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="about" smooth={true} duration={2000}>
                                    About us.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="portfolio" smooth={true} duration={2000}>
                                    Portfolio.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="blog" smooth={true} duration={2000}>
                                    Blog.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="contact" smooth={true} duration={1000}>
                                    Contact us.
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link active fw-bold dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    En
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                            <button className="btn text-danger shadow bg-white fw-bold" type="submit">
                                Contact us &#8594;
                            

                        </button>

                    </div>
                </div>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
