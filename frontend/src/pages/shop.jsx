import { useContext, useEffect } from "react";
import Exlucive from "../components/exclusive";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Mail from "../components/mail";
import Popular from "../components/popular";
import { Appcontext } from "../context/context";


function Shop() {
    let{products}=useContext(Appcontext)

    let data_product=products.slice(0,4).filter(any=>any.category=='women')
    let new_collection=products.slice(-8)
  useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
}, []);
    return ( 
        <>
        <Hero></Hero>
       <Popular title={'POPULAR IN WOMEN'} arr={data_product} ></Popular>
       <Exlucive></Exlucive>
       <Popular title={'NEW COLLECTION'} arr={new_collection} ></Popular>
       <Mail></Mail>
       <Footer></Footer>
        </>
       
     );
}

export default Shop;