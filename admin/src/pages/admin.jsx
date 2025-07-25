import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Addproduct from "../components/addproduct";
import Nav from "../components/navbar";
import Sidebar from "../components/sidebar";
import List from "../components/listproduct";
import { useEffect } from "react";
import { toast,ToastContainer } from "react-toastify";
function Admin() {
    let navi=useNavigate()
    useEffect(()=>{
        navi('/addproduct')
    },[])

    return ( 
        <>
       <Nav></Nav>
       <ToastContainer></ToastContainer>
       <div className="flex ">
          <Sidebar></Sidebar>
            <Routes>
                <Route path="/addproduct" element={<Addproduct></Addproduct>}/>
                <Route path="/listproduct" element={<List></List>}/>
            </Routes>
       </div>
         
          
           

        
        </>
        
     );
}

export default Admin;