import React, {useState, useEffect} from 'react' 

const ItemCount =({stock = 0, initial = 1, onAdd})=>{
    
const [quantity, setQuantity] =useState (parseInt(initial));
    
    const decrement =()=>{
       if (quantity>1){
       setQuantity(quantity-1)}
    }
    const increment =()=>{
        if (quantity<stock){
            setQuantity(quantity+1)
    }}


    return(
    <>
    <button className="header__boton" onClick={decrement}>-</button>
    <span >{quantity}</span>
    <button className="header__boton" onClick={increment}>+</button>
    {quantity&&stock
    ? <button  className="header__boton" onClick={()=> onAdd(quantity)}>Agregar al Carrito</button>
    :<button  className="header__boton" disabled>Agregar al Carrito</button>
}
    </>
)}

export default ItemCount 