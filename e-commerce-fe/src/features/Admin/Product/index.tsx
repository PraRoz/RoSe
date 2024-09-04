import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/Admin";
import { Button, Space, Table, Tag, Popconfirm, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../../../api/Admin";
function AdminProduct() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, []);

  
  function click( id:string) {
    deleteProduct(id).then(()=>{
      notification.success({message:"Category deleted sucessfully"})
      getProducts();
  }).catch((err)=>{
      notification.error({message:err})
  })
  }

  const handelEdit = (id:string) =>{
      navigate(`/adminproduct/edit/${id}`)
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text:any) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      render: (text:any) => <a>{text? text: "-"}</a>,
    },
    {
      title: "Category",
      dataIndex: "category_id",
      key: "category_id",
      render: (item:any) => (<Tag color={"#AE9BC8"}>{Object.values(item.title)}</Tag>),
    },
    {
      title: "Action",
      key: "action",
      render: (_:any, record:any) => (
        <Space size={50}>
          <i className="fa-solid fa-pen-to-square text-primary  cursor-pointer hover:text-secondary" onClick={() => handelEdit(record._id)}></i>
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

  const getProducts = async () => {
    const products = await getAllProduct();
    console.log(products.data.data,"hhhhhhh");
    if(products?.data?.status === 200){
      setAllProducts(products?.data?.data)
    }
  };

  const addProd = () => {
    navigate("/adminproduct/create");
  };
  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <Table
            columns={columns}
            dataSource={allProducts}
            title={() => (
              <div className="flex justify-between items-center">
                {" "}
                <h1 className="text-2xl text-primary font-medium">
                  Product
                </h1>{" "}
                <Button type="primary" size="large" onClick={() => addProd()}>
                  + Add Product
                </Button>
              </div>
            )}
          />
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminProduct;
