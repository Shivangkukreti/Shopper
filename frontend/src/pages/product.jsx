import Des from "../components/description";
import Eachitem from "../components/eachitem";
import data_product from "../assets/data";
import Popular from "../components/popular";
import { useContext } from "react";
import { Appcontext } from "../context/context";


function Product () {
    let {products}=useContext(Appcontext)
    return ( 
        <>
        <Eachitem></Eachitem>
        <Des></Des>
        <Popular arr={products.slice(-4)} title={"Related Products"}></Popular>
        </>
        
     );
}

export default  Product;
