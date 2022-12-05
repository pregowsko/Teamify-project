import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import '../styles/Header.scss';

const Navigation = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default Navigation;