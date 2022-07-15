import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from '../componenets/UI/Book';
import Price from '../componenets/UI/Price';
import Rating from '../componenets/UI/Rating';

const Booksinfo = ({books}) => {
    const {id} = useParams();

    const book = books.find(book => +book.id === +id)

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/book">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>

                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book_-selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                                </div>

                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat incidunt atque omnis exercitationem! Eos, iure? Corrupti a nobis reiciendis itaque numquam dolor sit nihil commodi, neque accusantium rerum. Quas, delectus!
                                    </p>
                                    <p className="book__summar--para">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat incidunt atque omnis exercitationem! Eos, iure? Corrupti a nobis reiciendis itaque numquam dolor sit nihil commodi, neque accusantium rerum. Quas, delectus!
                                    </p>

                                    <button className="btn"> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {
                                books
                                .filter(book => book.rating === 5 && +book.id !== +id)
                                .slice(0,4)
                                .map(book => <Book book={book} key={book.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Booksinfo;