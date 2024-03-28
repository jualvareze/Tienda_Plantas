import Card from "../Card/Card"
import './productos.css'
import imagen1 from './img/planta.jpg';
import imagen2 from './img/planta2.jpg';
function Productos(){
    return(
        <>
        <div className="productos">
        <Card imagen={imagen1}></Card>
        <Card imagen={imagen2}></Card>
        <Card imagen={imagen1}></Card>
        <Card imagen={imagen2}></Card>
        </div>
        </>
    )
}
export default Productos