import hand  from "../assets/hand_icon.png";
import hero  from "../assets/hero_image.png";
import arrow  from "../assets/arrow.png";

function Hero() {
    return ( 
    <div className="container mx-auto bg-gradient-to-b from-purple-200  min-h-130">
        <div className=" grid max-sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col px-20 pt-20 col-span-1 mx-auto">
            <p className="font-bold m-2">NEW ARRIVALS ONLY</p>
            <div  className="flex items-center text-5xl font-bold">
                <p >new</p>
                <img className="w-20" src={hand} alt="" />
            </div  >
            <p className=" max-sm:text-3xl text-5xl lg:text-7xl font-medium">collections</p>
            <p className=" max-sm:text-3xl text-5xl lg:text-7xl font-medium">for everyone</p>
            <button className="rounded-3xl flex items-center gap-4 text-white max-md:text-xs cursor-pointer w-fit bg-red-500 px-6 py-3  my-10 ">Latest Collections
                <img src={arrow} alt="" />
            </button>
        </div>
        
        <div className="mx-auto col-span-1">
            <img className="h-130 " src={hero} alt="" />
        </div>
        </div>
    </div> 
);
}

export default Hero;