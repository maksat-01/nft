import React from 'react';
import image5 from './../../asstets/img/image5.png'
import image7 from './../../asstets/img/image7.png'

const Food = () => {
    return (
        <section id="food">
            <div className="container">
                <div className="food--general">
                    <img src={image5} alt="img"/>
                    <img src={image7} alt="img"/>

                </div>
            </div>
        </section>
    );
};

export default Food;