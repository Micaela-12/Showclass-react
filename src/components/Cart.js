import { useContext } from "react"
import { CartContext } from './CartContext'
import { Link } from "react-router-dom"
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"



const Cart = () => {
  const test = useContext(CartContext)
  const createOrder = () => {
    let itemsForDB = test.cartList.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.quantity
    }))
    let order = {
      buyer: {
        email: "micaela@hotmail.com",
        name: "Micaela",
        phone: "1133556688",
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: test.totalPrice(),
    }
    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }
    createOrderInFirestore()
      .then(result => alert('tu pedido se creo con exito!, NUEMERO DE SEGUIMIENTO' + result.id))
      .catch(e => console.log(e))

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, 'products', item.id)
      await updateDoc(itemRef, {
        stock: increment(-item.quantity)
      })
    });
    // borrar carrito 
    test.clearCart()
  }
  return (
    <>
      <div>
        <div>
          <h2 className="h3">Carrito de compras</h2>
          <div className="carrito">No hay productos en el carrito</div>
          <div>
                  <Link to="/"><button className="greating" >Seguir comprando</button></Link>
                </div>
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
                <p className="productos">valor total: ${item.price * item.quantity}</p>
                <button href="#" className="greating" onClick={() => test.removeProduct(item.id)}>Eliminar producto</button>
              </div>
            </div>

          ))
        }
        <div>
          {
            (test.cartList.length > 0)
              ? <>
               
                <div className="col ">
                  <h5 className="productos_titulo">Total: ${test.totalPrice()}</h5>
                </div>
              </>
              : <div>
                <div><Link to="/"><button className="greating" >Seleccionar productos</button></Link></div>
              </div>
          }

        </div>
      </div>
      <div>
        <button href="#" className="greating" onClick={() => test.clearCart()}>Eliminar Carrito</button>
      </div>
      <button className="h3" onClick={createOrder}>Finalizar compra!</button>
    </>
  )
}
export default Cart