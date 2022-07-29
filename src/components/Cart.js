import { useContext } from 'react'
import { CartContext } from './CartContext'



const Cart = () => {
  const test = useContext(CartContext)
  console.log(test.cartList)

  return (

    test.cartList.length > 0 && test.cartList.map(item => (

      <>
        <div><button className='greating' onClick={test.clear}>Borrar todos los productos</button></div>;

        <p className='productos'> catidad de productos:{item.qty}</p>
        <p className='productos'>Id del producto:{item.id}</p>
        <p className='productos_titulo'>Titulo del producto: {item.title}</p>
        <p className='productos'>Precio del producto: {item.price}</p>
        <p className='productos'>Duracion {item.duration}</p>



        <div><button className='greating' onClick={() => test.removeItem(item.id)}>Borrar producto</button></div>
      </>

    )
    )
  )
}



export default Cart