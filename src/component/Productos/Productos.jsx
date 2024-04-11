import "./productos.css";
import Card from "../Card/Card";
import imgAloeVera from "./img/aloe_vera.jpeg";
import MyContext from "../../context/context";
import { useContext } from "react";
function Productos() {
  const { setProducts, products } = useContext(MyContext);
  const { carrito, setCarrito } = useContext(MyContext);


  return (
    <>
      <div className="productos">
        {products.map((producto) => (
          <Card
            key={producto.idProducto}
            imagen={producto.urlImagen}
            nombre={producto.nombre}
            precio={producto.precio}
          />
        ))}
      </div>
    </>
  );
}
export default Productos;
