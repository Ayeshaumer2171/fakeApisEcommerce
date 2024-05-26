import React, { useEffect, useState } from 'react';
import image from './cart2.png';
import { Link } from 'react-router-dom';
import './Cart.css'; // Import CSS for styling


function Cart({ cartItems, removeItem }) {
    const [itemQuantities, setItemQuantities] = useState({});

    useEffect(() => {
        const initialQuantities = {};
        cartItems.forEach((item) => {
            initialQuantities[item.id] = 1;
        });
        setItemQuantities(initialQuantities);
    }, [cartItems]);

    const handleIncrement = (itemId) => {
        setItemQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[itemId] = (prevQuantities[itemId] || 0) + 1;
            return updatedQuantities;
        });
    };

    const handleDecrement = (itemId) => {
        setItemQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[itemId] = Math.max((prevQuantities[itemId] || 0) - 1, 0);
            if (updatedQuantities[itemId] === 0) {
                removeItem(itemId);
                delete updatedQuantities[itemId];
            }
            return updatedQuantities;
        });
    };

    const handleRemove = (itemId) => {
        removeItem(itemId);
        setItemQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[itemId];
            return updatedQuantities;
        });
    };

    const totalPrices = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            const quantity = itemQuantities[item.id] || 0;
            totalPrice += item.price * quantity;
        });
        return totalPrice;
    };

   


    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <table className="cart-items-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length ? (
                        cartItems.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.title} width={100} /></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleDecrement(item.id)}>-</button>
                                        <span>{itemQuantities[item.id] || 0}</span>
                                        <button onClick={() => handleIncrement(item.id)}>+</button>
                                    </div>
                                </td>
                                <td><button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">
                                <h3>Cart is empty</h3>
                                <img src={image} alt="Empty Cart" />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="cart-summary">
                <p className="total-price">Total Price: RS {totalPrices()}</p>
            </div>

        </div>
    );
}

export default Cart;
