import { useContext } from "react";
import { Appcontext } from "../context/context";

function Carttotal({bill}) {
  
  
    return ( 
        <div className="container px-10 mx-auto mt-20">
            <div className=" w-150 max-md:w-full">
               <h2 className="text-2xl font-medium">Cart Total</h2>
            <div className=" border-b border-gray-200 flex justify-between items-center">
                <span className="font-medium text-xl text-gray-600">Subtotal</span>
                <span>${bill}</span>
            </div>
            <div className=" border-b border-gray-200 flex justify-between items-center">
                <span className="font-medium text-xl text-gray-600">Shipping Fee</span>
                <span>$10</span>
            </div>
            <div className=" border-b border-gray-200 flex justify-between items-center ">
                <span className="font-bold text-xl text-gray-800">Total</span>
                <span className="font-medium text-orange-600">${bill+10}</span>
            </div> 
            <button className="text-white px-4 py-2 bg-orange-500 m-5">Proceed TO Checkout</button>
            </div>
            
        </div>
     );
}

export default Carttotal;