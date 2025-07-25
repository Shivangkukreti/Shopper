import { NavLink } from "react-router-dom";


function Card({image,name,new_price,old_price,id}) {
    return ( 
        <div  className="flex flex-col max-sm:w-40   h-fit w-70 gap-2 hover:w-68 mb-10 items-center justify-center">
           <NavLink to={`/product/${id}`}> <img  onClick={()=> window.scrollTo(0,0)} src={image} alt="" /> </NavLink> 
            <div className="flex flex-col px-5">
                <p className="text-sm max-md:text-xs break-words"> {name} </p>
                <div >
                    <span className="font-medium"> ${new_price} </span>
                    <span className="line-through text-gray-400 text-sm"> ${old_price} </span>
                </div>
            </div>

        </div>
     );
}

export default Card;