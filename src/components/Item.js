import React from 'react'


const Item = ({ product }) => { 
    return (
     <div>
        <h3 className='h3'>Producto:</h3>
<div className='productos_titulo'>{product.title}</div>
<div className='productos'>{product.price}</div>
<div className='productos'>{product.duration}</div>
<div className='productos'>{product.imag}</div>

    </div>
    )
}
export default Item