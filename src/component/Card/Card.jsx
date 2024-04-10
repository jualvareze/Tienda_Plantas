import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import MyContext from "../../context/context";
import { useContext } from 'react';
function Card(props) {
    const { products,setProducts } = useContext(MyContext);

    const productoExiste= () =>{
        const newProducts = [...products];
        const index = newProducts.findIndex(producto => producto.nombre === props.nombre);
        console.log(index)
        if (index == -1){
            agregarProducto()
        }else{
            console.log("agregar cantidad")
            newProducts[index].cantidad =  newProducts[index].cantidad + 1
            setProducts(newProducts)
        }
}


    const agregarProducto = () =>{
        const nuevoProducto={
            nombre: props.nombre,
            precio: props.precio,
            imagen: props.imagen,
            cantidad: 1
        }
        setProducts([...products,nuevoProducto])
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