import './carrito.css'
import CardCarrito from '../../component/CardCarrito/CardCarrito'
import MyContext from "../../context/context";
import { useContext } from "react";
function Carrito(){
    const { setProducts,products } = useContext(MyContext);
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
            {products.map(product => (
                    <CardCarrito 
                        nombre={product.nombre} 
                        precio={product.precio}
                        cantidad={product.cantidad}
                    />
                ))}
        </div>
        </>
    )
}
export default Carrito