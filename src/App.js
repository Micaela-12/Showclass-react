import './App.css'
import NavBar from './components/NavBar'
import ItemLisContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import CartContextProvider from '../src/components/CartContext'



const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemLisContainer />} />
        <Route path="/category/:id" element={<ItemLisContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path ="/Cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}


export default App;