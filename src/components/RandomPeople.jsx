import React, { useEffect, useState } from "react";
import Axios from "axios";


const RandomPeople = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        Axios.get("https://api.github.com/user").then((res) => {
            setUser(res.data.id);
        });
    }, []);
    
    return (

    );
};

export default RandomPeople;