import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Productdetails from './Pages/Productdetails'
import All from './Pages/All'
import { CartProvider } from './context/Context'
import Cart from './Pages/Cart'

function App() {
 
 

   

  return (
  <CartProvider>
   <BrowserRouter>
    <Navbar  />
    <Routes> 
    <Route path="/all" element={<All/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/product" element={ <Product />}/>
     <Route path="/productdetails/:id" element={<Productdetails/>}/>
     <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Contact/>
  </BrowserRouter>
  </CartProvider>
  )
}

export default App   






















