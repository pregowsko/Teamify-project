import React, { useState } from 'react';

import Navigation from './Navigation';
import Search from './Search';

import '../styles/Header.scss';

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="header_wrapper">
                    <Navigation />
                </div>
                <div className='header_line'></div> 
                <div className="header_title">
                    <p>Meet your future team!</p>
                </div> 
                <Search />
            </header>
        </>
    );
};

export default Header;