import './cardcarrito.css'
function CardCarrito(props){
    return(<>
    <div className="producto">
        <span>{props.nombre}</span>
        <span>precio</span>
        <span>Cantidad</span>
        <i className="fa-solid fa-trash-can"></i>
    </div>
    </>)
}

export default CardCarrito