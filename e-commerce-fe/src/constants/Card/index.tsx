import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Hoodie from "../../assets/Clothes/kindpng_623334.png";
import "./style.css";
import { Link } from "react-router-dom";
import { ICard, ICart} from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartState, removeFromCart } from "../../Redux/cartSlice";
import { RootState } from "../../Redux/store";
function Card({ _id, name, intro, photo, price, discount }: ICard) {
  const cart = useSelector((state: RootState) => state.cartReducer.items);

  const isAddedToCart = cart.some((el) => el.id === _id);

  const dispatch = useDispatch();
  
  const addCart = () => {
    const cartDetails: ICart = {
      id: _id,
      name: name,
      price: price,
      photo: photo,
      discount: discount || null,
      quantity: 1,
      size: "xl",
    };
    dispatch(addToCart(cartDetails));
  };

  const removeCart = () =>{
    dispatch(removeFromCart(_id))
  }
  return (
    <div
      className="card cursor-pointer"
      style={{ boxShadow: "5px 5px 15px -9px rgba(0,0,0,0.45)" }}
    >
      {discount && (
        <div
          className="ribbon"
          style={{ boxShadow: "5px -5px 15px -9px rgba(0,0,0,0.45)" }}
        >
          <span className="ribbon-2"></span>
          <span className="discount-text "> {discount}%</span>
        </div>
      )}
      <i className="fa-regular fa-heart fa-xl text-[#fff] absolute top-10 right-5"></i>
      <i className="fa-solid fa-share fa-xl text-[#fff] absolute top-20 right-5"></i>
      <Link to={`/product/${_id}`}>
        <div className="h-[40%] bg-primary px-5 py-3 flex justify-center rounded-tl-[20px] rounded-tr-[20px]">
          <img
            src={photo}
            alt=""
            className="card-image object-contain  w-[200px] h-[270px]  "
          />
        </div>
        <div className="w-full pt-24"></div>
      </Link>
      <div className="card-content px-5">
        <Link
          to={`/product/${_id}`}
          className=" flex flex-col items-center justify-center pb-5"
        >
          <h1 className="uppercase text-xl font-semibold">{name}</h1>
          <div className="px-5 text-center">
            <h2 className="text-sm my-2 font-medium opacity-70 ">{intro}</h2>
          </div>
        </Link>
        <div className="flex justify-between items-center text-2xl">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
            </div>
            <span className="font-medium">Rs {price}</span>
          </div>
          {isAddedToCart ? (
            <i className="fa-solid fa-circle-check text-[40px] text-secondary hover:text-primary hover:opacity-70" 
            onClick={() => removeCart()}
            ></i>
          ) : (
            <i
              className="fa-solid fa-cart-shopping text-[40px] hover:text-primary hover:opacity-70"
              onClick={() => addCart()}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
