import './card.css'
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
                    <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;