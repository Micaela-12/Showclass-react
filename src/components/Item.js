import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
    return (
        <div>
            <h3 className='h3'>Producto:</h3>
            <div className='productos_titulo'>{product.title}</div>
            <div className='productos'>{product.price}</div>
            <div className='productos'>{product.duration}</div>
            
            <Link className='productos_titulo' to={`/item/${product.id}`}>Detalles</Link>
        </div>

    )
}

export default Item