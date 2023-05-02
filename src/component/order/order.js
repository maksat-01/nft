import React from 'react';
import image3 from "../../asstets/img/image3.png";

const Order = () => {
    return (
        <section id="order">
            <div className="container">
                <div className="order--general">
                    <img src={image3} alt="img"/>

                    <div className="order--general__block">
                        <h1>Order online with <br/>our simple checkout.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum
                            has been the industry's <br/>standard dummy text ever since the 1500.</p>
                        <button>Learn about us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;