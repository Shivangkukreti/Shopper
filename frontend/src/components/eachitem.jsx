

import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/context";
import { useParams } from "react-router-dom";
import star from "../assets/star_icon.png";
import dstar from "../assets/star_dull_icon.png";
import { toast } from "react-toastify";

function Eachitem() {
let [pro,setpro]=useState({})
    let {products,addtocart}=useContext(Appcontext)
    let {id}=useParams()
    
    useEffect(()=>{
        function getpro() {
            let x=products.find(e=>e.id==id)
            if (x) {
              setpro(x)  
            }
            
        }
        getpro()
    },[id,products])


    return ( 
        <div className="p-5 container lg:p-10 mx-auto">
            <div className="w-full h-fit  grid grid-cols-3 max-md:grid-cols-1">
                <div className="flex col-span-1 justify-center gap-4">
               <div className="flex flex-col justify-between">
               <img className="h-22 max-sm:h-18" src={pro.image} alt="" /> 
               <img className="h-22 max-sm:h-18" src={pro.image} alt="" /> 
               <img className="h-22 max-sm:h-18" src={pro.image} alt="" /> 
               <img className="h-22 max-sm:h-18" src={pro.image} alt="" /> 
            </div>
            <div >
               <img className="h-full" src={pro.image} alt="" /> 
            </div> 
                </div>
            <div className="col-span-2 px-10 flex flex-col mt-5 gap-3">
                <h1 className="font-medium text-2xl text-gray-700"> {pro.name} </h1>
                <div className="flex gap-1 m-2">
                <img className="w-3"  src={star} alt="" />
                <img className="w-3"  src={star} alt="" />
                <img  className="w-3" src={star} alt="" />
                <img  className="w-3" src={star} alt="" />
                <img  className="w-3" src={dstar} alt="" />
                </div>
                <div>
                    <span className="font-medium text-3xl text-orange-500"> ${pro.new_price} </span>
                    <span className="line-through text-1xl font-medium text-gray-400 "> ${pro.old_price} </span>
                </div>
                <div className="text-sm text-gray-700">Lorem ipsum dolor   explicabo quis? Quasi omnis sit
                     maxime officia? Debitis dolore voluptatibus reprehenderit 
                     iste facilis! Voluptates saepe nihil sapiente.</div>

                <div>
                    <h3 className="text-xl font-medium text-gray-600"> Select size</h3>
                    <div className="flex gap-4 flex-wrap">
                      <span className="py-2 px-4 rounded border border-gray-300 bg-gray-100">S</span>
                    <span className="py-2 px-4 rounded border border-gray-300 bg-gray-100">M</span>
                    <span className="py-2 px-4 rounded border border-gray-300 bg-gray-100">L</span>
                    <span className="py-2 px-4 rounded border border-gray-300 bg-gray-100">XL</span>
                    <span className="py-2 px-4 rounded border border-gray-300 bg-gray-100">XXL</span>  
                    </div></div>


                     <button onClick={()=>addtocart(pro.id)} className="bg-orange-500 rounded text-white  font-medium py-2 px-10  w-fit">Add to Cart</button>

                     <div> <strong>Category :</strong> {pro.category}</div>
                    
                

            </div>




            
            </div>
        </div>
     );
}

export default Eachitem;