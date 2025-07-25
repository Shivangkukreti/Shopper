import { useContext } from "react";
import { Appcontext } from "../context/context";
import all_product from "../assets/all_product";
import cross from "../assets/cart_cross_icon.png";
import Carttotal from "./carttotal";

function Carttable() {
  let { cart, removefromcart, count } = useContext(Appcontext);
  const uniqueCart = Array.from(new Set(cart.map(item => item.id)))
    .map(id => cart.find(item => item.id === id));

  let sumtotal=0
  return (
    <div className="container px-10 mx-auto">
      {count == 0 ? (
        <div className="text-3xl text-bold text-gray-700 text-center mt-10">Empty cart !</div>
      ) : (
        <div className="flex">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b border-gray-300 text-gray-700 p-5">
                  Products
                </th>
                <th className="border-b border-gray-300 text-gray-700 p-5">
                  Title
                </th>
                <th className="border-b border-gray-300 text-gray-700 p-5">
                  Price
                </th>
                <th className="border-b border-gray-300 text-gray-700 p-5">
                  Quantity
                </th>
                <th className="border-b border-gray-300 text-gray-700 p-5">
                  Total
                </th>
                <th className="border-b border-gray-300 text-gray-700 p-5">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {
    

             uniqueCart.map((item, idx) => {
             let qty = cart.filter(ele => ele.id === item.id).length;
             sumtotal=sumtotal+qty*item.new_price

                return (
                  <tr key={idx}>
                    <td className="px-5 text-center border-b border-gray-200 ">
                      <img className="w-20 mx-auto" src={item.image} alt="" />{" "}
                    </td>
                    <td className="px-5 text-center border-b border-gray-200 text-xs">
                      {item.name}
                    </td>
                    <td className="px-5 text-center border-b border-gray-200 ">
                      ${item.new_price}
                    </td>
                    <td className="px-5 text-center border-b border-gray-200 ">
                     {qty}
                    </td>
                    <td className="px-5 text-center border-b border-gray-200 ">
                      ${qty*item.new_price}
                    </td>
                    <td className="px-5 text-center border-b border-gray-200 ">
                      <img
                        onClick={() => removefromcart(item.id)}
                        className="mx-auto cursor-pointer"
                        src={cross}
                        alt=""
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <Carttotal bill={sumtotal}></Carttotal>
    </div>
    
  );
}

export default Carttable;
