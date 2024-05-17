
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import MyContext from './context/context'
import SobreNosotros from './views/SobreNosotros/SobreNosotros';
import Header from './component/Header/Header';
import Footer from './component/footer/Footer';
import Carrito from './views/Carrito/Carrito';
import AgregarProducto from './component/AgregarProducto/AgregarProducto';
import Catalogo from './views/Catalogo/Catalogo'
import Admin from './views/private/admin/Admin';
import Producto from './views/Producto/Producto';
function App() {
const [products,setProducts] = useState([]) //productos
const [carrito,setCarrito] = useState([]) // carrito
const apiUrl = import.meta.env.VITE_API_URL;

useEffect(()=>{
  const getPlants = async () => {
    try {
      const response = await fetch(apiUrl+"/plants");
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  getPlants()
},[])



  return (
    <>
    <MyContext.Provider value={{products,setProducts, carrito, setCarrito}}>
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Catalogo/>}></Route>
            <Route path="/producto" element={<Producto/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/SobreNosotros" element={<SobreNosotros/>}></Route>
            <Route path="/Carrito" element={<Carrito/>}></Route>
            <Route path="/AgregarProducto" element={<AgregarProducto></AgregarProducto>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App
