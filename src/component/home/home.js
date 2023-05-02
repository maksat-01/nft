import React from 'react';
import image2 from "../../asstets/img/image2.png";

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home--general">
                    <div className="home--general__block">
                        <h1>The home of
                            <br/>fresh products</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum
                            has been the industry's <br/>standard dummy text ever since the 1500.</p>
                        <button>Learn about us</button>
                          </div>
                    <img src={image2} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Home;