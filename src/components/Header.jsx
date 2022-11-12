import React from 'react';
import {BrowserRouter, Link } from 'react-router-dom';

import '../styles/Header.scss';

const Header = () => {
    return (
        <BrowserRouter>
            <header className="header">
                <div className="header_wrapper">
                    <Link to="/" className="header_logo">
                        <p>Teamify</p>
                    </Link>
                    <nav className="header_menu">
                        <ul className="header_menu_list">
                            <li className="header_menu_listItem">
                                <Link to="/freelancers">Freelancers</Link>
                            </li>
                            <li className="header_menu_listItem">
                                <Link to="/aboutus">About Us</Link>
                            </li>
                            <li className="header_menu_listItem">
                                <Link to="/casestudy">Case Study</Link>
                            </li>
                            <li className="header_menu_listItem">
                                <Link to="/reviews">Rewievs</Link>
                            </li>
                            <li className="header_menu_listItem">
                                <Link to="/newsletter">Newsletter</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header_line'></div> 
                <div className="header_title">
                    <p>Meet your future team!</p>
                </div> 
                <form action="" className="header_form">
                    <input type="text" className="header_form_input" placeholder="Search by Nickname"/>
                    <button className="header_form_button">Search</button>
                </form>
            </header>
        </BrowserRouter>
    );
};

export default Header;