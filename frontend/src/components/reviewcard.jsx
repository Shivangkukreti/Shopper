import { useContext } from "react"
import { Appcontext } from "../context/context"
import { toast } from "react-toastify";
import axios from 'axios'

function Reviewcard({name,comment,revid,proid}) {
    let {api,usertoken}=useContext(Appcontext)

async function delrev() {
    try {
        console.log(usertoken);
        
      let {data}=await axios.post(api+'/product/deletereview',{revid,proid},{headers:{token:usertoken}})
    if (data.success) {
        toast.success(data.message)
    }else{
        toast.error(data.message)
    }   
    } catch (error) {
      toast.error(error.message)  
    }
   
}

    return ( 
        <div className="border border-gray-200 rounded p-2 space-y-2">
            <h3 className="font-medium">@{name}</h3>
            <p className="text-xs md:text-sm break-words">{comment}</p>
            <button onClick={delrev} className="bg-black text-white rounded px-2 py-1 hover:bg-orange-500 cursor-pointer mx-auto block">Del</button>
        </div>
     );
}

export default Reviewcard;