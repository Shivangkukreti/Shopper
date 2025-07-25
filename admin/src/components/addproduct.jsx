import { useState } from "react";
import upload from "../assets/upload_cloud_icon.svg";
import axios from "axios";
import { toast } from "react-toastify";



function Addproduct() {
    let api=import.meta.env.VITE_api

    const [formdata, setform] = useState({name:'',new_price:"",old_price:"",category:'women'});
    let [image,setimg]=useState("")
    function handleall(event) {
      const { name, value } = event.target;
      setform(prev => ({
        ...prev,
        [name]: value
      }));
      
    }

    
    async function handlesubmit(event) {
      event.preventDefault();
      console.log(formdata);
    
      
      setform({name:'',new_price:"",old_price:"",category:'women'});
      setimg('')
      try {
        let form=new FormData(  )
        form.append("name", formdata.name);
        form.append("old_price", formdata.old_price);
        form.append("new_price", formdata.new_price);
        form.append("category", formdata.category);
        form.append("image", image);
        let {data}=await axios.post(api+'/product/addproduct',form)
       toast.success(data.message);
        
      } catch (error) {
       toast.error(error.message);
        
      }
      
    }
    return ( 
        <div className="bg-gray-100 w-full">
            <form onSubmit={handlesubmit} className="grid  grid-cols-2 gap-3 w-140 max-md:w-[80%] mx-auto my-15 bg-white p-5" >
                    <h2 className="text-center text-gray-600 font-medium col-span-2 text-2xl max-sm:text-xl">ADD PRODUCT</h2>
                <label  className="border border-gray-200 col-span-2 p-2 text-xs" >Product Title
                    <input className="w-full outline-none text-xl" value={formdata.name} onChange={handleall} type="text" name="name" />
                </label>
                <label  className="border border-gray-200 max-sm:col-span-2 p-2 text-xs">Price
                    <input  className="w-full outline-none text-xl" onChange={handleall} value={formdata.old_price} type="number" name="old_price" />
                </label>
                <label  className="border border-gray-200 max-sm:col-span-2 p-2 text-xs">After Discount
                    <input className="w-full outline-none text-xl" onChange={handleall} value={formdata.new_price} type="number" name="new_price" />
                </label> 
                <label className="border border-gray-200 p-2 max-sm:col-span-2 flex items-center">
                    <select className="w-full outline-none  " value={formdata.category} name="category"  onChange={handleall}>
                        <option value="women">Women</option>
                        <option value="kid">Kid</option>
                        <option value="men">Men</option>
                    </select>
                </label>
                <label className="bg-gray-100  row-span-2 max-sm:row-span-8 max-sm:col-span-2 flex justify-center items-center">
                    <input  onChange={(e)=>{
                        let file=e.target.files[0]
                        if (file) {
                           setimg(file) 
                        }
                    }} className="hidden" type="file" name="image" /><img className="w-20"  src={image ? URL.createObjectURL(image) : upload  }  />
                </label>

                <button className="bg-blue-400 p-2 text-white  max-sm:col-span-2">Add</button>
            </form>
        </div>
     );
}

export default Addproduct;