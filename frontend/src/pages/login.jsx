import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { Appcontext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [formdata, setform] = useState({ name: "", email: "", password: "" });
  let [state, setstate] = useState("Login");
  let {api,usertoken,setusertoken}=useContext(Appcontext)
  let navi=useNavigate()


if (usertoken) {
  navi('/');
  return null; 
}



  function handleall(event) {
    const { name, value } = event.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  }

  async function handlesubmit(event) {
    event.preventDefault();
    setform({ name: "", email: "", password: "" });

    if (state=="Signup") {
      try {
       let {data}=await axios.post(api+'/user/signup',formdata)
      if (data.success) {
        
        console.log(data);
        setusertoken(data.token)
        localStorage.setItem('usertoken',data.token)
        navi('/')
        toast.success(data.message);
      }else{
        toast.error(data.message); 
      } 
      } catch (error) {
        console.log(error.message);
        
      }
      
    }
    
    
    else{
      try {
         let {data}=await axios.post(api+'/user/login',{email:formdata.email,password:formdata.password})
      if (data.success) {
        toast.success(data.message); 
        console.log(data);
        setusertoken(data.token)
        localStorage.setItem('usertoken',data.token)
        navi('/')
      }else{
        toast.error(data.message); 
      } 
      } catch (error) {
        toast.error(error.message);
      }
     

    }

  }
  return (
    <div className="bg-purple-200  h-[100vh] flex justify-center  ">
      <div className="bg-white  w-120 max-md:w-[70%] h-fit mt-10  ">
        <form
          onSubmit={handlesubmit}
          className="flex flex-col  py-5 px-5 md:px-10 gap-3 md:gap-5"
        >
          <h2 className="font-medium max-md:text-2xl text-3xl text">{state}</h2>
          {state == "Signup" ? (
            <label className="px-2 border border-gray-300 ">
              <input
                placeholder="Your name" 
                className="outline-none py-3 w-full"
                type="text"
                onChange={handleall}
                value={formdata.name}
                name="name"
              />
            </label>
          ) : (
            <></>
          )}

          <label className="px-2 border border-gray-300 ">
            <input
              placeholder="Your email"
              className="outline-none py-3 w-full"
              type="email"
              onChange={handleall}
              value={formdata.email}
              name="email"
            />
          </label>
          <label className="px-2 border border-gray-300 ">
            <input
              placeholder="Enter password"
              className="outline-none py-3 w-full"
              type="password"
              onChange={handleall}
              value={formdata.password}
              name="password"
            />
          </label>
          <button className="bg-orange-500 text-white  font-medium py-2 px-[10%] mx-auto w-fit">
            Continue
          </button>
          <p className="text-sm max-sm:text-xs ">
            {state == "Login"
              ? "Don't have an Account ? "
              : "Already have an account ? "}
            <span
              onClick={() => {
                if (state == "Login") {
                  setstate("Signup");
                } else {
                  setstate("Login");
                }
              }}
              className="text-orange-500 font-medium cursor-pointer"
            >
             
              {state == "Login" ? "Sign up here" : "Login here"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
