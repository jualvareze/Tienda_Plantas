
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import MyContext from './context/context'
import Home from './views/Home/Home';
import SobreNosotros from './views/SobreNosotros/SobreNosotros';
import Header from './component/Header/Header';
import Footer from './component/footer/Footer';
import Carrito from './views/Carrito/Carrito';
import AgregarProducto from './component/AgregarProducto/AgregarProducto';
function App() {
const [products,setProducts] = useState([]) //carrito


  return (
    <>
    <MyContext.Provider value={{products,setProducts}}>
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
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
