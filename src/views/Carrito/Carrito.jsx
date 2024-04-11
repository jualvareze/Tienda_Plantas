import "./carrito.css";
import CardCarrito from "../../component/CardCarrito/CardCarrito";
import MyContext from "../../context/context";
import { useContext } from "react";
function Carrito() {
  const { setProducts, products, carrito, setCarrito } = useContext(MyContext);
  return (
    <>
      <div className="carrito">
        <h2>Carrito</h2>
        <div className="lista-productos">
          <div className="head-product">
            <span>Nombre</span>
            <span>Precio</span>
            <span>Cantidad</span>
            <span></span>
          </div>
          {carrito.map((product) => (
            <CardCarrito
              nombre={product.nombre}
              precio={product.precio}
              cantidad={product.cantidad}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Carrito;
