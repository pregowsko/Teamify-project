import React from "react";

import User from "../components/User";

import '../styles/UsersList.scss';

const UsersList = () => {
    
    return (
    <main className="main">
        <div className="wrapper">
            <div className="main_cards">
                <User />
            </div>
            <div className="main_amount-users">
                <label>
                    <p>Showing: 12/24</p>
                </label>
                <div className="main_amount-users_arrows">
                    <button className="main_amount-users_arrow--left"><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="main_amount-users_arrow--right"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </main>
    );
};

export default UsersList;