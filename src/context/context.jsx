import React, { useEffect, useState } from "react";
import axios from "axios";

import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";

//const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
	const [repos, setRepos] = useState(mockRepos);
	const [followers, setFollowers] = useState(mockFollowers);

    const [ loading, setLoading ] = useState(false);

    //nfn named function
    /*const checkRequests = () => {
        axios(`${rootUrl}`)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    
    useEffect(checkRequests, []);*/
    const searchGithubUser = async (user) => {
        const response = await axios.get(`users/${user}`)
        .catch((err) => console.log(err))

        console.log(response);
        if(response){
            setGithubUser(response.data);
        }else {
            console.log('no such user');
        }
    };

    return  (
        <GithubContext.Provider value={{ githubUser, repos, followers, searchGithubUser }}>
            {children}
        </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };


