import {  createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";

export const Appcontext= createContext()

function Appcontextprovider({children}) {
    let api=import.meta.env.VITE_API
    let[cart,setcart]=useState([])
     let [count,setcount]=useState(0)
     let[usertoken,setusertoken]=useState(null)
     let[userdata,setuserdata]=useState(null)
     let[products,setproducts]=useState([])

    async function addtocart(id) {
        try {
          let {data}=await axios.post(api+'/user/addtocart',{id},{headers:{token:usertoken}})
       if (data.success) {
        console.log(data.any);
        toast.success(data.message)
        setcart(prev=>[...prev,data.any]) 
        } else{
            toast.error(data.message)
        }
    } catch (error) {
            toast.error(error.message);
            
        }
        
    }

    async function removefromcart(id) {
    try {
          let {data}=await axios.post(api+'/user/removefromcart',{id},{headers:{token:usertoken}})
       if (data.success) {
        console.log(data.cart);
        toast.error(data.message)
        setcart(data.cart)
           
        } 
    } catch (error) {
           toast.error(error.message);
            
        }
}



useEffect(()=>{
    async function getcartdata() {
        try {
         let {data}=await axios.get(api+'/user/me',{headers:{token:usertoken}})
        if (data.success) {
           setcart(data.me.cartdata)
        }   
        } catch (error) {
            toast.error(error.message);
            
        }
        
    }
    getcartdata()
},[usertoken])



useEffect(()=>{
   let trytoken=localStorage.getItem('usertoken')
       if (trytoken) 
        { setusertoken(trytoken)
            
        }
    
},[])


    useEffect(()=>{
        function managecount() {
            setcount(cart.length)
        }
        managecount()
        
    },[cart])



    async function getpro() {
        try {
          let {data}=await axios.get(api+'/product/all')
        if (data.success) {
            setproducts(data.allproducts)
        }  
        } catch (error) {
            toast.error(error.message);
            
        }  
    }
    useEffect(()=>{getpro()},[products])


let value={cart,setcart,addtocart,removefromcart,count,usertoken,setusertoken,api,userdata,setuserdata
    ,products
} 

    return ( 
    <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
     );
}

export default Appcontextprovider;
