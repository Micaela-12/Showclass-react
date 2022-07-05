import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__TitleIndex">Showclass Producciones!</h1>
        <nav className="header__contenedor">
          <ul>
          <li><button type="button" className= "header__color">Inicio</button></li>
          <li><button type="button" className= "header__color">15 años</button></li>
          <li><button type="button" className= "header__color">Casamiento</button></li>
          <li><button type="button" className= "header__color">Cooporativo</button></li>
          <li><button type="button" className= "header__color">Cumpleaños</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}


export default App;
