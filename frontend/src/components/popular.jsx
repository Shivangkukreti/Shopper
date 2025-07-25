
import Card from "./card";


function Popular({title,arr}) {
    return ( 
        <div className="container px-5 mx-auto mt-20 min-h-40">
            <h2 className="font-medium text-3xl text-center  ">{title}</h2>
            <hr className="w-30 mt-3 rounded border-2 mx-auto" />
            <div className=" grid  max-md:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-5   my-20">
                
                    {arr.map((item,idx)=>{
                return(
                    <div key={idx} className="col-span-1  flex justify-center items-center">
                    <Card id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} />
                    </div>
                )
            })} 
                
           
            </div>
        </div>
     );
}

export default Popular;