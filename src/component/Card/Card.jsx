import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
function Card(props) {
    return (
        <>
            <div className='Card'>
                <img src={props.imagen} alt="" />
                <span className="unidad">0</span>
                <div className='info'>
                    <span>Nombre:</span>
                    <span>Precio:</span>
                    <button>
                    <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;