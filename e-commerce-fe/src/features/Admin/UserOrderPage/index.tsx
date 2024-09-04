import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../api/Admin/order";
import AdminLayout from "../../../layout/Admin";
import { IProduct } from "../../../types";
import Products from "./products";
import User from "./user";

function UserOrdersPage() {
  const { id } = useParams();
  const [order, setOrder] = useState<any>();

  useEffect(() => {
    getOrderDetails();
  }, []);

  const getOrderDetails = async () => {
    const data = await getOrderById(id);
    setOrder(data?.data?.data);
  };

  console.log(order);
  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <h1 className="text-2xl text-primary text-medium">
            Order <span className="font-semibold text-secondary">#0001</span>
          </h1>
          <div className="flex gap-4 text-xs mt-2">
            <div className="status bg-[#1fb3d1] px-2 py-1 rounded-lg text-light">
              Pending
            </div>
            <div className="method bg-[#9e09de] px-2 py-1 rounded-lg text-light">
              Cash on Delivery
            </div>
          </div>
          <div className="mt-5 flex flex-start gap-10">
            <Products products={order?.products} />
            <User user={order?.receiver} />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default UserOrdersPage;
