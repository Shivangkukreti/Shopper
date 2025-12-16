import { useContext, useEffect, useState } from "react";
import Reviewcard from "./reviewcard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Appcontext } from "../context/context";

function Des() {
  let [state, setstate] = useState("des");
  let [comment,setcomment]=useState('')
  let{usertoken,api,products}=useContext(Appcontext)
  let {id}=useParams()
  let [mypro,setmypro]=useState({})
  
 useEffect(()=>{
        function getpro() {
            let x=products.find(e=>e.id==id)
            if (x) {
              setmypro(x)  
            }
            
        }
        getpro()
    },[id,products])

  async function addrev() {
    try {
       let {data}=await axios.post(api+'/product/addreview',{comment,id},{headers:{token:usertoken}})
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
    <div className="container p-10 mx-auto  ">
      <div>
        <button
          onClick={() => setstate("des")}
          className={
            "border border-gray-300 px-2 py-1 " +
            (state == "des" ? "bg-white " : "bg-gray-100 text-gray-500")
          }
        >
          Desciption
        </button>
        <button
          onClick={() => setstate("review")}
          className={
            "border border-gray-300 px-2 py-1 " +
            (state == "review" ? "bg-white" : "bg-gray-100 text-gray-500")
          }
        >
          Reviews
        </button>
      </div>
      <div className="border border-gray-300 p-4">
        {state == "des" ? (
          <p className="text-sm max-sm:text-xs text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsum repellendus voluptates assumenda, quidem quibusdam itaque
            dolor, sunt in quia corrupti. Ratione numquam harum, esse natus
            deserunt repudiandae consectetur quia! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Architecto a quidem rerum iure aliquid
            distinctio nemo, veniam doloremque illum sunt ad eos laboriosam
            nulla delectus! Quo laborum dolore earum ipsa!
          </p>
        ) : (
          <>
          <div className="w-[70%] mx-auto">
            <h2 className="text-center font-medium text-gray-600  text-2xl">Give Feedback</h2>
            <label>
              <textarea onChange={(e)=>setcomment(e.target.value)} value={comment} className="border border-gray-300 mx-auto w-full rounded outline-none p-5"></textarea>
            </label>
            <button onClick={(e)=>{addrev();e.preventDefault();setcomment('')}} className="bg-black text-white rounded px-4 py-2 hover:bg-orange-500 cursor-pointer mx-auto block">Add</button>
          </div>
          <div className="lg:w-[90%] my-10 rounded mx-auto border border-gray-200 shadow
          grid lg:grid-cols-3 grid-cols-2 gap-2 p-2 ">
            {mypro.review.length>0? mypro.review.map(ele=>{
              return(
                <Reviewcard proid={id} revid={ele._id} name={ele.username} comment={ele.comment} />
              )
            }): <div className="font-medium col-span-2 lg:col-span-3 text-center">No Reviews yet , Add one !</div> }
          </div>
          </>
          
        )}
      </div>
    </div>
  );
}



export default Des;
