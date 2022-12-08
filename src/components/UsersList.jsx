import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

//import User from "./User";

import '../styles/UsersList.scss';

//<button className="main_amount-users_arrow--right"><i className="fa-solid fa-arrow-right"></i></button>
//<button className="main_amount-users_arrow--left"><i className="fa-solid fa-arrow-left"></i></button>

const UsersList = () => {
    const [ users, setUsers ] = useState([]);
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ currentUsers ] = useState(12);
    const pagesVisited = pageNumber * currentUsers;
    const totalUsers = users.length;
    const currentUsersPerPage = currentUsers * (pageNumber + 1)

    
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('https://api.github.com/users');
            setUsers(res.data);
        }
        
        fetchUsers();
    }, []);
    console.log(users);

    const displayUsers = users.slice(pagesVisited, pagesVisited + currentUsers).map(user => {
        return (
            <Link to={user.url} key={user.id} className="main_cards_card">
                <img src={user.avatar_url} className="main_cards_card_img" />
                <p className="main_cards_card_name"></p>
                <p className="main_cards_card_nickname">{user.login}</p>
            </Link>
        );
    });

    const handlePrePage = () => {
        if(pageNumber>=1){
            setPageNumber(pageNumber-1);
        };
    };

    const handleNextPage = () => {
        if(pageNumber<=1){
            setPageNumber(pageNumber+1)
        };
    };

    return (
    <main className="main">
        <div className="wrapper">
            <div className="main_cards">
                {displayUsers}
            </div>
            <div className="main_amount-users">
                <label>
                    <div> <p>Showing: {currentUsersPerPage}/{totalUsers}</p></div>
                </label>
                <div className="main_amount-users_arrows">
                    <button onClick={handlePrePage}className="main_amount-users_arrow--left"><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={handleNextPage}className="main_amount-users_arrow--right"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </main>
    );
};

export default UsersList;