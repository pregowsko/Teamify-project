import React from "react";

import Header from "../components/Header";
import UsersList from "../components/UsersList";
import Footer from "../components/Footer";


const Dashboard = () => {

    return (
        <>
            <Header />
            <UsersList />
            <Footer />
        </>
    );
};

export default Dashboard;