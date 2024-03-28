import './cardcarrito.css'
function CardCarrito(){
    return(<>
    <div className="producto">
        <span>Nombre</span>
        <span>Precio</span>
        <span>Cantidad</span>
        <i className="fa-solid fa-trash-can"></i>
    </div>
    </>)
}

export default CardCarrito