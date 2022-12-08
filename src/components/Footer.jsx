import React from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.scss";


const Footer = () => {
    //const { githubUsers } = React.useContext(GithubContext);
    //const { name, login, url, avatar_url, id } = githubUsers;

    return (
        <footer className="footer">
            <div className="footer_wrapper">
                <div className="footer_wrapper_subscribe-section">
                    <div className="footer_wrapper_subscribe-section_title">
                        Subscribe to get instant alerts
                    </div>
                    <div className="footer_wrapper_subscribe-section_info">Don't wanna more something? Subscribe right more and get special offers and monthly newsletter.
                    </div>
                    <form className="footer_wrapper_subscribe-section_form">
                        <input 
                            type="text" 
                            className="footer_wrapper_subscribe-section_form_input" 
                            placeholder="Enter your email address"
                        />
                        <button className="footer_wrapper_subscribe-section_form_button">Subscribe</button>
                    </form>
                </div>
                <div className="footer_wrapper_copyright-section">
                    <Link to="/" className="footer_wrapper_copyright-section_logo">&copy;Teamify</Link>
                    <p className="copyright-section_teamify">Copyright &copy; Teamify</p>
                    <a className="copyright-section_twitter" href=""><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;