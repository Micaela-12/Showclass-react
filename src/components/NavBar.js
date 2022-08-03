import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="Header">
            <h1 className="header__TitleIndex">Showclass Producciones! </h1>
            <Link to={"/Cart"}><CartWidget className='productos'></CartWidget></Link>
        
            <nav className="header__contenedor">
                <ul>
                    <Link to="/"><li><button type="button" className="header__color">Inicio</button></li></Link>
                    <Link to="/category/1"><li><button type="button" className="header__color">Cantantes</button></li></Link>
                    <Link to="/category/2"><li><button type="button" className="header__color">Bailarines</button></li></Link>
                    <Link to="/category/3"><li><button type="button" className="header__color">Los mas seleccionados</button></li></Link>
                    <Link to="/category/4"><li><button type="button" className="header__color">Especiales</button></li></Link>
                </ul>
               
                    <Link to={"/Cart"}></Link>
            </nav>
        </header>
    );
}
export default NavBar;