import React from "react";
import AdminLayout from "../../../layout/Admin";
import { Button, notification } from "antd";

function AdminHomePage() {
  const handelLogout = () => {
    notification.success({ message: "Log out Sucessfull" });
    localStorage.removeItem("token");
    sessionStorage.removeItem("AdminAuth");
    setTimeout((window.location.href = "/"), 1000);
  };
  return (
    <AdminLayout>
      <div>
        <div className="w-full flex justify-center items-center h-screen">
          <div className="w-[500px] h-[300px] bg-[#e4daf2] flex justify-center items-center">
            <Button
              size="large"
              className="!bg-secondary !border-secondary  text-light hover:!text-secondary hover:!bg-light"
              onClick={handelLogout}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminHomePage;
