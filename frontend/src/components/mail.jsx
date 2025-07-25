import { useState } from "react";

function Mail() {

    let[email,setemail]=useState('')

    return ( 
        <div className="container mx-auto w-[80%] p-10 bg-gradient-to-b from-purple-100 h-fit ">
            <div className="text-center space-y-5">
                <h2 className="font-medium text-xl md:text-3xl">Get Exclusive Offers on your Email</h2>
                <p>Subscribe to our newletter and stay updated !</p>
                <label className="bg-white border border-gray-200  flex mx-auto rounded-4xl w-fit">
                    <input placeholder="abc@gmail.com" onChange={(e)=>setemail(e.target.value)} required value={email} className="bg-white  outline-none max-sm:w-[75%] h-10 p-2 rounded-l-4xl " type="email" name="email"  />
                    <button  onClick={()=>console.log(email)} className="bg-black text-white h-10 rounded-4xl px-2  sm:px-4 sm:py-2 max-md:text-xs text-sm">Subscribe</button>
                </label>
            </div>
        </div>
     );
}

export default Mail;