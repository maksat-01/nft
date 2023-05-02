import React from 'react';
import logo from './../../asstets/img/Logo.svg'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer--general">
                    <div className="footer--general__block">
                        <img src={logo} alt="img"/>
                        <p>Takeaway & Delivery template
                            <br/> for small - medium businesses.</p>
                    </div>
                    <div className="footer--general__company">
                        <h1>COMPANY</h1>
                        <p>Home</p>
                        <p>Order</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                    <div className="footer--general__template">
                        <h1>TEMPLATE</h1>
                        <p>Style Guide</p>
                        <p>Changelog </p>
                        <p>Licence</p>
                        <p>Web-flow University</p>
                    </div>
                    <div className="footer--general__flow">
                        <h1>FLOW-BASE</h1>
                        <p>More Cloneables</p>
                    </div>
                </div>
                <div className="footer--title">
                    <h1>Built by<span> Flow-base</span>Powered by<span>Web-flow</span></h1>
                    <div className="footer--title__block">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-telegram"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;