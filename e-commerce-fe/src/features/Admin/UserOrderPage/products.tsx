import React from "react";
import { ICart, IProduct } from "../../../types";

function Products({ products }: any) {
  const Product = ({ ...items }) => {
    return (
      <div className="cart-data flex items-start gap-4 shadow bg-emerald-100 p-2 mt-4">
        <div className="image-container bg-secondary flex items-center justify-center h-[7rem] p-1">
          <img
            src={items?.product_id?.photo}
            alt=""
            className="cover w-full h-full  "
          />
        </div>
        <div className="content">
          <h1 className="text-xl">{items?.product_id?.name}</h1>
          <div className="flex items-center gap-4">
            <h1 className="mt-1 text-base w-32 ">
              Price: Rs.{items?.product_id?.price}
            </h1>
            <h1 className="mt-1 text-base w-32">
              {" "}
              Quantity: {items?.quantity}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="mt-1 text-base w-32">Size: {items?.size}</h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <h1>Products</h1>
      {products?.map((item: ICart, index: any) => {
        return <Product {...item} key={index} />;
      })}
    </div>
  );
}

export default Products;
