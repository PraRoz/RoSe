import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/Admin";
import {
  Button,
  Space,
  Table,
  Tag,
  Popconfirm,
  notification,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { getAllCategory, deleteCategory } from "../../../api/Admin";

interface DataType {
  key: string;
  title: String;
  description: Number;
  color: String;
}
type ICategory = {
  _id: any;
  title: string;
  description: string;
  color: string;
};
const data = [
  {
    title: "Women",
    description: "Women Clothes",
  },
];

function AdminCategory() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  function click(id: string) {
    // notification.success({ message: id });
    deleteCategory(id)
      .then(() => {
        notification.success({ message: "Category deleted sucessfully" });
        getCategory();
      })
      .catch((err) => {
        notification.error({ message: err });
      });
  }

  function handelEdit(id: string) {
    navigate(`/admincategory/edit/${id}`);
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size={50}>
          <i
            className="fa-solid fa-pen-to-square text-primary  cursor-pointer hover:text-secondary"
            onClick={() => handelEdit(record._id)}
          ></i>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this product?"
            okText="Yes"
            onConfirm={() => click(record._id)}
            cancelText="No"
            icon={<i className="fa-solid fa-circle-question text-[red]"></i>}
          >
            <i className="fa-solid fa-trash text-[#ed1d24]  cursor-pointer hover:text-[#d4353f]"></i>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const getCategory = async () => {
    const res = await getAllCategory();
    setCategory(res?.data?.data);
  };
  const addCateg = () => {
    navigate("/admincategory/create");
  };
  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <Table
            columns={columns}
            dataSource={category}
            title={() => (
              <div className="flex justify-between items-center">
                {" "}
                <h1 className="text-2xl text-primary font-medium">
                  Category
                </h1>{" "}
                <Button type="primary" size="large" onClick={() => addCateg()}>
                  + Add Category
                </Button>
              </div>
            )}
          />
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminCategory;
