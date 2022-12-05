import React from 'react';
import { GithubContext } from '../context/context';

import '../styles/Header.scss';

const Search = () => {
    const [ user, setUser ] = React.useState("");
    const { searchGithubUser } = React.useContext(GithubContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            searchGithubUser(user);
        }
        console.log(user);
    };

    return (
        <>
            <form className="header_form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="header_form_input" 
                    placeholder="Search by Nickname" 
                    value={user} 
                    onChange={(e) => {
                        setUser(e.target.value)
                }}/>
                <button className="header_form_button" type="submit">Search</button>
            </form>
        </>
    );
};

export default Search;