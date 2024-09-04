import { Radio} from "antd";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { ICart } from "../../../types";
import { changeSizeItem , changeQuantityItem, removeFromCart} from "../../../Redux/cartSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({id, name, photo, price , quantity, discount, size}:ICart) => {
  const dispatch = useDispatch();
  const newCartElement ={
    id:id,
    name:name,
    photo:photo,
    price:price,
    quantity:quantity,
    size:size,
  }
  const onChange = (e: RadioChangeEvent) => {
    dispatch(changeSizeItem({...newCartElement, size:e.target.value}))
  };

  const onQuantatyChange = (key: string) => {
      if (key == "add") {
        quantity = quantity+1;
      } else {
      quantity = quantity -1;
      }
  dispatch(changeQuantityItem({...newCartElement, quantity:quantity}))
  };
  const removeCart =() =>{
   dispatch(removeFromCart(id))
  }
  return (
    <div className="cart-data-container relative">
      <i className="fa-solid fa-xmark text-[1.5rem] text-primary absolute top-2 right-5 cursor-pointer" onClick={() =>removeCart()}></i>
      <div className="cart-data flex items-start gap-4 shadow p-2">
        <div className="image-container bg-secondary flex items-center justify-center h-[10rem] p-3">
          <img
            src={photo}
            alt=""
            className="cover w-full h-full  "
          />
        </div>
        <div>
          <h1 className="text-lg">{name}</h1>
          <h1 className="text-base mt-2">Rs.{price}</h1>
          <Radio.Group onChange={onChange} value={size} className="mt-2">
            <Radio value={"2xl"}>2Xl</Radio>
            <Radio value={"xl"}>Xl</Radio>
            <Radio value={"l"}>L</Radio>
            <Radio value={"m"}>M</Radio>
          </Radio.Group>
          <div className="flex flex w-full items-center gap-5 mt-2">
            <span>Quantity</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onQuantatyChange("sub")}
                disabled={quantity === 0 ? true :false}
                className={`${quantity === 0 ? "bg-secondary cursor-not-allowed" : "bg-primary"} !w-[20px]  p-[5px] !h-[20px] rounded-full flex items-center justify-center text-light font-medium`}
              >
                <i className="fa-solid fa-minus text-[13px]"></i>
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => onQuantatyChange("add")}
                className="bg-primary !w-[20px]  p-[5px] !h-[20px] rounded-full flex items-center justify-center text-light font-medium"
              >
                <i className="fa-solid fa-plus text-[13px]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
