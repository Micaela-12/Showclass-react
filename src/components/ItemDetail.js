import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useState, useContext  } from "react"
import { CartContext} from './CartContext'

const ItemDetail =({item})=>{
    
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)
    

    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity + ' items');
        setItemCount(quantity);
        test.addToCart(item, quantity);

        }
    

    

    return(

    <div>
        <div>
        </div>
            <div>
            <h1 className="productos_titulo">{item.title}</h1>
            <h2 className="productos">{item.duration}</h2>
            <p className="productos">{item.price}</p>
            <div>
                {itemCount ===0 
                ?<ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                :<Link to='/Cart'><button className="greating">Terminar mi Compra</button></Link>
            }
                
            </div>
            

        </div>
        
    </div>
    )
}
 
export default ItemDetail