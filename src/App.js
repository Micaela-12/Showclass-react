import './App.css'
import NavBar from './components/NavBar'
import ItemLisContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'



function App() {
  return (
    <div className="App">
     <NavBar />
      <div className='ItemDetailContainer'> 
        <p className='tituloDetail'>*Nuestro producto estrella*</p>
      <ItemDetailContainer />
      </div>
     <ItemLisContainer />
</div>
  );
}


export default App;
