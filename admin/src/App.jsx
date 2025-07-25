import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import Nav from "./components/navbar";

function App() {
 

  return (
    <>
   
    <BrowserRouter>
     <Admin></Admin>
    </BrowserRouter>
    
  
    </>
    
  )
}

export default App
