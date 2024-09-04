import { Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { CartState } from "../../../Redux/cartSlice";
import { RootState } from "../../../Redux/store";
import { ICart } from "../../../types";

const Product = ({id, name, price, quantity, size ,photo}:ICart) => {
  return (
    <div className="cart-data flex items-start gap-4 shadow bg-emerald-100 p-2 mt-4">
      <div className="image-container bg-secondary flex items-center justify-center h-[7rem] p-1">
        <img
          src={photo}
          alt=""
          className="cover w-full h-full  "
        />
      </div>
        <div className="content">
            <h1 className="text-xl">{name}</h1>
            <div className="flex items-center gap-4">
            <h1 className="mt-1 text-base w-32 ">Price: Rs.{price}</h1>
            <h1 className="mt-1 text-base w-32"> Quantity: {quantity}</h1>
            </div>
            <div className="flex items-center gap-4">
            <h1 className="mt-1 text-base w-32">Size: {size}</h1>
            </div> 
        </div>
    </div>
  );
};

function ProductList() {
  const cart = useSelector((state: RootState) => state.cartReducer.items);
  
  const total = cart.reduce((aacumulator, object)=>{
    return aacumulator + Number(object.price)
  },0)
  
  return (
    <section className="flex flex-col w-1/2 pl-20 ">
        <div className="w-[90%]">
    <h1 className="my-2 text-xl font-medium">Your Order</h1>
      { cart.length > 0 ?
        cart.map((item) =>{
          return(
            <Product {...item}  key={item.id}/>
          )
        })

        : <div><Empty/></div>
      }
    
     <div className="total-amount flex justify-between items-center mt-10">
      <h1 className="text-xl font-medium">Total</h1>
      <h1 className="text-xl font-medium">Rs {total}</h1>
     </div>
        </div>
    </section>
  );
}

export default ProductList;
