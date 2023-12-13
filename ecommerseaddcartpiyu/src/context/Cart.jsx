import { createContext , useState } from "react";
// import  {useContext , createContext , useState} from "react";  // this is for useCart make own hook use 
 
// export const useCart = () => {
//     const cart = useContext(CartContext);
//     return cart;
// };
export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items,setItems] = useState([]);
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}