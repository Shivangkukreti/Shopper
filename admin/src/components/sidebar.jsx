import { NavLink } from "react-router-dom";
import add from "../assets/Product_Cart.svg";
import all from "../assets/Product_list_icon.svg";



function Sidebar() {

    return ( 
        <div className="h-[100vh] w-fit shrink-0 shadow">
            <NavLink to={'/addproduct'}>
            <div  className="flex  bg-gray-100 p-2 gap-2  mx-2 my-1 cursor-pointer">
                
                <img src={add} alt="" />
                <span className="font-medium text-gray-700 max-sm:hidden hover:text-orange-500 ">Add <span className="max-md:hidden">products</span></span>
          </div>
                </NavLink>
               <NavLink  to={'/listproduct'}>
               <div className="flex  bg-gray-100  p-2 gap-2 m-2 cursor-pointer">
                <img src={all} alt="" />
                <span className="font-medium text-gray-700 max-sm:hidden hover:text-orange-500 ">All <span className="max-md:hidden">products</span></span>
            </div> 
                </NavLink>   
            
        </div>
     );
}

export default Sidebar;