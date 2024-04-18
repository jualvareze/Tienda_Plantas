import "./carrito.css";
import CardCarrito from "../../component/CardCarrito/CardCarrito";
import MyContext from "../../context/context";
import { useContext, useState, useEffect } from "react";
function Carrito() {
  const { setProducts, products, carrito, setCarrito } = useContext(MyContext);
  const [total,setTotal] = useState(0)


  useEffect(() => {
    calcularTotal();
  }, [carrito]);

  const formatearNumero = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  const calcularTotal = () =>{
    let sumatotal = 0;
    carrito.forEach(element => {
      sumatotal = sumatotal + (element.precio * element.cantidad)
    });
    setTotal(formatearNumero.format(sumatotal));
  };

  return (
    <>
      <div className="carrito">
        <h2>Carrito</h2>
        <div className="lista-productos">
          {carrito.map((product) => (
            <CardCarrito
              urlImagen={product.urlImagen}
              nombre={product.nombre}
              tipo={product.tipo}
              precio={formatearNumero.format(product.precio)}
              cantidad={product.cantidad}
            />
          ))}
        </div>{
          carrito.length > 0 ? (
            <span>total: {total}</span>
          ) : (
            <span>No hay productos</span>
          )}
      </div>
    </>
  );
}
export default Carrito;
