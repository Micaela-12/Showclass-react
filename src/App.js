import './App.css'
import NavBar from './components/NavBar'
import ItemLisContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemLisContainer />} />
        <Route path="/category/:id" element={<ItemLisContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <ItemDetailContainer />
    </BrowserRouter>

  
  );
}


export default App;
