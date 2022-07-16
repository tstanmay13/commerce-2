import React from 'react';
import { Link } from 'react-router-dom';
import books from '../assets/Undraw_Books.svg'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1> America's most awarded online library platform</h1>
                        <h2>Find your dream book with <span className="purple">LIbrary</span></h2>
                        <a href="#features">
                            <button className="btn"> Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__image--wrapper">
                        <img src={books} alt="" />
                    </figure>


                </div>
            </header>
        </section>
    );
}

export default Landing;
