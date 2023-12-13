import React , {useContext} from "react";
//import React  from "react"; //for useCart
// import {useCart} from ",,/context/Cart";

import { CartContext } from "../context/Cart";

const Cart =  () => {
    const cart = useContext(CartContext);
    // const cart  = useCart();

    const total = cart.items.reduce((a,b) =>a + b.price , 0)
    return (
        <div className = "cart">
           {/* <li>MacbookPrp - $100000</li> */}
           <h1> Cart </h1>
           {
            cart && cart.items.map((item) => (
                <li>
                    {item.name} - ${item.price}
                </li>
            ))
           }
           <h5>Total Bill : ${total}</h5> 
        </div>
    );
};

export default Cart;
