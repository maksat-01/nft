import React from 'react';
import icon from './../../asstets/img/icon.png'
import icon2 from './../../asstets/img/icon2.png'
import icon3 from './../../asstets/img/icon3.png'
import Slider from 'react-slick';

const Work = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
    };
    return (
        <section id="work">
            <div className="container">
                <div className="work--general">
                    <h1>How it works.</h1>
                    <Slider {...settings}>
                        <div>
                            <div className="work--general__block">
                                <img src={icon} alt="img"/>
                                <h2>Adapt your menu items</h2>
                                <p>Easily adapt your menu using the <br/>web-flow CMS and allow <br/>customers to browse your items.</p>
                            </div>
                        </div>
                        <div>
                            <div className="work--general__block">
                                <img src={icon2} alt="img"/>
                                <h2>Accept online orders & takeout</h2>
                                <p>Let your customers order and pay <br/>via the powerful ecommerce system, <br/>or simple let them call your store.</p>
                            </div>
                        </div>
                        <div>
                            <div className="work--general__block">
                                <img src={icon3} alt="img"/>
                                <h2>Manage delivery or takeout</h2>
                                <p>Manage your own logistics and <br/>take orders simply through the <br/>ecommerce system.</p>
                            </div>
                        </div>
                        <div>
                            <div className="work--general__block">
                                <img src={icon} alt="img"/>
                                <h2>Adapt your menu items</h2>
                                <p>Easily adapt your menu using the <br/>web-flow CMS and allow <br/>customers to browse your items.</p>
                            </div>
                        </div>
                        <div>
                            <div className="work--general__block">
                                <img src={icon2} alt="img"/>
                                <h2>Accept online orders & takeout</h2>
                                <p>Let your customers order and pay <br/>via the powerful ecommerce system, <br/>or simple let them call your store.</p>
                            </div>
                        </div>
                        <div>
                            <div className="work--general__block">
                                <img src={icon3} alt="img"/>
                                <h2>Manage delivery or takeout</h2>
                                <p>Manage your own logistics and <br/>take orders simply through the <br/>ecommerce system.</p>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Work;