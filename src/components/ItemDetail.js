import React from 'react'
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../components/CartContext'


const ItemDetail = ({ item }) => {
    const [CarritoCompra, setCarritoCompra] = useState(false);
    const test = useContext(CartContext)

    const onAdd = (qty) => {
        setCarritoCompra(qty)
        test.addToCart(item, CarritoCompra)
    }
    return (<>
        <div>
            <p className='h3'>Producto</p>
            <h2 className='productos_titulo'>{item.title}</h2>
            <p className='productos'>{item.price}</p>
            <p className='productos'>{item.duration}</p>
            {
                CarritoCompra
                    ? <Link className='productos' to='/Cart'>Terminar la compra</Link>
                    : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />

            }
        </div>
    </>

    )

}

export default ItemDetail