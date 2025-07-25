import { useEffect, useState } from "react";
import axios from "axios";
import cross from "../assets/cross_icon.png";
import { toast } from "react-toastify";

function List() {
    let api=import.meta.env.VITE_api
    let [allproducts,setall]=useState([])

    async function del(id) {
        try {
             let {data}=await axios.post(api+"/product/deleteproduct",{id})
        toast.error(data.message);

         
        } catch (error) {
            toast.error(error);
            
        }
      
    }

    async function getpro() {
        try {
           let {data}=await axios.get(api+"/product/all")
        if (data.success) {
            setall(data.allproducts)
        }else{
            toast.error(data.success);
            
        } 
        } catch (error) {
         toast.error(error.message);
            
        }
        
    }
    useEffect(()=>{
        getpro()
    },[allproducts])
    return ( 
        
       <div className="container md:px-10 mx-auto">
        <div className="flex">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b border-gray-300 text-gray-700 max-sm:text-xs sm:p-5">
                  Products
                </th>
                <th className="border-b border-gray-300 text-gray-700 max-sm:text-xs p-5 max-md:hidden">
                  Title
                </th>
                <th className="border-b border-gray-300 text-gray-700 max-sm:text-xs md:p-5 max-sm:hidden">
                  Price
                </th>
                <th className="border-b border-gray-300 text-gray-700 max-sm:text-xs md:p-5">
                  Discount
                </th>
                <th className="border-b border-gray-300 text-gray-700 max-sm:text-xs md:p-5">
                  Category
                </th>
                <th className="border-b border-gray-300 text-gray-700 max-sm:text-xs md:p-5">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {allproducts.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="sm:px-5 text-center border-b border-gray-200 ">
                      <img className="h-15 w-15 mx-auto " src={item.image} alt="" />{" "}
                    </td>
                    <td className="px-5 text-center border-b border-gray-200 text-xs max-md:hidden">
                      {item.name}
                    </td>
                    <td className="md:px-5 text-center border-b border-gray-200 max-sm:hidden">
                      ${item.old_price}
                    </td>
                    <td className="md:px-5 text-center border-b border-gray-200 ">
                      ${item.new_price}
                    </td>
                    <td className="md:px-5 text-center border-b max-sm:text-xs border-gray-200 ">
                      {item.category}
                    </td>
                    <td className="md:px-5 text-center border-b border-gray-200 ">
                     <img
                       onClick={() => del(item.id)}
                       className="mx-auto cursor-pointer"
                       src={cross}
                       alt=""
                     />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
     
     
    </div>
     );
}

export default List;