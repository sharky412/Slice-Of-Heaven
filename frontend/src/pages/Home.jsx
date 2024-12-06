
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Navbar from "../components/Navbar";
import { getAllPizzas } from '../services/pizza';
import { addItem, removeItem } from '../features/cartSilce';
import config from '../config';

// Pizza component
export function Pizza({ item }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // Check if the item is already in the cart
    const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    const getTitle = () => {
        return item && item.name.length > 20
            ? item.name.substring(0, 20) + '...'
            : item
            ? item.name
            : '';
    };

    const getDetails = () => {
        return item && item.details.length > 70
            ? item.details.substring(0, 70) + '...'
            : item
            ? item.details
            : '';
    };

    const addItemToCart = () => {
        if (item) {
            dispatch(addItem({ ...item, quantity: 1 }));
            toast.success(`${item.name} added to cart!`);
        }
    };

    const removeItemFromCart = () => {
        if (item) {
            dispatch(removeItem({ itemId: item.id }));
            toast.info(`${item.name} removed from cart!`);
        }
    };

    return (
        <div className="pizza-card">
            <img
                className="card-img-top"
                src={`${config.server}/${item.image}`}
                alt={item.name || 'Pizza'}
            />
            <div className="card-body">
                <h5 className="card-title">{getTitle()}</h5>
                <div className="card-text">{getDetails()}</div>
                <div className="price">Price: ₹{item?.price}</div>
                {isInCart ? (
                    <button
                        onClick={removeItemFromCart}
                        className="btn btn-danger"
                    >
                        Remove from Cart
                    </button>
                ) : (
                    <button onClick={addItemToCart} className="btn btn-info">
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}
// Home component
export function Home() {
    const [items, setItems] = useState([]);

    const loadAllPizzas = async () => {
        const result = await getAllPizzas();
        if (result['status'] === 'success') {
            setItems(result['data']);
        } else {
            toast.error(result['error']);
        }
    };

    useEffect(() => {
        loadAllPizzas();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Welcome to the Pizza Shop</h1>
                <div className="row">
                    {items.length ? (
                        items.map(item => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item['id']}>
                                <Pizza item={item} />
                            </div>
                        ))
                    ) : (
                        <p>No pizzas available</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;

