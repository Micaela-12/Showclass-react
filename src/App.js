import './App.css'
import NavBar from './components/NavBar'
import ItemLisContainer from './containers/ItemListContainer'



function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemLisContainer  greating="Nuestra lista de shows!"/>
</div>
  );
}


export default App;
