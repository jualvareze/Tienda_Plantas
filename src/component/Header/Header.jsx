import { Link } from "react-router-dom";
import './header.css'
function Header() {
    return (
        <>
            <nav>
                <div className="redes">
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://web.whatsapp.com/"><i className="fa-brands fa-whatsapp"></i></a>
                
                </div>
                <div className="menu">
                    <Link className="link" to='/'>Plantas</Link>
                    <Link className="link" to='/SobreNosotros'>sobre nosotros</Link>
                    <Link className="link" to='/Carrito'><i className="fa-solid fa-cart-shopping"></i></Link>
                    
                </div>
            </nav>
        </>
    )
}
export default Header