import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GithubContext } from "../context/context";

import "../styles/UsersList.scss";


const User = () => {
    const { githubUser } = React.useContext(GithubContext);
    const { name, login, url, avatar_url } = githubUser;

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ usersPerPage, setUsersPerPage ] = useState(12);

    return (
        <>
            <Link to="/" className="main_cards_card" >
                <img src={avatar_url} className="main_cards_card_img" />
                <p className="main_cards_card_name">{name}</p>
                <p className="main_cards_card_nickname">{login}</p>
            </Link>
        </>
    );
};

export default User;