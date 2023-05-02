import React from 'react';
import burger from './../../asstets/img/burger.png'
import burger2 from './../../asstets/img/burger2.png'
import burger3 from './../../asstets/img/burger3.png'
import burger4 from './../../asstets/img/burger4.png'
import burger5 from './../../asstets/img/burger5.png'
import burger6 from './../../asstets/img/burger6.png'

const Menu = () => {
    return (
        <section id="menu">
            <div className="container">
                <div className="menu--general">
                    <h1>Browse our menu</h1>
                    <p>Use our menu to place an order online, or <span>phone</span> our store <br/>to place a pickup
                        order. Fast and fresh food.</p>
                    <div className="menu--general__block">
                        <label htmlFor="html"><button>Burgers</button></label>
                        <label htmlFor="css"><button>Sides</button></label>
                        <label htmlFor="js"><button>Drinks</button></label>
                    </div>

                    <div className="menu--general__tabs">

                        <input type="radio" name="tabs" id="html"/>
                        <input type="radio" name="tabs" id="css"/>
                        <input type="radio" name="tabs" id="js"/>

                        <div className="menu--general__tabs--block">
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger4} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger2} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger5} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger3} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger6} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                        </div>
                        <div className="menu--general__tabs--block2">
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger div Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                        </div>
                        <div className="menu--general__tabs--block3">
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                            <div className="menu--general__tabs--title">
                                <img src={burger} alt="img"/>
                                <div className="menu--general__tabs--title__icon">
                                    <div className="menu--general__tabs--title__icon--click">
                                        <h2>Burger Dreams</h2>
                                        <span>$ 9.20 USD</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.
                                    </p>
                                    <span className="menu--general__tabs--title__icon--span">1</span>
                                    <button className="menu--general__tabs--title__icon--btn">Add to card</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="menu--general__btn">
                        <button>See Full Menu</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;