import React from 'react';
import image4 from "../../asstets/img/image4.png";

const Call = () => {
    return (
        <section id="call">
            <div className="container">
                <div className="call--general">
                    <div className="call--general__block">
                        <h1>Call our store and <br/>takeaway when it <br/>suits you best.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum
                            has been the industry's <br/>standard dummy text ever since the 1500.</p>
                        <button>Learn about us</button>
                    </div>
                    <img src={image4} alt="img"/>
                </div>
            </div>
        </section>

    );
};

export default Call;