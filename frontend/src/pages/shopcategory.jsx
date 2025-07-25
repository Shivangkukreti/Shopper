import { useContext, useEffect } from "react";
import { Appcontext } from "../context/context";
import Card from "../components/card";
import drop from "../assets/dropdown_icon.png"


function Shopcategory({category,banner}) {

   useEffect(()=>window.scrollTo(0,0),[category])

    let {products}=useContext(Appcontext)
    return ( 
        <div className="container  mx-auto">
            <div><img src={banner} alt="" /></div>
            <div>
                <div className="flex items-center gap-2 m-4 border rounded w-fit px-4 py-1 cursor-pointer hover:text-white hover:bg-orange-500 border-gray-300">
                   <span>Sort By </span> <img src={drop} alt="" />
                </div>
                
            </div>
            <div className=" grid max-md:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 p-10  ">
            {products.map((item,idx)=>{
                if (item.category==category) {
                  return(
                    <div className="col-span-1 flex justify-center items-center" key={idx}>
                        <Card id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} />
                    </div>
                )   
                }
               
            })}
            </div>
        </div>
     );
}

export default Shopcategory;