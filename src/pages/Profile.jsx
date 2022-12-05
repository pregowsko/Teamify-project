import React from "react";

import { GithubContext } from "../context/context";

const Profile = () => {
    const { githubUser } = React.useContext(GithubContext);
    const { public_repos, followers, following, name, login, url, avatar_url } = githubUser;
    return (
        <h2>Profile</h2>
    );
    
};

export default Profile;