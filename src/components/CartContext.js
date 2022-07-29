import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCarList] = useState([]);


    const addToCart = (item, qty) => {
        setCarList([...cartList, {

            id: item.id,
            title: item.title,
            price: item.price,
            duration: item.duration,
            qty: qty
        }]);
    }

    const removeItem = (id) => {
        let nuevoEstado = cartList.filter(item => item.id !== id)
        setCarList(nuevoEstado)

    }
    const clear = () => {
        setCarList([])
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;