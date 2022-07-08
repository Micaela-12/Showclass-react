import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header className="header">
            <h1 className="header__TitleIndex">Showclass Producciones!</h1>
            <nav className="header__contenedor">
            <CartWidget />
                <ul>
                    <li><button type="button" className="header__color">Inicio</button></li>
                    <li><button type="button" className="header__color">15 años</button></li>
                    <li><button type="button" className="header__color">Casamiento</button></li>
                    <li><button type="button" className="header__color">Cooporativo</button></li>
                    <li><button type="button" className="header__color">Cumpleaños</button></li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar;