import React from 'react';
import logo from './../../asstets/img/Logo.svg'
import frame from './../../asstets/img/Frame.svg'

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header--general">
                    <img src={logo} alt="img"/>
                    <div className="header--general__block">
                        <h1>Home</h1>
                        <h1>Order</h1>
                        <h1>Company</h1>
                        <h1>FAQ</h1>
                        <h1>Contact</h1>
                        <img src={frame} alt="img"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;