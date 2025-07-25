import './index.css'
import Nav from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/shop'
import Shopcategory from './pages/shopcategory'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/login'
import kids from "./assets/banner_kids.png";
import mens from "./assets/banner_mens.png";
import womens from "./assets/banner_women.png";
import { useContext, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Appcontext } from './context/context'


function App() {
   let {usertoken}=useContext(Appcontext)

  return (
    <>
    <Nav></Nav>
    <ToastContainer></ToastContainer>
    <Routes>
    <Route path='/' element={<Shop></Shop>} />
    <Route path='/womens' element={<Shopcategory banner={womens} category={"women"} ></Shopcategory>} />
    <Route path='/kids' element={<Shopcategory banner={kids} category={"kid"} ></Shopcategory>} />
    <Route path='/mens' element={<Shopcategory banner={mens} category={"men"} ></Shopcategory>} />
    <Route path='/product' element={<Product></Product>} >
    <Route path=':id' element={<Product></Product>} />
    </Route>
    <Route path='/cart' element={<Cart></Cart>} />
   <Route path='/login' element={ <Login></Login>} />
    </Routes>

    
    </>
  )
}

export default App
