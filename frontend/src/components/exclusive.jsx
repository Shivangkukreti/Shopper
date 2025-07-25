
import ex  from "../assets/exclusive_image.png";
import arrow  from "../assets/arrow.png";


function Exlucive() {

    return ( 
         <div className="container mx-auto w-[80%] h-fit  bg-gradient-to-b from-purple-100  ">
                <div className=" grid max-sm:grid-cols-1 md:grid-cols-2 mx-auto">
                <div className="flex flex-col px-10 pt-20 col-span-1 ">
                    <div className="space-y-5">
                    <p className="text-3xl text-center md:text-5xl font-medium">Exclusive</p>
                    <p className="text-3xl text-center md:text-5xl font-medium">Offers for you</p>
                    <p className=" max-md:text-sm text-center font-bold m-2">ONLY ON BEST SELLER PRODUCTS</p> 
                    </div>
                    
                   
                    <button className="rounded-3xl flex items-center
                     gap-4 text-white cursor-pointer w-fit bg-red-500 px-6 py-3  mx-auto my-10 ">Check now
                        <img  src={arrow} alt="" />
                    </button>
                </div>
                
                <div className="m-auto col-span-1">
                    <img className="h-80" src={ex} alt="" />
                </div>
                </div>
            </div>
     );
}

export default Exlucive;