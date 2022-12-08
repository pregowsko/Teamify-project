import React from 'react';
import { GithubContext } from '../context/context';

import '../styles/Header.scss';

const Search = () => {
    const [ users, setUsers ] = React.useState("");
    const { searchGithubUser } = React.useContext(GithubContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users) {
            searchGithubUser(users);
        }
        console.log(users);
    };

    return (
        <>
            <form className="header_form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="header_form_input" 
                    placeholder="Search by Nickname" 
                    value={users} 
                    onChange={(e) => {
                        setUsers(e.target.value)
                }}/>
                <button className="header_form_button" type="submit">Search</button>
            </form>
        </>
    );
};

export default Search;