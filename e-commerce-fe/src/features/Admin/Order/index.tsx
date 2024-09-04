import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/Admin";
import { Button, Space, Table, Tag, Popconfirm, notification } from "antd";
import { getAllOrder } from "../../../api/Admin/order";
import { IOrder } from "../../../types";
import { useNavigate } from "react-router-dom";
function OrderDetails() {
  const [orderList, setOrderList] = useState<any>([]);
  const navigate = useNavigate()
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const orders = await getAllOrder();
      setOrderList(orders?.data?.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  
  const orderData =  orderList?.map((item: any) => {
    return {
      id: item?._id,
      name: item?.user_id?.userName,
      email: item?.user_id?.email,
      receiver_name: item?.receiver?.receiver_name,
      status: item?.status,
      receiver_contact: item?.receiver?.receiver_contact,
      method: item?.paymentMethod,
    };
  });

  const handelAction = (id:string) => {
      navigate(`/adminorder/${id}`)
  }
  const columns = [
    {
      title: "Order By",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: any) => <a>{text ? text : "-"}</a>,
      // align: 'center' as 'center',
    },
    {
      title: "ReceiverName",
      dataIndex: "receiver_name",
      key: "receiver_name",
    },
    {
      title: "ReceiverContact",
      dataIndex: "receiver_contact",
      key: "receiver_contact",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size={50}>
          <i className="fa-solid fa-eye text-primary  cursor-pointer hover:text-secondary" onClick={() =>handelAction(record.id)}></i>
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <Table
            columns={columns}
            dataSource={orderData}
            title={() => (
              <div className="flex justify-between items-center">
                {" "}
                <h1 className="text-2xl text-primary font-medium">
                  Orders
                </h1>{" "}
              </div>
            )}
          />
        </div>
      </section>
    </AdminLayout>
  );
}

export default OrderDetails;
