import "./cardcarrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import MyContext from "../../context/context";
import { useContext } from "react";
function CardCarrito(props) {
  const { products, setProducts } = useContext(MyContext);

  const productoExiste = () => {
    const newProducts = [...products];
    const index = newProducts.findIndex((producto) => producto.nombre === props.nombre);
    if (index == -1) {
      console.log("el producto no esta en el carrito");
    }
    if (newProducts[index].cantidad == 1) {
      eliminarProducto(index);
    } else {
      console.log("eliminar unidad Producto");
      newProducts[index].cantidad = newProducts[index].cantidad - 1;
      setProducts(newProducts);
    }
  };

  const eliminarProducto = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  return (
    <>
      <div className="producto">
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
