import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from "../assets/empty_cart.svg"

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const subtotal = () => {
        let price = 0
        cart.forEach(item => {
            price += +((item.salePrice || item.originalPrice) * item.quantity).toFixed(2)
        })

        return price;
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">
                                Cart
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <div className="cart__book">Book</div>
                                <div className="cart__quantity">Quantity</div>
                                <div className="cart__total">Price</div>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        const finalPrice = (book.salePrice || book.originalPrice)
                                        const totalPrice = finalPrice * book.quantity
                                        return (
                                            <div className="cart__item">
                                                <div className="cart__book">
                                                    <img src={book.url} alt="" className="cart__book--img" />
                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">
                                                            {book.title}
                                                        </span>
                                                        <span className="cart__book--price">
                                                            ${finalPrice.toFixed(2)}
                                                        </span>
                                                        <button className="cart__book--remove" onClick={(_) => removeItem(book)}> Remove</button>
                                                    </div>
                                                </div>

                                                <div className="cart__quantity">
                                                    <input type="number" min={0} max={99} className="cart__input" value={book.quantity} onChange={(event) => changeQuantity(book, event.target.value)} />
                                                </div>

                                                <div className="cart__total">
                                                    ${totalPrice.toFixed(2)}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {cart.length === 0 && <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />

                                <h2>You don't have any books in your cart!</h2>
                                <Link to="/books">
                                    <button className="btn">Browse Books</button>
                                </Link>
                            </div>}
                        </div>
                        {cart.length > 0 && <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${subtotal()}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${(subtotal() * .0825).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${(subtotal() * 1.0825).toFixed(2)}</span>
                            </div>
                            <button className="btn btn__checout no-cursor" onClick={() => alert(`Have't gotten around to finishing this`)}>
                                Proceed to checkout
                            </button>
                        </div>}
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Cart;
