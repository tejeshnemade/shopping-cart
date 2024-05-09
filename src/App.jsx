import React from 'react'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import Cart from './Component/Cart'
import { Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path='/product' element={ <Product/> } ></Route>
      <Route path='/cart' element={ <Cart/> } ></Route>
     </Routes>

    </>
  )
}

export default App