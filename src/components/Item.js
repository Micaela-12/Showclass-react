import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


const Item = ({ product }) => {
    const onAdd = (param) => {console.log(`la cantidad comprada es ${param}` )}

    return (
        <table className='caja'>
            <h3 className='h3'>Producto:</h3>
            <div className='productos_titulo'>{product.title}</div>
            <div className='productos'>{product.price}</div>
            <div className='productos'>{product.duration}</div>
            <div><Link className='header__boton' to={`/item/${product.id}`}>Ver en detalle</Link></div>
</table>
    )
}

export default Item