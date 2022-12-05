import React from "react";
import { Link } from "react-router-dom";

import "../styles/Error.scss";

const Error = () => {
    return (
        <div className="error">
            <h1 className="error_title">404</h1>
            <h3 className="error_info">Sorry, page not found!</h3>
            <Link to="/" className="error_btn">back home</Link>
        </div>
    );
};

export default Error;