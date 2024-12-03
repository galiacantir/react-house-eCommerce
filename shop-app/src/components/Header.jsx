import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
        
    return ( 
    <div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key = {el.id} item={el}/>
        ))}
        <p  className='summa'>Total: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
    )
}

const showNothing = () => {
    return(
        <div className="empty-cart">
            <p> Non ci sono prodotti</p>
        </div>
    )
}

function Header(props){
    let [cartOpen, setCartOpen] = useState(false);
    return(
        <>
            <header>
                <div>
                    <span className="logo">Smart House</span>
                    <ul className="nav">
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
                    

                    {cartOpen && (
                        <div className="shop-cart">
                            {props.orders.length > 0 ? 
                                showOrders(props) : showNothing()}
                        </div>
                    )}
                </div>
                <div className="presentation">
                    <h2>Products that will make your <br/>Home smarter</h2>
                </div>
            </header>
        </>
    )
}

export default Header