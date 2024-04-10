import './productos.css'
import Card from '../Card/Card';
import imgAloeVera from './img/aloe_vera.jpeg';
import imgCactus from './img/cactus.jpeg'
function Productos(){
    return(
        <>
        <div className="productos">
        <Card imagen={imgCactus} nombre="Cactus" precio="4.000"></Card>
        <Card imagen={imgAloeVera} nombre="Aloe vera" precio="5.000"></Card>
        <Card imagen={imgCactus} nombre="Cactus" precio="4.000"></Card>
        <Card imagen={imgAloeVera} nombre="Aloe vera" precio="5.000"></Card>
        <Card imagen={imgCactus} nombre="Cactus" precio="4.000"></Card>
        <Card imagen={imgAloeVera} nombre="Aloe vera" precio="5.000"></Card>
        </div>
        </>
    )
}
export default Productos