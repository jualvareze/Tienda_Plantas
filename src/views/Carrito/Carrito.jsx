import './carrito.css'
import CardCarrito from '../../component/CardCarrito/CardCarrito'
function Carrito(){
    return(
        <>
        <h2>Carrito</h2>
        <div className="lista-productos">
            <div className='head-product'>
            <span>Nombre</span>
        <span>Precio</span>
        <span>Cantidad</span>
        <span></span>
            </div>
            <CardCarrito/>
            <CardCarrito/>
            <CardCarrito/>
            <CardCarrito/>
            <CardCarrito/>
            <CardCarrito/>
            <CardCarrito/>
        </div>
        </>
    )
}
export default Carrito