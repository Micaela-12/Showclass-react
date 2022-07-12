import React, { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd}) => {

   const [counter, setCounter] = useState(initial)
const add = () => {
    if( counter < stock ){
        const aux = counter+1
        setCounter(aux)
    }else {
        console.log("No hay mas stock");
    }
}
const subtract =() => {
    if (counter > initial){
        const aux = counter-1
        setCounter(aux)
    } else {
        console.log("No hay mas stock");
    }
}
    return (
        <div className="contenedor__contador">
            <div>
                <button className="header__boton" onClick={subtract}>-</button>
                <p>{counter}</p>
                <button className="header__boton" onClick={add}>+</button>
            </div>
            <button className="header__boton" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount