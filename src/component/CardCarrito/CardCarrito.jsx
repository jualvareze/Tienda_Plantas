import "./cardcarrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import MyContext from "../../context/context";
import { useContext } from "react";
function CardCarrito(props) {
  const { products, setProducts, carrito, setCarrito } = useContext(MyContext);

  const productoExiste = () => {
    const newCarrito = [...carrito];
    const index = newCarrito.findIndex((producto) => producto.nombre === props.nombre);
    if (index == -1) {
      console.log("el producto no esta en el carrito");
    }
    if (newCarrito[index].cantidad == 1) {
      eliminarProducto(index);
    } else {
      console.log("eliminar unidad Producto");
      newCarrito[index].cantidad = newCarrito[index].cantidad - 1;
      setCarrito(newCarrito);
    }
  };

  const eliminarProducto = (index) => {
    const newProducts = [...carrito];
    newProducts.splice(index, 1);
    setCarrito(newProducts);
  };

  return (
    <>
      <div className="card-carrito">
        <span>{props.nombre}</span>
        <span>{props.precio}</span>
        <span>{props.cantidad}</span>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => productoExiste(props.nombre)}
        />
      </div>
    </>
  );
}

export default CardCarrito;
