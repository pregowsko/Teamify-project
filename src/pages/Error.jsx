import React from "react";
import { Link } from "react-router-dom";

import "../styles/Error.scss";

const Error = () => {
    return (
        <div className="error">
            <div className="error_wrapper">
                <h1 className="error_wrapper_title">404</h1>
                <h3 className="error_wrapper_info">Sorry, page not found!</h3>
                <Link to="/" className="error_wrapper_btn">back home</Link>
            </div>
        </div>
    );
};

export default Error;