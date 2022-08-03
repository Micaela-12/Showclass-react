import { useContext } from "react"
import { CartContext } from './CartContext'
import { Link } from "react-router-dom"

const Cart = () => {
  const test = useContext(CartContext)

  return (
    <>
      <div>
        <div>
          <h2 className="h3">Carrito de compras</h2>
        </div>

        {

          test.cartList.length > 0 && test.cartList.map(item => (

            <div>
              <div>
              </div>
              <div >
                <h5 className="productos_titulo">{item.title}</h5>
                <p className="productos">{item.duration}</p>
                <p className="productos">Valor: ${item.price}</p>

                <p className="productos_titulo">cantidad: {item.quantity}</p>
                <p className="productos">Total: ${item.price * item.quantity}</p>
                <button href="#" className="greating" onClick={() => test.removeProduct(item.id)}>Eliminar producto</button>
              </div>
            </div>

          ))
        }
        <div>
          {
            (test.cartList.length > 0)
              ? <>
                <div>
                  <button href="#" className="greating" onClick={() => test.clearCart()}>Eliminar Carrito</button>
                </div>
                <div>
                  <Link to="/"><button className="greating" >Seguir comprando</button></Link>
                </div>
                <div>
                  <button href="#" className="greating" onClick={() => test.clearCart()}>Finalizar Compra</button>
                </div>
                <div className="col ">
                  <h5 className="productos_titulo">Total: ${test.totalPrice()}</h5>
                </div>
              </>
              : <div>
                <span>Carrito Vacío...</span>
                <div><Link to="/"><button className="greating" >Seguir comprando</button></Link></div>
              </div>
          }

        </div>
      </div>

    </>
  )
}


export default Cart