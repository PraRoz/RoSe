import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/Admin";
import { Button, Space, Table, Tag, Popconfirm, notification } from "antd";
import { getAllUser } from "../../../api/Admin/user";
import { useNavigate } from "react-router-dom";

function User() {
  const [allUser, setAllUser] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const users = await getAllUser();
    setAllUser(users?.data?.data);
  };

  console.log(allUser);
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      render: (text: any) => <a>{text ? text : "-"}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: any) => <a>{text ? text : "-"}</a>,
      // align: 'center' as 'center',
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Contact Number",
      dataIndex: "phone",
      key: "phone",
      render: (text: any) => <a>{text ? text : "-"}</a>,
    },
  ];

  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <Table
            columns={columns}
            dataSource={allUser}
            title={() => (
              <div className="flex justify-between items-center">
                {" "}
                <h1 className="text-2xl text-primary font-medium">
                  Users
                </h1>{" "}
              </div>
            )}
          />
        </div>
      </section>
    </AdminLayout>
  );
}

export default User;
