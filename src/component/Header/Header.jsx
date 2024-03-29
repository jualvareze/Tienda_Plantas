import { Link } from "react-router-dom";
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter,faInstagram, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <nav>
                <div className="redes">
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} /></a>
                
                </div>
                <div className="menu">
                    <Link className="link" to='/'>Plantas</Link>
                    <Link className="link" to='/SobreNosotros'>sobre nosotros</Link>
                    <Link className="link" to='/Carrito'><FontAwesomeIcon icon={faCartShopping} /></Link>
                    
                </div>
            </nav>
        </>
    )
}
export default Header