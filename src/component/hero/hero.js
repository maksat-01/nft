import React from 'react';
import image from './../../asstets/img/IMAGE.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero--general">
                    <div className="hero--general__block">
                        <h1>Beautiful food <br/>& takeaway, <span>delivered </span><br/>to your door.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum
                            has been the industry's <br/>standard dummy text ever since the 1500.</p>
                        <button>Place an Order</button>
                        <div className="hero--general__block--line">
                            <div></div>
                            <h2>Trust pilot</h2>
                        </div>
                        <h3><span>4.8 out of 5</span>based on 2000+ reviews</h3>
                    </div>
                    <img src={image} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;