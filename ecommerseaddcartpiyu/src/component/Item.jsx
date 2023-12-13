import React , {useContext} from "react";
import { CartContext } from "../context/Cart";
//import React  from "react"; //for useCart
// import {useCart} from ",,/context/Cart";

const Item = (props) => {
    const cart = useContext(CartContext);
    // const cart  = useCart();

    console.log ("Cart", cart);
    return (
        <div className="item-card">
         {/* <h4>Item Name</h4>
         <p>Price: $10</p> */}
         <h4>{props.name}</h4>
         <p>Price: ${props.price}</p>
         <button onClick ={() => cart.setItems([...cart.items , {name:props.name , price:props.price},]) 
        }>Add to cart</button>
            </div>
    );
};

export default Item;