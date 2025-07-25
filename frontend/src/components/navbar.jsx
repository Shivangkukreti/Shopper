import logo from "../assets/logo.png";
import navdrop from "../assets/nav_dropdown.png";
import cart from "../assets/cart_icon.png";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/context";
import {toast} from "react-toastify";

function Nav() {
    let nav=useNavigate()
   let {count,usertoken,setusertoken,setcart}=useContext(Appcontext)
    let[isopen,setisopen]=useState(false)
    
    return ( 
        <div className="shadow py-1 bg-white z-10 sticky   top-0">
            <div className="container mx-auto px-10 flex flex-wrap items-center justify-between">
                <div onClick={()=>nav('/')} className="flex gap-2 items-center ">
                  <img  src={logo} alt="" />  
                  <span className="font-bold  text-sx  sm:text-3xl cursor-pointer">Shopper</span>
                </div>
             <div  onClick={()=>setisopen(!isopen)} className="sm:hidden self-center flex justify-end  w-30 ">
                   <img  src={navdrop} alt="" />
                </div> 
              

                    <div className={isopen ? "block ml-10 mb-5" :"max-sm:hidden"}> 
                        <ul className="gap-5 cursor-pointer flex ">
                        <li  >
                           <NavLink className={({isActive})=>isActive ? "border-b-2  border-red-600":""} to={'/'}>Shop </NavLink> </li>
                        <li >
                           <NavLink className={({isActive})=>isActive ? "border-b-2  border-red-600":""} to={'/mens'}>Mens </NavLink></li>
                        <li  >
                            <NavLink className={({isActive})=>isActive ? "border-b-2  border-red-600":""} to={'/womens'}>Womens </NavLink></li>
                        <li  >
                            <NavLink className={({isActive})=>isActive ? "border-b-2  border-red-600":""} to={'/kids'}>Kids </NavLink></li>
                    </ul>
                    </div>
                    
              
                <div className={"flex items-center gap-2 "+(isopen ? "block ml-5":" max-sm:hidden ")}>
                   {usertoken ? 
                   <span onClick={()=>{
                    setusertoken(null)
                    setcart([])
                    localStorage.removeItem('usertoken')
                    toast.error('logged out');

                    
                   }} className="rounded-2xl border  px-4 py-2 border-gray-500  ">Logout</span>
                   :<NavLink to={'/login'} >
                    <span className="rounded-2xl border  px-4 py-2 border-gray-500  ">Login</span></NavLink>} 
                    <div onClick={()=>nav('/cart')} className="relative">
                       <img  src={cart} alt="" /> 
                       <span className="absolute -top-1 -right-2 bg-red-700 rounded-full  flex items-center justify-center text-white w-5 h-5"> {count} </span>
                    </div>
                </div>



               

                
            
           </div> </div>
      
     );
}

export default Nav;