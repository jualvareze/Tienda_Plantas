import './cardcarrito.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
function CardCarrito(props){
    return(<>
    <div className="producto">
        <span>{props.nombre}</span>
        <span>precio</span>
        <span>Cantidad</span>
        <FontAwesomeIcon icon={faTrashCan} />
    </div>
    </>)
}

export default CardCarrito