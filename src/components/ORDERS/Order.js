import React from 'react';
import useCart from '../../hooks/UseCarts';
import useProducts from '../../hooks/useProduct';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='shop-container'>

        </div>
    );
};

export default Order;