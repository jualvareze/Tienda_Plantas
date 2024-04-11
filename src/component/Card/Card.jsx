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
            agregarProducto()
        }else{
            newCarrito[index].cantidad =  newCarrito[index].cantidad + 1
            setCarrito(newCarrito)
        }
}


    const agregarProducto = () =>{  // agrega el producto al carrito
        const nuevoCarrito={
            nombre: props.nombre,
            precio: props.precio,
            imagen: props.imagen,
            cantidad: 1
        }
        setCarrito([...carrito,nuevoCarrito])
    }


    return (
        <>
            <div className='Card'>
                <img src={props.imagen} alt="" />
                <span className="unidad">0</span>
                <div className='info'>
                    <span>Nombre:{props.nombre}</span>
                    <span>Precio:${props.precio}</span>
                    <button onClick={() => productoExiste()}>
                    <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;