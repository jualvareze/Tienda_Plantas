import MyContext from "../../context/context";
import { useContext } from "react";
function AgregarProducto() {
    const { setProducts,products } = useContext(MyContext);

    const agregarProducto = (nuevoProducto) => {
        setProducts([...products, nuevoProducto]); // Agregar el nuevo producto al final del array
    };

    return (
        <>
            <button onClick={() => agregarProducto(123)}>agregar</button>
        </>
    )
}

export default AgregarProducto