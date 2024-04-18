import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import MyContext from "../../context/context";
import { useContext } from 'react';
function Card(props) {
    const { products,setProducts,carrito, setCarrito } = useContext(MyContext);

    const productoExiste= () =>{ // valida si existe por nombre
        const newCarrito = [...carrito];
        const index = newCarrito.findIndex(producto => producto.nombre === props.nombre);
        if (index == -1){
            agregarCarrito()
        }else{
            newCarrito[index].cantidad =  newCarrito[index].cantidad + 1
            setCarrito(newCarrito)
        }
}


    const agregarCarrito = () =>{  // agrega el producto al carrito
        const nuevoCarrito={
            nombre: props.nombre,
            precio: props.precio,
            urlImagen: props.imagen,
            tipo: props.tipo,
            cantidad: 1
        }
        setCarrito([...carrito,nuevoCarrito])
    }

    const formatearNumero = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      });

    return (
        <>
            <div className='Card'>
                <img src={props.imagen} alt="" />
                <div className='info'>
                    <span>Nombre: {props.nombre}</span>
                    <span>Tipo: {props.tipo}</span>
                    <span>Precio: {formatearNumero.format(props.precio)}</span>
                    <button onClick={() => productoExiste()}>
                    <FontAwesomeIcon alt="añadir al carrito" icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;